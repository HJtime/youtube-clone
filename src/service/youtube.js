class Youtube{
    constructor(key){
        this.key=key;
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    }

    async mostPopular(){
    const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=27&key=${this.key}`, this.getRequestOptions);
        const result = await response.json();
        return result.items; //받아온 아이템으로 setVideos를 업데이트
    }

    async search(query){
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=27&q=${query}&type=video&key=${this.key}`, this.getRequestOptions);
        const result = await response.json();
        return result.items.map(item => ({ ...item, id: item.id.videoId }));
    }
}

export default Youtube;