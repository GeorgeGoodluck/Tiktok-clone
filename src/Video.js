import React, { useRef, useState } from 'react';
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
import "./Video.css";

function Video() {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false)
        } else {
            videoRef.current.play();
            setPlaying(true)
        }
    };
    
    return (
        <div className="video">
        <video 
         className="video__player"
         loop
         onClick={onVideoPress}
         ref={videoRef}
         src="https://v16-webapp.tiktok.com/270e3f941104bd7da1e1ae1e41ba3af6/623136a9/video/tos/useast2a/tos-useast2a-ve-0068c004/a541554f0d064fa29aa3779e48725f55/?a=1988&amp;br=1770&amp;bt=885&amp;cd=0%7C0%7C1%7C0&amp;ch=0&amp;cr=0&amp;cs=0&amp;cv=1&amp;dr=0&amp;ds=3&amp;er=&amp;ft=XOQ9-3tqnz7Th2dBiDXq&amp;l=202203151859550102230751591065A185&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;net=0&amp;pl=0&amp;qs=0&amp;rc=M3lqd2g6ZjVuOzMzNzczM0ApOmQ5Z2c0aTs8N2Q7NjM0ZWdrcl9vcjRvNV9gLS1kMTZzczYvNDY2LTUyYzMyNDQ2Yl46Yw%3D%3D&amp;vl=&amp;vr=" playsinline="" autoplay="" class="tiktok-1sm3sg-VideoBasic e1yey0rl4">
         </video>
            <VideoFooter
            channel="georgegoodluck"
            description="Check out this trailer"
            song="Usher - Yeah"
            />
            <VideoSidebar /> 
        </div>
    );
}

export default Video;
