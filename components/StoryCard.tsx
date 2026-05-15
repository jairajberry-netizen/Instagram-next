import Image from "next/image";
import { Plus } from "lucide-react";
interface StoryCardProps {
  image: string;
  name: string;
  myStory: boolean;
}
const StoryCard = ({ image, name, myStory }: StoryCardProps) => {
  return (
    <div className="flex flex-col items-center ">
      <div className="bg-white h-18 w-18 rounded-full flex items-center justify-center bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 ">
        <div className="rounded-full w-16 h-16   shrink-0 bg-zinc-900 relative">
          <Image
            src={image}
            alt={name}
            width={64}
            height={64}
            className="rounded-full"
          />

          {myStory && (
            <div className="absolute bottom-0 right-0 bg-white rounded-full  p-1 border-3 border-black">
              <span>
                <Plus className="text-black w-4 h-4  " strokeWidth={4} />
              </span>
            </div>
          )}
        </div>
      </div>
      <span className="text-white text-xs   ">{name}</span>
    </div>
  );
};

export default StoryCard;
