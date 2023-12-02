import React from 'react';

const VideoCard = ({ info }) => {
    console.log(info);
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;

    // Format ViewCount
    const formatViewCount = (viewCount) => {
        if (viewCount >= 1000000) {
            return `${(viewCount / 1000000).toFixed(1)}M`;
        } else {
            return `${(viewCount / 1000).toFixed()}K`;
        }
    };

    return (
        <div className="video-card p-2 m-2 w-72 shadow-lg rounded-lg overflow-hidden">
            <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
            <ul className="mt-2">
                <li className="font-bold text-lg">{title}</li>
                <li className="text-gray-600">{channelTitle}</li>
                <li className="text-gray-600">{formatViewCount(statistics.viewCount)} views * </li>
            </ul>
        </div>
    );
};

export default VideoCard;
