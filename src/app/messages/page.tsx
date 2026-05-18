import ChatCard from "./ChatCard";
import MessageHeader from "./MessageHeader";
import NoteCard from "./NoteCard";
import SearchBar from "./SearchBar";

const page = () => {
  const CardData = [
    { CardImage: "/emmawatson.jpg", UserNote: "Hey there i am!" },
  ];

  return (
    <div>
      <MessageHeader />
      <SearchBar />

      {CardData.map((card, index) => (
        <NoteCard
          key={index}
          CardImage={card.CardImage}
          UserNote={card.UserNote}
        />
      ))}
      <div className="border-t border-gray-700 mt-4"></div>
      <div className="justify-between flex px-4 py-3 items-center ">
        <span className="text-white text-xl font-semibold">Messages</span>
        <span className="text-blue-400 text-xl font-semibold">Requests</span>
      </div>
      <ChatCard
        MessageImage="/emmawatson.jpg"
        UserName="Emma Watson"
        ReceivedMessage="Hey Love ❤️!  Missing Me?"
        timeStamp="9hrs ago"
      />
    </div>
  );
};
export default page;
