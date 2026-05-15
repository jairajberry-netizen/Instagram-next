import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Stories from "@/components/Stories";
const page = () => {
  return (
    <div>
      <Navbar />
      <Stories />
    </div>
  );
};

export default page;
