import "./App.css";
import React, { Component } from "react";
import movies from "./components/MovieDataBase";
import MovieData from "./components/MovieData";
import data from "./WeatherData";
import Weather from "./components/Weather";
import State from "./State";

class App extends React.Component {
  //========= STATE ================

  state = { movieBase: movies.slice() };

  //============================

  //=========  SORT HANDLERS ==========

  handleSortAz = () => {
    if (
      {
        movieBase: !this.state.movieBase.sort(this.compare),
      }
    ) {
      return this.setState({
        movieBase: this.state.movieBase,
      });
    } else {
      return this.setState({
        movieBase: this.state.movieBase.sort(this.compare),
      });
    }
  };

  handleSortZa = () => {
    console.log("clicked");
    return this.setState({
      movieBase: this.state.movieBase.sort(this.compare).reverse(),
    });
  };
  handleSortDateAsc = () => {
    return this.setState({
      movieBase: this.state.movieBase.sort(this.compareDate),
    });
  };

  handleSortDateDsc = () => {
    return this.setState({
      movieBase: this.state.movieBase.sort(this.compareDate).reverse(),
    });
  };

  handleSortRate = () => {
    return this.setState({
      movieBase: this.state.movieBase.sort((a, b) => {
        return b.rate - a.rate;
      }),
    });
  };

  compareDate = (a, b) => {
    return a.year - b.year;
  };
  //=======================================
  //=========== COMPARE FUNCTION ============

  compare = (a, b) => {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();

    let comparison = 0;
    if (titleA > titleB) {
      comparison = 1;
    } else if (titleA < titleB) {
      comparison = -1;
    }
    return comparison;
  };

  //========== RENDER ===========
  render() {
    return (
      <div className="App">
        <div className="state1Wrapper">
          <State />
        </div>
        //========== WEATHER =====================
        <div className="weatherWrapper">
          {data.map((elt) => (
            <Weather
              day={elt.day}
              imgUrl={elt.img}
              tempDay={elt.tempDay}
              tempNight={elt.tempNight}
            />
          ))}
        </div>
        //==============================================
        //======================= MOVIES =======================
        <div className="movieSort">
          <button className="test" onClick={this.handleSortDateAsc}>
            Sort by Date Ascending
          </button>
          <button onClick={this.handleSortDateDsc}>
            Sort by Date Descending
          </button>
          <button onClick={this.handleSortRate}>Best Rate</button>
          <button onClick={this.handleSortAz}>A-Z</button>
          <button onClick={this.handleSortZa}>Z-A</button>
          <div className="movieWrapper">
            {this.state.movieBase.map((elt) => (
              <MovieData
                title={elt.title}
                year={elt.year}
                director={elt.director}
                duration={elt.duration}
                genre={elt.genre.map((e) => (
                  <p>{e}</p>
                ))}
                rate={elt.rate}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
