import Link from "next/link";
import Navbar from "../components/Navbar";
import Stories from "../components/Stories";
import Post from "../components/Post";
import BottomNav from "../components/BottomNav";
const page = () => {
  const postData = [
    {
      userName: "Emma Watson",
      userImage: "/emmawatson.jpg",
      postImage: "/emmawatson.jpg",
      likes: "26.k",
      comments: "1.2k",
      reposts: "1.2k",
      caption: "The best day ever!",
      time: "2 hours ago",
    },
    {
      userName: "Tom Holland",
      userImage: "/tomholland.jpg",
      postImage: "/tomholland.jpg",
      likes: "30.k",
      comments: "2.5k",
      reposts: "1.8k",
      caption: "Swinging into the weekend!",
      time: "1 hour ago",
    },
    {
      userName: "Scarlett Johansson",
      userImage: "/scarlettjohansson.jpg",
      postImage: "/scarlettjohansson.jpg",
      likes: "40.k",
      comments: "3.1k",
      reposts: "2.2k",
      caption: "Loving the new role!",
      time: "30 minutes ago",
    },
  ];
  return (
    <div>
      <Navbar />
      <Stories />
      {postData.map((post, index) => (
        <Post
          key={index}
          userName={post.userName}
          userImage={post.userImage}
          postImage={post.postImage}
          likes={post.likes}
          comments={post.comments}
          reposts={post.reposts}
          caption={post.caption}
          time={post.time}
        />
      ))}
      <BottomNav userImage="/emmawatson.jpg" />
    </div>
  );
};

export default page;
