import React from "react"

const Video_detail = ( { video }) =>{

  if(!video){
    return (<div>'0' Videos found</div>)
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return(
    <div>
      <div>
         <iframe src={url}></iframe>
      </div>

      <div>
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  )
}

export default Video_detail;
