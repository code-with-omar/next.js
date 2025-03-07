import React from "react";

export const singlePost = async (user_id) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${user_id}`
  );
  const data = res.json();
  console.log(data);
  return data;
};

export default async function Post({ params }) {
  const { id } = await params;
  const singlePostData = await singlePost(id);
  console.log(singlePostData);
  return (
    <div className=" bg-purple-800 text-yellow-300 text-center">
      <h2>{singlePostData.title}</h2>
      <p>{singlePostData.body}</p>
    </div>
  );
}
