import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./search";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Badge from "@mui/material/Badge";
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import shark from "../assets/shark.gif"
const Navbar = ({expand, setExpand}) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      className="bg-slate-700 px-2 h-14 glass flex p-1 fixed w-full top-0 items-center justify-between z-20"
    >
      <div className="flex items-center px-2 gap-2">
        <button className="hover:bg-slate-500 rounded h-full w-fit text-gray-200 cursor-pointer"  onClick={()=>setExpand(true)}>
          <img src={shark} alt="shark" className="h-10 w-10"/>
        </button>
        <Link to="/" className="text-white flex items-center">
          <h1 class="text-4xl p-4 text-center font-bold from-slate-200 via-blue-600 to-blue-100 bg-gradient-to-r bg-clip-text text-transparent agbalumo">
            SharkTube
          </h1>
        </Link>
      </div>
      <SearchBar />
      <div className="w-1/2 flex justify-end py-1 items-center gap-4 px-10">
        <Badge badgeContent="" size="small" color="primary" variant="dot">
          <NotificationsIcon className="text-gray-200" />
        </Badge>
      <Avatar  sx={{ width: 26, height: 26 }} className="border" alt="Travis Howard" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2F5kPBvWh3F_7aoDFz4emKhqc3Nbg%3D%2F0x0%3A1920x1080%2F2120x1413%2Ffilters%3Afocal(725x485%3A1031x791)%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_image%2Fimage%2F53153749%2Flegobatmancover.0.jpg&f=1&nofb=1&ipt=e495b9411c7999b043681bb2ddfb7515193c10dcd6b55126978972caf4782d87&ipo=images" />
      </div>
    </Stack>
  );
};

export default Navbar;
