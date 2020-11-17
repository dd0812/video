import './VideoItem.css';
import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {
    return(
        //using an arrow func call the callback func all the way to App component with the user selected video
        <div onClick={() => onVideoSelect(video)} className = "video-item item"> 
            <img 
                className="ui image" 
                alt={video.snippet.title} 
                src={video.snippet.thumbnails.medium.url}
            />
            <div className ="content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    )
};

export default VideoItem;