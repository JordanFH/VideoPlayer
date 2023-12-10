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

function Example() {
  let player = useRef(null);

  const ended = useMediaState("ended", player);

  useEffect(() => {
    console.log(ended);
    if (ended) {
      nextVideo();
    }
  }, [ended]);

  const sources = [
    "youtube/dxytyRy-O1k",
    "youtube/BuQ82GNIpnA",
    "youtube/2AilA-M6N5U",
  ];

  const [src, setSrc] = useState(0);

  function prevVideo() {
    setSrc((n) => Math.max(0, n - 1));
  }

  function nextVideo() {
    setSrc((n) => Math.min(sources.length - 1, n + 1));
  }

  return (
    <>
      <MediaPlayer
        ref={player}
        src={sources[src]}
        playsinline
        aspectRatio="16/9"
        // title="Mi video"
        // streamType="live"
        // onContextMenu={(e) => e.preventDefault()}
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
      <div>
        <button onClick={prevVideo}>Previous Video</button>
        <button onClick={nextVideo}>Next Video</button>
      </div>
    </>
  );
}

export default Example;
