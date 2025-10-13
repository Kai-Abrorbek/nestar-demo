import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { useState } from "react";

const CommunityList = () => {
  const [title, setTitle] = useState("Hello");
  return (
    <div>
      <h1>Community List {title}</h1>
      <button
        onClick={() => alert("Hello Community")}
        style={{ margin: "15px" }}
      >
        Press Me
      </button>
    </div>
  );
};

export default withLayoutBasic(CommunityList);
