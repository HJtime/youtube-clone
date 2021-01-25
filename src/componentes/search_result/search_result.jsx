import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import VideoList from '../video_list/video_list';
import styles from './search_result.module.css'

const SearchResult = () => {
    const historyList=useLocation().state.videos;
    const history=useHistory();

    const onVideoClick=(video)=>{
        history.push({
            pathname:'/video_detail',
            state: {video:video, videos:historyList}
        });
    }

    return(
        <div className={styles.maker}>
            <VideoList
            onVideoClick={onVideoClick}
            videos={historyList}
            display={'grid'}/>      
        </div>
    );
};

export default SearchResult;