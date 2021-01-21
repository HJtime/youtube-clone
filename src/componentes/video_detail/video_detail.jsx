import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import VideoList from '../video_list/video_list';

const VideoDetail = () => {
    const [videos, setVideos] = useState(useLocation().state.video);
    // const historyState=useLocation().state.video;
    const historyList=useLocation().state.videos;

    const onVideoClick=(video)=>{
        setVideos(video);
    }

    return(
        <section>
            <div>
                <iframe
                type="text/html"
                title="youtube video player"
                width="100%"
                height="500px"
                src={`https://www.youtube.com/embed/${videos.id}`}
                frameBorder="0"
                allowFullScreen></iframe>
                <h2>{videos.snippet.title}</h2>
                <h3>{videos.snippet.channelTitle}</h3>
                <pre>{videos.snippet.description}</pre>
            </div>
            <VideoList onVideoClick={onVideoClick} videos={historyList}/>
        </section>
    );
};

export default VideoDetail;