import { House, Compass, Plus, Send, SquarePlay } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
interface BottomNavProps {
  userImage: string;
}
const BottomNav = ({ userImage }: BottomNavProps) => {
  return (
    <div className="fixed bottom-0 w-full bg-black h-14 border-t border-gray-700 ">
      {/*left buttons*/}
      <div className="flex justify-around h-full items-center ">
        <Link href={"/"}>
          <House color="white" size={30} strokeWidth={1.5} />
        </Link>
        <Compass color="white" size={30} strokeWidth={1.5} />
        <SquarePlay color="white" size={30} strokeWidth={1.5} />
        <Plus color="white" size={30} strokeWidth={1.5} />
        <Link href={"/messages"}>
          <Send color="white" size={26} strokeWidth={1.5} />
        </Link>
        {/*gradient outer div */}
        <div className="bg-white h-9 w-9 rounded-full flex items-center justify-center bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 ">
          {/*left image */}
          <div className="rounded-full w-8 h-8   shrink-0 bg-zinc-900 border-2 border-black relative">
            <Link href={"/profile"}>
              <Image
                src={userImage}
                alt={""}
                className="rounded-full object-cover"
                loading="eager"
                fill
              />
            </Link>
          </div>
        </div>
      </div>
      {/*right buttons*/}
    </div>
  );
};

export default BottomNav;
