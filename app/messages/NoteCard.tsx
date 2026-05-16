import Image from "next/image";

interface NoteCardProps {
  CardImage: string;
  UserNote: string;
}

const NoteCard = ({ CardImage, UserNote }: NoteCardProps) => {
  return (
    <div className="flex flex-col items-center mt-2 ml-3 w-16 shrink-0">
      <div className="relative h-18 w-18 shrink-0 overflow-hidden rounded-full border-2 border-black bg-zinc-900">
        <Image
          src={CardImage}
          alt="user image"
          fill
          className="rounded-full object-cover"
        />
      </div>
      <span className="mt-1 max-w-[64px] truncate text-xs  text-gray-300">
        {UserNote}
      </span>
    </div>
  );
};

export default NoteCard;
