const lovedContent = document.getElementById("pic")

const getLovedContent = () => {
  axios.get("http://localhost:3029/api/content/")
      .then(res => {
          const data = res.data;
          alert(data);
  });
};

lovedContent.addEventListener('click', getLovedContent)

const dislikedContent = document.getElementById("pic-two")

const getDislikedContent = () => {
  axios.get("http://localhost:3029/api/dislikedcontent/")
      .then(res => {
          const data = res.data;
          alert(data);
  });
};

dislikedContent.addEventListener('click', getDislikedContent)


const likedContent = document.querySelector(".pic")

const getLikableContent = () => {
  axios.get("http://localhost:3029/api/likedcontent/")
      .then(res => {
          const data = res.data;
          alert(data);
  });
};

likedContent.addEventListener('click', getLikableContent)

