import React from "react"

const Video_list_item = ( { video, onVideoSelect } ) => {

  const imageUrl = video.snippet.thumbnails.default.url;

  return <li onClick={ () => onVideoSelect(video)}>
              <div>
                  <div>
                      <img src={imageUrl}/>
                  </div>
                  <div>
                      <div>{video.snippet.title}</div>
                  </div>
              </div>
        </li>
}

export default Video_list_item;
