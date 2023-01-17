const commentFormHandler = async (event) => {
  event.preventDefault();

  const comment = document.querySelector("#user-comment").value.trim();
  const blog_post_id = document.querySelector("#comment").value;

  if (comment && blog_post_id) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment, blog_post_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up.");
    }
  }
};

document
  .querySelector(".comment-form")
  .addEventListener("submit", commentFormHandler);
