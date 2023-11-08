import React, { useState, useEffect } from "react";
import { categories } from "../utils/constants";
import { icicleFetch } from "../utils/fetchAPI";
import SideBar from "./sidebar";
import Videos from "./videos";
import { MutatingDots } from "react-loader-spinner";

const Feed = ({ expand }) => {
  const [selectedCategory, setSelectedCategory] = useState("News");
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    setLoading(true);
    const timer = setTimeout(() => {
      const cachedData = localStorage.getItem(`cachedVideos-${selectedCategory}`);
      if (cachedData) {
        setVideos(JSON.parse(cachedData));
        setLoading(false);
      } else {
        icicleFetch(`search?part=snippet&q=${selectedCategory}`)
          .then((data) => {
            setVideos(data.items);
            localStorage.setItem(`cachedVideos-${selectedCategory}`, JSON.stringify(data.items));
            setLoading(false);
          });
      }
    }, 500); // 2 seconds

    return () => clearTimeout(timer);
  };

  useEffect(() => {
    fetchData();
  }, [selectedCategory]);

  return (
    <div className="flex-1 h-full flex md:flex-row flex-col md:gap-6 pt-14">
      <SideBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        expand={expand}
      />
      <div
      
        className={`flex-1 px-4 md:px-0  h-full relative ${
          expand ? "md:pl-36" : "md:pl-20"
        } md:pr-10 transition duration-200 overflow-auto grid gap-2`}
      >
        <h1 className="text-2xl font-bold text-white/60 p-2">
          <span className="text-3xl text-center font-bold from-slate-500 via-blue-100 uppercase to-blue-100 bg-gradient-to-r bg-clip-text text-transparent">
            {selectedCategory}
          </span>{" "}
        </h1>
        {loading ? (
          <div className="w-full absolute h-full flex-1 flex items-center justify-center">
            <MutatingDots
              height="100"
              width="100"
              color="rgb(203 213 225)"
              secondaryColor="rgb(203 213 225)"
              radius="12.5"
              ariaLabel="mutating-dots-loading"
              visible={true}
            />
          </div>
        ) : (
          <div className="h-full">
            <Videos videos={videos} />
            <div className="bg-transparent w-full">
              <p className="text-center text-gray-200 text-sm text-mono">
                Copyright ChiazorDaniel 2023
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feed;
