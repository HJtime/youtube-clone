import React from 'react';

const VideoItem = ({onVideoClick, video, video:{snippet}})=>{
    return(
        <li onClick={()=>onVideoClick(video)}>
            <img src={snippet.thumbnails.medium.url} alt="thumbnail"></img>
            <p>{snippet.title}</p>
            <p>{snippet.channelTitle}</p>
        </li>
    );
};

export default VideoItem;
