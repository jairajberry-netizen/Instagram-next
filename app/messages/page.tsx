import MessageHeader from "./MessageHeader";
import NoteCard from "./NoteCard";
import SearchBar from "./SearchBar";

const page = () => {
  return (
    <div className="">
      <MessageHeader />
      <SearchBar />
      <NoteCard />
    </div>
  );
};

export default page;
