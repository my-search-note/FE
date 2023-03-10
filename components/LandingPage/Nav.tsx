import Link from "next/link";
import React, { useState } from "react";
import AuthModal from "./AuthModal/AuthModal";

type Props = {};

const Nav = (props: Props) => {
  const [isAuthClicked, setIsAuthClicked] = useState({
    isModalOpen: false,
    isSignin: false,
    isSignup: false,
  });

  const { isModalOpen, isSignin, isSignup } = isAuthClicked;

  const handleAuthModal = (authType?: string) => {
    setIsAuthClicked((prevState) => ({
      isModalOpen: !prevState.isModalOpen,
      isSignin: authType === "Signin" ? !prevState.isSignin : false,
      isSignup: authType === "Signup" ? !prevState.isSignup : false,
    }));
  };

  return (
    <nav className="h-14 px-12 md:px-28 z-50 flex items-center  bg-slate-100 sticky top-0 shadow-sm">
      {isModalOpen ? (
        <AuthModal
          handleAuthModal={handleAuthModal}
          isSignin={isSignin}
          isSignup={isSignup}
        />
      ) : null}
      <Link href="/" className="absolute left-0 ml-12">
        <span className="text-2xl">Logo</span>
      </Link>
      <div className="absolute right-0 mr-12">
        <button
          className="p-1 mr-4 md:mr-6"
          onClick={() => {
            handleAuthModal("Signin");
          }}
        >
          Sign in
        </button>
        <button
          className="bg-black text-white rounded-full py-2 px-4 hover:bg-gray-700 focus:outline-none focus:shadow-outline"
          onClick={() => {
            handleAuthModal("Signup");
          }}
        >
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Nav;
