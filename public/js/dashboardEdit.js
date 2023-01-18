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

const updateFormHandler = async (event) => {
  event.preventDefault();
  console.log("event listener works");
  const id = document.querySelector(".update-btn").value;
  const title = document.querySelector("#title-update").value.trim();
  const notes = document.querySelector("#notes-update").value.trim();

  console.log(title);
  console.log(notes);
  console.log(id);
  // both print out correctly
  //if (title && notes) {
  const response = await fetch("/api/dashboard/" + id, {
    method: "PUT",
    body: JSON.stringify({ title, notes }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/dashboard/");
    // console.log(req.body.title);
  } else {
    ("failed to update");
  }
};
//};

document
  .querySelector(".update-form")
  .addEventListener("submit", updateFormHandler);

document
  .querySelector(".delete-btn")
  .addEventListener("click", deleteFormHandler);
