import React from 'react';
import VideoItem from '../video_item/video_item';

const VideoList = ({onVideoClick,videos}) => {

    return(
    <ul>
        {videos.map(video => (
        <VideoItem onVideoClick={onVideoClick} key={video.id} video={video} />
    ))}
    </ul>
    );
};

export default VideoList;
