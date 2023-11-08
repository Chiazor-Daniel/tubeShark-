import React from "react";
import VideoCard from "./videocard";
import ChannelCard from "./channelcard";

const Videos = ({ videos, sole }) => {
  console.log(videos);

  // Check if videos is null or undefined, and return an empty array if so
  const filteredVideos = videos ? videos : [];

  // Function to check if a string contains non-English characters
  function containsNonEnglish(text) {
    // Regular expression to match non-English characters
    const nonEnglishPattern = /[^A-Za-z0-9\s,.;!?'"():\[\]{}<>$€£¥₹%&@#^*|\/+=\\_\-`~]/

    return nonEnglishPattern.test(text);
  }

  // Filter out videos with non-English titles or descriptions
  const filteredAndValidVideos = filteredVideos.filter(item => {
    return !containsNonEnglish(item.snippet.title) && !containsNonEnglish(item.snippet.description);
  });

  return (
    <div className={`grid ${!sole ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4" : "grid-cols-2"} gap-4`}>
        {filteredAndValidVideos.map((item, idx) => (
          <div key={idx} style={{ display: "contents" }} className="">
            {(item.id.videoId && item.snippet?.thumbnails.high.url) && <VideoCard video={item} />}
          </div>
        ))}
    </div>
  );
};

export default Videos;
