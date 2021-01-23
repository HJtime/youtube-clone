import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SearchHeader from '../search_header/serch_header';
import VideoList from '../video_list/video_list';
import styles from './maker.module.css'

const Maker = ({youtube}) => {
    const [videos, setVideos] = useState([]);
    const history=useHistory();

    const onVideoClick=(video)=>{
        history.push({
            pathname:'/video_detail',
            state: {video:video, videos:videos}
        });
    }

    const search=useCallback(query=>{  
        youtube
        .search(query)
        .then(videos=>{setVideos(videos);})
    },[youtube]);
    
        useEffect(()=>{
        youtube.mostPopular()
        .then(videos=>setVideos(videos))
    }, [youtube]);
    
    return(
        <div className={styles.maker}>
            <SearchHeader onSearch={search}/>
            <div>
                <VideoList onVideoClick={onVideoClick} videos={videos}/>
            </div>
        </div>
    );
};

export default Maker;