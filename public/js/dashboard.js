const postFormHandler = async (event) => {
  event.preventDefault();

  const postObject = {
    title: document.querySelector("#title").value.trim(),
    notes: document.querySelector("#newPost").value.trim(),
  };
  const response = await fetch("/api/dashboard", {
    method: "POST",
    body: JSON.stringify(postObject),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed.");
  }
};

document
  .querySelector("#submit-btn")
  .addEventListener("submit", postFormHandler);
