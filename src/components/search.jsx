import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="h-full py-1 bg-transparent w-1/3 relative flex items-center">
      <div onClick={handleSearch} className="p-2 bg-slate-500 absolute right-0 rounded-full">
        <TravelExploreIcon className="text-xl text-gray-200" />
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        className="focus:outline-none h-full rounded-full w-full px-3 border bg-transparent border-slate-500 text-white"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
