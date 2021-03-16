import React, { Component } from "react";
import ContactItem from "./ContactItem";
import "./Contacts.css";
import data from "./ContactsData";
import "./Contacts.css";

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      contactData: data.slice(),

      popularity: "",
    };
  }

  handleNameInput = (event) => {
    this.setState({ name: event.target.value });
  };

  handlePopularityInput = (event) => {
    this.setState({ popularity: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      name: this.state.name,
      popularity: this.state.popularity,
    };

    let newContacts = this.state.contactData.slice();
    newContacts.unshift(newContact);

    this.setState({
      contactData: newContacts,
    });
  };

  removeContact = (index, e) => {
    const newList = this.state.contactData.slice();
    newList.splice(index, 1);
    return this.setState({ contactData: newList });
  };
  //================== Compare Function ===========//
  compare = (a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  };

  compareRate = (a, b) => {
    return a.popularity - b.popularity;
  };

  handleSortName = () => {
    let order = false;
    const sortedName = this.state.contactData.sort(this.compare);
    if (order) {
      order = !order;
      this.setState({ contactData: sortedName });
    } else {
      this.setState({
        contactData: sortedName.reverse(),
      });
      order = true;
    }
  };

  handleSortRate = () => {
    return this.setState({
      contactData: this.state.contactData.sort(this.compare).reverse(),
    });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="First Name"
          onChange={this.handleNameInput}
        />

        <input
          type="text"
          placeholder="Popularity Rate"
          onChange={this.handlePopularityInput}
        />
        <input
          type="submit"
          value="Add Random Contact"
          onClick={this.handleSubmit}
        />
        <input type="submit" onClick={this.handleSortName} />
        <button onClick={this.handleSortRate}>Sort by popularity</button>

        <div className="contacts-container">
          {this.state.contactData.map((elt, index) => (
            <ContactItem
              name={elt.name}
              imgUrl={elt.pictureUrl}
              popularity={elt.popularity}
              delete={() => {
                return this.removeContact();
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Contacts;
