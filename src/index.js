import React, { Component } from "react"
import ReactDOM from "react-dom"

import _ from "lodash"

import Search_bar from "./components/Search_bar"

//variable to hold the API Key
const API_KEY = 'AIzaSyC7zQisgvbtB8AZfvGTgLx2N3Ka_QCU2wg';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      videos: null,
      selectVideo: null,
    };

  }

  httpGet(config){
    return new Promise(function(resolve,reject){

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
          resolve(xhttp.responseText);
        }
        if(this.readyState === XMLHttpRequest.DONE && this.status != 200){
          reject("An error has ocurred.")
        }
      };

      xhttp.open(config.method, config.url, config.sync);

      xhttp.send();
    });
  }

  getVideos(term){

    var theUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet'
     + '&type=video'
     + '&q=' + term
     + '&key=' + API_KEY;

    var config = {method:"GET", url:theUrl, sync:false};

    var promise = this.httpGet(config);

    promise.then(function(videos){
      console.log(JSON.parse(videos));
    }, function(error){

    });
  }

  render(){
    const videoSearch = _.debounce( (term) => {this.getVideos(term)},400)

      return (
        <div>
          <Search_bar onSearchTermChange={videoSearch} />
        </div>
        )
  }
}

// Take this  component's generated HTML and render it on the page (In the DOM)
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
