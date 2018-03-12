import React, { Component } from "react"
import ReactDOM from "react-dom"
//import lodah
import _ from "lodash"

import YTSearch from 'youtube-api-search'

import Search_bar from "./components/Search_bar"
import Video_list from "./components/Video_list"
import Video_detail from "./components/Video_detail"

//variable to hold the API Key
const API_KEY = 'AIzaSyBYBCVLbnMFTz89b2k8J2s_WWJPF__7vDQ';


// Create a new component
// This component should create some html
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('React JS');
  }

  videoSearch(searchTerm) {
    //youtube search
    YTSearch({key: API_KEY, term:searchTerm, max: '1-50'}, (videos) => {
      this.setState({
        videos:videos,
        selectedVideo: videos[0]
       });
    });

  }

  render(){
    const videoSearch = _.debounce( (term) => {this.videoSearch(term)},400)

      return (<div>
            <Search_bar onSearchTermChange={videoSearch} />
            <Video_detail video={this.state.selectedVideo}/>
            <Video_list
              onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
              videos={this.state.videos}
              />
          </div>
        )
  }
}

// Take this  component's generated HTML and render it on the page (In the DOM)
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
