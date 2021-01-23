import React from 'react';
import styles from './video_item.module.css'

const VideoItem = ({onVideoClick, video, video:{snippet}, display})=>{
    const displayType=display==='list'?styles.list:styles.grid;
    console.log(displayType)

    return(
        <li className={`${styles.container} ${displayType}`} onClick={()=>onVideoClick(video)}>
            <div className={styles.video}>
                <img className={styles.thumbnails} src={snippet.thumbnails.medium.url} alt="thumbnail"></img>
                <div className={styles.metadata}>
                    <p className={styles.title}>{snippet.title}</p>
                    <p className={styles.channel}>{snippet.channelTitle}</p>
                </div>
            </div>
        </li>
    );
};

export default VideoItem;
