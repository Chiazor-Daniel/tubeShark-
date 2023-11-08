import React, { useState } from 'react';
import { categories } from '../utils/constants';

const SideBar = ({ selectedCategory, setSelectedCategory, expand }) => {
  const [expandedIdx, setExpandedIdx] = useState(null);
  let expandAll = expand;
  const toggleExpand = (idx) => {
    if (expandedIdx === idx) {
      setExpandedIdx(null);
    } else {
      setExpandedIdx(idx);
    }
  };

  return (
    <div className={`h-fit md:h-full md:w-32 overflow-auto md:py-0 py-2 flex flex-col px-4 md:fixed gap-4 z-20`}>
      <div className='flex md:flex-col gap-4 overflow-auto'>
        {categories.map((cat, idx) => (
          <div
            onMouseEnter={() => toggleExpand(idx)}
            onMouseLeave={() => toggleExpand(null)}
            key={idx}
            onClick={() => cat.name == "Anime"? setSelectedCategory("flow edit") : setSelectedCategory(cat.name)}
            className={`cursor-pointer transition duration-200 ${expandAll ? "w-full gap-2" : "w-fit"} text-gray-300 flex p-2 bg-slate-700 items-center justify-center rounded`}
          >
            {cat.icon}
            <p className={`${(expandedIdx === idx || expandAll) ? "md:ml-2 md:w-auto md:opacity-1" : "md:w-0 md:opacity-0"} transition-w duration-200 hover:w-auto`}>
              {cat.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SideBar;