import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css'

const VideoList = ({onVideoClick, videos, display}) => {
    const displayType=display==='list'?styles.list:styles.grid;

    return(
    <ul className={`${styles.videos} ${displayType}`}>
        {videos.map(video => (
        <VideoItem onVideoClick={onVideoClick} display={display} key={video.id} video={video} />
    ))}
    </ul>
    );
};

export default VideoList;
