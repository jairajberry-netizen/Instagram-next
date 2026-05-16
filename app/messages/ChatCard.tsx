import { Camera } from "lucide-react";
import Image from "next/image";
interface ChatCardProps {
  MessageImage: string;
  UserName: string;
  ReceivedMessage: string;
  timeStamp: string;
}
const ChatCard = ({
  MessageImage,
  UserName,
  ReceivedMessage,
  timeStamp,
}: ChatCardProps) => {
  return (
    <div className="mt-4 px-4">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-black bg-zinc-900">
            <Image
              src={MessageImage}
              alt="user image"
              fill
              sizes="64px"
              className="rounded-full object-cover"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-white text-lg font-medium">{UserName}</span>

            <div className="flex flex-col text-sm text-gray-400">
              <span>{ReceivedMessage}</span>
              <span>{timeStamp}</span>
            </div>
          </div>
        </div>

        <Camera color="white" size={24} />
      </div>
    </div>
  );
};

export default ChatCard;
