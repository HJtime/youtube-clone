import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SearchHeader from './search_header/serch_header';
import VideoList from './video_list/video_list';

const Maker = ({youtube}) => {
    const [videos, setVideos] = useState([]);

    const history=useHistory();

    const onVideoClick=(video)=>{
        history.push({
            pathname:'/video_detail',
            state: {video:video, videos:videos}
        });
        console.log('onClick',video);
    }
    
    const search=query=>{    
        youtube.search(query)
        .then(videos=>setVideos(videos))
    }
    
        useEffect(()=>{
        youtube.mostPopular()
        .then(videos=>setVideos(videos))
    }, [youtube]);
    
    
    return(
        <div>
            <SearchHeader onSearch={search}/>
            <VideoList onVideoClick={onVideoClick} videos={videos}/>
        </div>
    );
};

export default Maker;