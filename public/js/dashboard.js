const postFormHandler = async (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title").value.trim();
  const newPostEl = document.getElementById("newPost").value.trim();

  if (titleEl && newPostEl) {
    const response = await fetch("/api/dashboard", {
      method: "POST",
      body: JSON.stringify({ titleEl, newPostEl }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed.");
    }
  }
};

document.querySelector(".new-post").addEventListener("submit", postFormHandler);
