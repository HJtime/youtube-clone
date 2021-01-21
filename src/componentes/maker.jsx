import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import VideoList from './video_list/video_list';

const Maker = (props) => {
    const [videos, setVideos] = useState([]);

    const history=useHistory();
    const onVideoClick=(video)=>{
        history.push({
            pathname:'/video_detail',
            state: {video:video, videos:videos}
        });
        console.log('onClick',video);
    }

    useEffect(() => {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
    };

    fetch(
        'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAtrSZkopq--QXlpEYQ5SrM9Kg5TZlZMl0',
        requestOptions
    )
        .then(response => response.json())
        .then(result => setVideos(result.items))
        .catch(error => console.log('error', error));
    }, []);

    return(
    <VideoList onVideoClick={onVideoClick} videos={videos}/>
    );
};

export default Maker;