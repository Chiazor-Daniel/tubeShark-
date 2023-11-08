import React, { useState, useEffect } from 'react';
import { icicleFetch } from '../utils/fetchAPI';
import { Link, useParams } from 'react-router-dom';
import Videos from './videos';
import { MutatingDots } from 'react-loader-spinner';
import { Button } from '@mui/material';

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize loading state to true

  useEffect(() => {
    // Simulate a 2-second loading delay
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false before fetching
      // Fetch data here
      icicleFetch(`search?part=snippet&q=${searchTerm}`)
        .then((data) => {
          setVideos(data.items);
        });
    }, 2000); // 2 seconds

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [searchTerm]);

  return (
    <div className="flex-1 h-full flex gap-6 relative">
      <div className="flex-1 h-full pt-14 px-10 transition duration-200 overflow-auto grid gap-2">
        <div className='justify-between flex '>
          <h1 className="text-2xl font-bold text-white/60">
            Search Results for {searchTerm}
          </h1>
          <Link to="/" className='bg-blue-500 h-fit p-2 text-gray-200 rounded-full px-4 cursor-pointer'>
            Go Back Home
          </Link>
        </div>
        {loading ? ( // Display loading spinner if loading is true
          <div className="w-full h-full flex items-center justify-center absolute inset-0">
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
          <Videos videos={videos} />
        )}
      </div>
    </div>
  );
};

export default SearchFeed;
