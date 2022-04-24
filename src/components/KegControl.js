import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';
import { v4 } from "uuid";

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainKegList: [
        {
          name: 'Wayfinder Hell',
          style: 'Helles Lager',
          abv: '4.9',
          price: '6',
          remainingPints: 31,
          id: v4()
        },
        {
          name: 'Block15 Sticky Hands',
          style: 'WC DIPA',
          abv: '8.1',
          price: '7',
          remainingPints: 82,
          id: v4()
        },
        {
          name: 'Modern Times Ice',
          style: 'Pilsner',
          abv: '4.8',
          price: '5',
          remainingPints: 0,
          id: v4()
        },
        {
          name: 'Great Notion Ripe',
          style: 'Hazy IPA',
          abv: '7.0',
          price: '7',
          remainingPints: 1,
          id: v4()
        }
      ],
      selectedKeg: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({mainKegList: newMainKegList,formVisibleOnPage: false });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleSellingPint = (id) => {
    const kegSellingPint = this.state.mainKegList.filter(keg => keg.id === id)[0];
    if (kegSellingPint.remainingPints > 0) {
      const editedKeg = {...kegSellingPint, remainingPints: kegSellingPint.remainingPints - 1};
      const editedMainKegList = this.state.mainKegList
        .filter(keg => keg.id !== id)
        .concat(editedKeg);
      this.setState({
        mainKegList: editedMainKegList
      });
    }
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingKeg = (kegToEdit) => {
    const editedMainKegList = this.state.mainKegList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
    this.setState({
        mainKegList: editedMainKegList,
        editing: false,
        selectedKeg: null
      });
  }

  handleDeletingKeg = (id) => {
    const newMainKegList = this.state.mainKegList.filter(keg => keg.id !== id);
    this.setState({
      mainKegList: newMainKegList,
      selectedKeg: null
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditKegForm keg = {this.state.selectedKeg} onEditKeg = {this.handleEditingKeg} />
      buttonText = "Return to Keg List";
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} onClickingDelete= {this.handleDeletingKeg} onClickingEdit= {this.handleEditClick} />
      buttonText = "Return to Keg List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Return To Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.mainKegList.sort((a, b) =>
        (a.remainingPints - b.remainingPints)
      )} onKegSelection={this.handleChangingSelectedKeg} onSellingPint={this.handleSellingPint}/>
      buttonText = "Add Keg";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <div className="flex justify-center">  
          <button className="border-2 border-solid border-yellow-900 bg-yellow-800 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full mt-2" onClick={this.handleClick}>{buttonText}</button>
        </div>
      </React.Fragment>
    );
  }
    
}

export default KegControl;