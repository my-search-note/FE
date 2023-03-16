import Link from "next/link";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import TextSnippetRoundedIcon from "@mui/icons-material/TextSnippetRounded";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import LogoutIcon from "@mui/icons-material/Logout";
import Cookies from "js-cookie";
import { useAtom, useAtomValue } from "jotai";
import { searchPageSearchQueryAtom } from "@/atoms/searchAtoms";

type Props = {};

const Nav = (props: Props) => {
  //주소 가져와서 ~면 색깔 바꾸기.

  //이거 왜 쿼리 없을 때ㅗㄷ 되는지 보고 고치기
  const handleGoSearchMain = () => {
    const [SearchQuery, setSearchQuery] = useAtom(searchPageSearchQueryAtom);
    setSearchQuery("");
  };

  const handleLogout = () => {
    Cookies.remove("token");
  };

  const q = useAtomValue(searchPageSearchQueryAtom);

  return (
    <nav className="bg-white w-[4%] h-full rounded-tr-xl rounded-br-xl py-8 flex flex-col items-center justify-between">
      <div className="flex flex-col gap-y-6">
        <Link
          href="/search"
          className="bg-[#fece2f]"
          onClick={handleGoSearchMain}
        >
          <HomeRoundedIcon className="hover:text-[#fece2f]" />
        </Link>
        <Link href="/notes">
          <TextSnippetRoundedIcon />
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
