import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import {
  MediaPlayer,
  MediaProvider,
  Poster,
  useMediaState,
} from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
import { useEffect, useRef, useState } from "react";

function VideoStream() {
  let player = useRef(null);

  const currentTime = useMediaState("currentTime", player);

  const [currentPlayerTime, setCurrentPlayerTime] = useState(currentTime);

  const ended = useMediaState("ended", player);

  const poster = document.querySelector(".vds-poster");

  useEffect(() => {
    console.log(ended);
    if (ended) {
      setCurrentPlayerTime(0);
      if (poster) {
        poster.setAttribute("data-visible", true);
      }
    } else {
      setCurrentPlayerTime();
      if (poster) {
        poster.removeAttribute("data-visible");
      }
    }
  }, [ended]);

  return (
    <MediaPlayer
      title="Mi video"
      src="youtube/dxytyRy-O1k"
      currentTime={currentPlayerTime}
      paused={!ended}
      playsinline
      // streamType="live"
      // onContextMenu={(e) => e.preventDefault()}
      aspectRatio="16/9"
      ref={player}
    >
      <MediaProvider>
        <Poster
          className="vds-poster"
          src="https://media-files.vidstack.io/sprite-fight/poster.webp"
          alt="Poster image"
        />
      </MediaProvider>
      <DefaultVideoLayout
        icons={defaultLayoutIcons}
        smallLayoutWhen="(width < 576) or (height < 380)"
      />
    </MediaPlayer>
  );
}

export default VideoStream;
