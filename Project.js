document.addEventListener("DOMContentLoaded", () => {
  // Like button functionality
  const likeButton = document.getElementById("like-button");
  const likeCount = document.getElementById("like-count");

  if (likeButton && likeCount) {
    likeButton.addEventListener("click", () => {
      let count = parseInt(likeCount.textContent, 10);
      likeCount.textContent = count + 1;
    });
  }

  // Comment functionality
  const commentBox = document.getElementById("comment-box");
  const submitComment = document.getElementById("submit-comment");
  const commentList = document.getElementById("comment-list");

  if (submitComment && commentBox && commentList) {
    submitComment.addEventListener("click", () => {
      const commentText = commentBox.value.trim();
      if (commentText !== "") {
        const commentItem = document.createElement("li");
        commentItem.textContent = commentText;
        commentList.appendChild(commentItem);
        commentBox.value = ""; // Clear the input
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Like button functionality
  const likeButton = document.getElementById("like-button");
  const likeCount = document.getElementById("like-count");

  if (likeButton && likeCount) {
    likeButton.addEventListener("click", () => {
      let count = parseInt(likeCount.textContent, 10);
      likeCount.textContent = count + 1;
    });
  }

  // Comment functionality
  const commentBox = document.getElementById("comment-box");
  const submitComment = document.getElementById("submit-comment");
  const commentList = document.getElementById("comment-list");

  if (submitComment && commentBox && commentList) {
    submitComment.addEventListener("click", () => {
      const commentText = commentBox.value.trim();
      if (commentText !== "") {
        const commentItem = document.createElement("li");
        commentItem.textContent = commentText;
        commentList.appendChild(commentItem);
        commentBox.value = ""; // Clear the input
      }
    });
  }

  // Slider functionality
  const sliders = document.querySelectorAll(".slider");
  sliders.forEach((slider) => {
    const images = slider.querySelector(".slider-images");
    const prevBtn = slider.querySelector(".prev-btn");
    const nextBtn = slider.querySelector(".next-btn");
    let index = 0;

    const updateSlider = () => {
      const width = slider.offsetWidth;
      images.style.transform = `translateX(-${index * width}px)`;
    };

    prevBtn.addEventListener("click", () => {
      index = (index > 0) ? index - 1 : images.children.length - 1;
      updateSlider();
    });

    nextBtn.addEventListener("click", () => {
      index = (index < images.children.length - 1) ? index + 1 : 0;
      updateSlider();
    });

    window.addEventListener("resize", updateSlider);
    updateSlider();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Like button functionality
  const likeButton = document.getElementById("like-button");
  const likeCount = document.getElementById("like-count");

  if (likeButton && likeCount) {
    likeButton.addEventListener("click", () => {
      let count = parseInt(likeCount.textContent, 10);
      likeCount.textContent = count + 1;
    });
  }

  // Comment functionality
  const commentBox = document.getElementById("comment-box");
  const submitComment = document.getElementById("submit-comment");
  const commentList = document.getElementById("comment-list");

  if (submitComment && commentBox && commentList) {
    submitComment.addEventListener("click", () => {
      const commentText = commentBox.value.trim();
      if (commentText !== "") {
        const commentItem = document.createElement("li");
        commentItem.textContent = commentText;
        commentList.appendChild(commentItem);
        commentBox.value = ""; // Clear the input
      }
    });
  }

  // Slider functionality
  const sliders = document.querySelectorAll(".slider");
  sliders.forEach((slider) => {
    const images = slider.querySelector(".slider-images");
    const prevBtn = slider.querySelector(".prev-btn");
    const nextBtn = slider.querySelector(".next-btn");
    let index = 0;

    const updateSlider = () => {
      const width = slider.offsetWidth;
      images.style.transform = `translateX(-${index * width}px)`;
    };

    prevBtn.addEventListener("click", () => {
      index = (index > 0) ? index - 1 : images.children.length - 1;
      updateSlider();
    });

    nextBtn.addEventListener("click", () => {
      index = (index < images.children.length - 1) ? index + 1 : 0;
      updateSlider();
    });

    window.addEventListener("resize", updateSlider);
    updateSlider();
  });
});
