import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import VideoList from '../video_list/video_list';
import styles from './mostpopular.module.css'

const MostPopular = ({youtube}) => {
    const [videos, setVideos] = useState([]);
    const history=useHistory();

    const onVideoClick=(video)=>{
        history.push({
            pathname:'/video_detail',
            state: {video:video, videos:videos}
        });
    }

    useEffect(()=>{
        youtube.mostPopular()
        .then(videos=>setVideos(videos))
    }, [youtube]);
    
    return(
        <div className={styles.maker}>
            <VideoList
            onVideoClick={onVideoClick}
            videos={videos}/>
        </div>
    );
};

export default MostPopular;