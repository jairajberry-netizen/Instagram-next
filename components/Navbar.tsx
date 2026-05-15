"use client";
import { Heart, Plus } from "lucide-react";
import { Rouge_Script } from "next/font/google";
const rouge = Rouge_Script({
  subsets: ["latin"],
  weight: ["400"],
});
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-4 bg-black w-full ">
      <div className="ml-2 ">
        <button>
          <Plus color="white" size={30} />
        </button>
      </div>
      <div className={`${rouge.className} text-4xl text-white`}>Instagram</div>
      <div className="mr-2  ">
        <button>
          <Heart color="white" size={30} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
