import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';

function VideoSidebar() {
  const [liked, setLiked] = useState(false);
  
    return (
        <div className="videoSidebar">
        <div className="videoSidebar__button">
        <FavoriteIcon />
        <p>10.9m</p>
        </div>
        <div className="videoSidebar__button">
        <MessageIcon />
        <p>2.5k</p>
        </div>
        <div className="videoSidebar__button">
        <ShareIcon />
        <p>400k</p>
        </div>
      </div>
    )
}

export default VideoSidebar;
