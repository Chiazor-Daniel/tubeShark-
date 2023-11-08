import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { icicleFetch } from "../utils/fetchAPI";
import { MutatingDots } from "react-loader-spinner";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Videos from './videos';

const Video = () => {
  const [video, setVideo] = useState(null);
  const [videos, setVideos] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const sole = true

  useEffect(() => {
    // Simulate a 2-second loading delay
    const timer = setTimeout(() => {
      Promise.all([
        icicleFetch(`videos?part=snippet,statistics&id=${id}`),
        icicleFetch(`search?part=snippet&relatedToVideoId=${id}&type=video`),
      ])
        .then((data) => {
          setVideo(data[0].items[0]);
          setVideos(data[1].items);
          setLoading(false); // Mark loading as complete
        })
        .catch((error) => {
          console.error("Error fetching video data:", error);
          setLoading(false); // Mark loading as complete even on error
        });
    }, 500); // 0.5 seconds

    return () => clearTimeout(timer); // Clear the timer when the component unmounts
  }, [id]);

  return (
    <div className="flex-1 h-full w-full pt-14 px-6 grid md:grid-cols-5 relative gap-4 items-center">
      {loading ? (
        <div className="w-full h-full flex items-center justify-center absolute bg-transparent">
          <MutatingDots
            height="100"
            width="100"
            color="rgb(203 213 225)"
            secondaryColor="rgb(203 213 225)"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div className="rounded-xl w-full md:col-span-3 h-auto md:h-[600px] relative overflow-auto md:overflow-hidden">
          <div className="w-full  md:w-fit h-fit m-auto z-20 absolute inset-0">
            {/* <PlayCircleIcon sx={{ fontSize: "2rem" }} /> */}
          </div>
          {video ? ( // Check if video exists
            <>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                className="react-player"
                controls
                playing={true} // Autoplay
                style={{ borderRadius: "10px" }} // Apply borderRadius here
              />
              <p>{video.snippet.title}</p>
            </>
          ) : (
            <p>Loading video...</p>
          )}
        </div>
      )}
      <div className="col-span-2 h-full overflow-auto">
        <Videos videos={videos} sole={sole}/>
      </div>
    </div>
  );
};

export default Video;
