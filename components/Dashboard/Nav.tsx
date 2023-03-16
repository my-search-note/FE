import React from "react";
import Link from "next/link";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import TextSnippetRoundedIcon from "@mui/icons-material/TextSnippetRounded";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import LogoutIcon from "@mui/icons-material/Logout";
import Cookies from "js-cookie";

type Props = {};

const Nav = (props: Props) => {
  //주소 가져와서 ~면 색깔 바꾸기.

  const handleLogout = () => {
    Cookies.remove("token");
  };

  const handleGoSearchMain = () => {
    const setSearchQuery = useSetAtom(searchPageSearchQueryAtom);
    setSearchQuery("");
  };

  const q = useAtomValue(searchPageSearchQueryAtom);
  console.log(q);

  return (
    <nav className="bg-white w-[4%] h-full rounded-tr-xl rounded-br-xl py-8 flex flex-col items-center justify-between">
      <div className="flex flex-col gap-y-6">
        <Link href="/search" className="bg-[#fece2f]">
          <HomeRoundedIcon className="hover:text-[#fece2f]" />
        </Link>
        <Link href="/note">
          <TextSnippetRoundedIcon />
        </Link>
        <Link href="/bookmark">
          <BookmarkIcon />
        </Link>
        <Link href="/mypage">
          <AccountCircleRoundedIcon />
        </Link>
      </div>
      <div>
        <Link href="/" onClick={handleLogout}>
          <LogoutIcon />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
