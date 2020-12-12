import React from 'react';
import '../css/VideoItem.css'

const VideoItem = ({ video, onVideoClick }) => {
    const videoUrl = video.snippet.thumbnails.medium.url;
    return (
        <div onClick={() => onVideoClick(video)} className='video-item item'>
            <img className='ui image' alt={video.snippet.title} src={videoUrl} />
            <div className='content'>
                <div className='header'>{video.snippet.title}</div>
            </div>
        </div>
    );
};

export default VideoItem;