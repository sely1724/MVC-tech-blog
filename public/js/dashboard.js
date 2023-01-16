const postFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#title").value.trim();
  const notes = document.querySelector("#newPost").value.trim();

  const response = await fetch("/api/dashboard/post", {
    method: "POST",
    body: JSON.stringify({ title, notes }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed.");
  }
};

document.querySelector(".new-post").addEventListener("submit", postFormHandler);
