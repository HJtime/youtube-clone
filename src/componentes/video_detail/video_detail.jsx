import React, {  useState } from 'react';
import { useLocation } from 'react-router-dom';
import SearchHeader from '../search_header/serch_header';
import VideoList from '../video_list/video_list';
import styles from './video_detail.module.css'

const VideoDetail = () => {
    const [videos, setVideos] = useState(useLocation().state.video);
    const historyList=useLocation().state.videos;

    const onVideoClick=(video)=>{
        setVideos(video);
    }

    return(
        <div>
        <SearchHeader/>
        <section className={styles.section}>
            <div className={styles.iframe}>
                <iframe
                type="text/html"
                title="youtube video player"
                width="100%"
                height="500px"
                src={`https://www.youtube.com/embed/${videos.id}`}
                frameBorder="0"
                allowFullScreen></iframe>
                <h2>{videos.snippet.title}</h2>
                <h3 className={styles.channeltitle}>{videos.snippet.channelTitle}</h3>
                <pre className={styles.desc}>{videos.snippet.description}</pre>
            </div>
            {videos&&<VideoList
            onVideoClick={onVideoClick}
            videos={historyList}
            className={styles.list}
            display={'list'}/>}
        </section>
        </div>
    );
};

export default VideoDetail;