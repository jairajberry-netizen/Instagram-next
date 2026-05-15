"use client";
import Image from "next/image";
import { EllipsisVertical, BadgeCheck, Heart } from "lucide-react";
import { useState } from "react";
interface PostProps {
  userName: string;
  userImage: string;
  postImage: string;
  likes: string;
  comments: string;
  reposts: string;
  caption: string;
  time: string;
}

const Post = ({
  userName,
  userImage,
  postImage,
  likes,
  comments,
  reposts,
  caption,
  time,
}: PostProps) => {
  const [liked, setLiked] = useState(false);
  return (
    <div className=" w-full">
      {/*header */}
      <div className="flex justify-between py-4 bg-black items-center w-full px-2">
        {/* left section image div+ username */}
        <div className="flex items-center gap-2 ">
          {/*gradient outer div */}
          <div className="bg-white h-11 w-11 rounded-full flex items-center justify-center bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 ">
            {/*left image */}
            <div className="rounded-full w-10 h-10   shrink-0 bg-zinc-900 border-2 border-black relative">
              <Image
                src={userImage}
                alt={""}
                className="rounded-full object-cover"
                loading="eager"
                fill
              />
            </div>
          </div>
          {/*user name */}
          <div className="   text-white   font-semi-bold ">{userName}</div>
          <span className="">
            <BadgeCheck color="blue" size={19} />
          </span>
        </div>
        {/*right three dots */}
        <div className=" ">
          <EllipsisVertical color="white" size={24} />
        </div>
      </div>
      {/*outer div of feed  */}
      <div className="h-96 relative w-full ">
        {/*innerdiv of feed  image */}

        <Image
          src={"/emmawatson.jpg"}
          alt="Post Image"
          fill
          className="object-cover"
        />
      </div>
      {/*buttons for image */}
      <div className=" flex justify-between ">
        {/*buttonsssss. left */}
        <div className=" flex gap-4 mt-1">
          <button
            className="py-2 pl-2 flex items-center gap-1 text-lg"
            onClick={() => setLiked(!liked)}
          >
            <Heart
              size={30}
              fill={liked ? "red" : "transparent"}
              color={liked ? "red" : "white"}
              className="cursor-pointer  active:scale-100 transition-all duration-150 ease-in-out"
            />
            <span className="text-white">{likes}</span>
          </button>
          <button className="py-2  text-white flex items-center gap-1 text-lg">
            <svg
              aria-label="Comment"
              fill="currentColor"
              role="img"
              viewBox="0 0 24 24"
              className="w-7 h-7 cursor-pointer"
            >
              <title>Comment</title>

              <path
                d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            {comments}
          </button>
          <button className="py-2 text-white text-lg flex items-center gap-1">
            <svg
              aria-label="Repost"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7 cursor-pointer"
              role="img"
            >
              <title>Repost</title>

              <path d="M19.998 9.497a1 1 0 0 0-1 1v4.228a3.274 3.274 0 0 1-3.27 3.27h-5.313l1.791-1.787a1 1 0 0 0-1.412-1.416L7.29 18.287a1.004 1.004 0 0 0-.294.707v.001c0 .023.012.042.013.065a.923.923 0 0 0 .281.643l3.502 3.504a1 1 0 0 0 1.414-1.414l-1.797-1.798h5.318a5.276 5.276 0 0 0 5.27-5.27v-4.228a1 1 0 0 0-1-1Zm-6.41-3.496-1.795 1.795a1 1 0 1 0 1.414 1.414l3.5-3.5a1.003 1.003 0 0 0 0-1.417l-3.5-3.5a1 1 0 0 0-1.414 1.414l1.794 1.794H8.27A5.277 5.277 0 0 0 3 9.271V13.5a1 1 0 0 0 2 0V9.271a3.275 3.275 0 0 1 3.271-3.27Z" />
            </svg>
            {reposts}
          </button>
        </div>
        <div className="text-white mt-1">
          <button className="py-2 pr-2 text-white">
            <svg
              aria-label="Save"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7 cursor-pointer"
              role="img"
            >
              <title>Save</title>

              <polygon
                fill="none"
                points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="text-white mt-1 px-2">
        <p>{caption}</p>
        <p className="text-gray-400 text-sm">{time}</p>
      </div>
    </div>
  );
};

export default Post;
