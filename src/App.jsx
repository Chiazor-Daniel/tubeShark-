import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Feed from "./components/Feed";
import Video from "./components/Video";
import Channel from "./components/Channel";
import Navbar from "./components/Navbar";
import SearchFeed from "./components/SearchFeed";

function App() {
  const [expand, setExpand] = useState(false);

  return (
    <BrowserRouter>
      <Box
        className="h-screen bg-gradient-custom md:py-4 flex flex-col overflow-auto"
        style={{
          backgroundImage: "radial-gradient(circle, rgb(15 23 42),rgb(2 6 23)",
        }}
      >
        <Navbar expand={expand} setExpand={setExpand} />
        <Routes>
          <Route path="/" exact element={<Feed expand={expand} />} />
          <Route path="/video/:id" element={<Video />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
