import React, { Component } from "react";
import CreateRoundModerator from "./CreateRoundModerator";

export class Home extends Component {
  state = {
    page: 1
  };

  switchPage = (e) => {
      const newpage = e.target.value;
      //const { page } = this.state;
    this.setState({
      page: newpage
    });
  };

  render() {
      const {page} = this.state
      console.log(page)
    switch (page) {
      case 1:
        return (
          <div>
            <button value="2" onClick={this.switchPage}>
              Schnelle Runde erstellen
            </button>
            <br />
            <button value="6" onClick={this.switchPage}>
              Runde beitreten
            </button>
            <br />
            <button value="9" onClick={this.switchPage}>
              Dozentenzugang
            </button>
            <br />
          </div>
        )
      case 2:
        return (
        <h1>Hallo Welt 2</h1>
        )
      case 9:
        return (<h1>Hallo Welt 9</h1>);
      default:
        return <h1>default</h1>;
    }

    // Used to switch the page
    //function switchPage(e) {
    //    console.log(e.target.value)
    //}
  }
}

export default Home;
