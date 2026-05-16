import Image from "next/image";
interface NoteCardProps {
  CardImage: string;
  UserNote: string;
}
const NoteCard = ({ CardImage, UserNote }: NoteCardProps) => {
  return (
    <div className="flex mt-2  ">
      <div className="bg-white h-16 w-16 ml-3 rounded-full flex items-center justify-center bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 ">
        <div className="rounded-full w-14 h-14   shrink-0 bg-zinc-900 relative border-2 border-black">
          <Image
            src={CardImage}
            alt="image"
            className="rounded-full object-cover"
            fill
          />
        </div>
        <span className="text-gray-300 text-xs">{UserNote}</span>
      </div>
    </div>
  );
};

export default NoteCard;
