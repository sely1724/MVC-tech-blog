const deleteFormHandler = async (event) => {
  event.preventDefault();
  console.log("event listener works");
  const postID = document.querySelector(".delete-btn").value;

  const response = await fetch("/api/dashboard/" + postID, {
    method: "DELETE",
    //body: JSON.stringify({}),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed.");
  }
};
document
  .querySelector(".delete-btn")
  .addEventListener("click", deleteFormHandler);
