import Link from "next/link";

export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

export default async function Posts() {
  const posts = await getPosts();

  return (
    <div>
      <h1 className="text-4xl py-3 text-blue-700 text-center">Posts</h1>
      <div className="grid grid-cols-3 gap-5">
        {posts.map((post, index) => (
          <div
            key={post.id}
            className={`p-4 text-white 
                ${index % 3 === 0 ? "bg-red-500" : ""}
                ${index % 3 === 1 ? "bg-green-500" : ""}
                ${index % 3 === 2 ? "bg-blue-500" : ""}
              `}
          >
            <h2>{post.title}</h2>
            <div>
              <Link
                href={`posts/${post.id}`}
                className="bg-black text-white px-5"
              >
                <button>Show Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
