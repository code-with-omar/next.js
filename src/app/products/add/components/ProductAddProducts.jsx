"use client";

export default function PostForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const body = form.body.value; // Ensure `name="body"` in the input field
    const payload = { title, body };

    const res = await fetch("http://localhost:3000/api/posts", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();
    if (result?.acknowledged === true) {
      alert("Post Added");
    }
    form.reset();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="mt-8 flex flex-col justify-center items-center gap-4"
      >
        <label htmlFor="title">
          Title
          <input
            id="title"
            type="text"
            name="title"
            className="border border-slate-950 rounded-sm ml-2"
          />
        </label>

        <label htmlFor="body">
          Body
          <input
            id="body"
            type="text"
            name="body"
            className="border border-slate-950 rounded-sm ml-2"
          />
        </label>

        <button
          type="submit"
          className="bg-orange-600 py-2 px-4 rounded-sm hover:text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
