import { FaArrowAltCircleRight, FaHome } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { AiFillSetting } from "react-icons/ai";
// import { HiOutlineInboxArrowDown } from "react-icons/hi";
import { RiDraftLine } from "react-icons/ri";
import { BiWallet } from "react-icons/bi";
import { ImProfile } from "react-icons/im";
import { IoIosArrowForward } from "react-icons/io";
import {
  AboutIcon,
  DraftIcon,
  HomeIcon,
  ProfileIcon,
  SettingIcon,
  WalletIcon,
  StoryIcon,
  InboxIcon,
  StakeIcon,
} from "../Util/StoryIcon";

export const SideBarData = [
  {
    path: "/",
    title: "Home",
    icon: <HomeIcon />,
  },
  { title: "My Profile", path: "profile"  },
  // { title: "My Story", path: "story", icon: <StoryIcon /> },
  // { title: "Wallet", path: "wallet", icon: <WalletIcon /> },
  { title: "Stake", path: "stake", icon: <StakeIcon /> },
  // { title: "Draft", path: "draft", icon: <DraftIcon /> },
  { title: "Inbox", path: "inbox", icon: <InboxIcon /> },
  { title: "About story", path: "about", icon: <AboutIcon /> },
  // { title: "Setting", path: "setting", icon: <SettingIcon /> },
];

export const SmBarData = [
  {
    path: "/",
    title: "Home",
    icon: <FaHome />,
    arrow: <IoIosArrowForward />,
  },
  {
    title: "Profile",
    path: "profile",
    arrow: <IoIosArrowForward />
  },
  // { title: "My Story", path: "story", icon: <StoryIcon /> ,arrow: <IoIosArrowForward />,},
  { title: "Wallet", path: "wallet", icon: <WalletIcon /> ,arrow: <IoIosArrowForward />,},
  { title: "Stake", path: "stake", icon: <StakeIcon /> ,arrow: <IoIosArrowForward />,},
  // { title: "Draft", path: "draft", icon: <DraftIcon /> ,arrow: <IoIosArrowForward />,},
  { title: "Inbox", path: "inbox", icon: <InboxIcon />,arrow: <IoIosArrowForward />, },
  { title: "About story", path: "about", icon: <AboutIcon /> ,arrow: <IoIosArrowForward />,},
  // { title: "Setting", path: "setting", icon: <SettingIcon />,arrow: <IoIosArrowForward />, },
  { title: "Log Out", icon: <ImProfile />, arrow: <IoIosArrowForward />,arrow: <IoIosArrowForward />, },
];