const getPosts = () => {
  fetch("https://jsonplaceholder.typicode.com/posts") // GET
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
};

const getPosts2 = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

//getPosts();
//getPosts2();

// metodos o verbos http => GET, POST, PUT, PATCH, DELETE

const createPost = () => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "Mi nuevos post",
      body: "loresdbvhzdvkjzdbv zdbv adkzv akzdsbvd akz dsvzk vd KZ vd KZ vdsd x k dvs zdakh akz dsh kih",
      userId: 5,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

const createPost2 = async () => {
  try {
    const respuesta = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
        body: JSON.stringify({
          title: "Mi nuevos post",
          body: "loresdbvhzdvkjzdbv zdbv adkzv akzdsbvd akz dsvzk vd KZ vd KZ vdsd x k dvs zdakh akz dsh kih",
          userId: 5,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const data = await respuesta.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

//createPost2();

const deletePost = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  })
    .then((resp) => resp.json())
    .then((data) => console.log(data));
};

deletePost(8);
