import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex w-full items-center px-4 py-2 ">
      <div
        className=" bg-zinc-800 h-9  w-9 rounded-full
        flex flex-1 items-center px-3 gap-4 py-5"
      >
        <Search
          className="bg-transparent outline-none text-gray-400"
          size={20}
        />

        <input
          className="flex-1 bg-transparent outline-none text-white"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default SearchBar;
