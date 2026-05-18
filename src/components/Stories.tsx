import StoryCard from "./StoryCard";

const Stories = () => {
  const storyData = [
    { image: "/emmawatson.jpg", name: "Story 1" },
    { image: "/file.svg", name: "Story 2" },
    { image: "/file.svg", name: "Story 3" },
    { image: "/file.svg", name: "Story 4" },
    { image: "/file.svg", name: "Story 5" },
    { image: "/file.svg", name: "Story 6" },
    { image: "/file.svg", name: "Story 7" },
    { image: "/file.svg", name: "Story 8" },
  ];
  return (
    <div className="flex items-center overflow-x-auto gap-4 py-4 px-2 scroll-behavior: smooth bg-black [&::-webkit-scrollbar]:hidden">
      {" "}
      {/*  [&::-webkit-scrollbar]:hidden -> targets the elemts scrollbar and hides it hehe*/}
      {storyData.map((story, index) => (
        <StoryCard
          key={index}
          image={story.image}
          name={story.name}
          myStory={index === 0}
        />
      ))}
    </div>
  );
};

export default Stories;
