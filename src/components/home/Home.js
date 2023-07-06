import React, { useEffect, useRef } from "react";

function Home(){
    const vidRef = useRef(null)

    useEffect(() => {
        vidRef.current.play()
    }, [])
   
    return (  
        <div className="home">
           <video
            className="video-background"
            ref={vidRef}
            muted
            loop
            autoPlay
            width={2000}
            height={1006}
            src="videos/the_ark_beyond.mp4"
            >   
           </video>
        </div>
    );
}

export default Home