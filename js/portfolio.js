document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const videoCards = document.querySelectorAll(".video-card");

  // Filter Functionality
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const category = button.getAttribute("data-category");
      videoCards.forEach(card => {
        if (category === "all" || card.getAttribute("data-category") === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Video Popup Functionality
  const popup = document.createElement("div");
  popup.classList.add("video-popup");
  popup.innerHTML = `
    <div class="video-popup-content">
      <span class="close-popup">&times;</span>
      <video controls autoplay></video>
    </div>
  `;
  document.body.appendChild(popup);

  const popupVideo = popup.querySelector("video");
  const closePopup = popup.querySelector(".close-popup");

  videoCards.forEach(card => {
    const video = card.querySelector("video");
    card.addEventListener("click", () => {
      popupVideo.src = video.getAttribute("src");
      popup.classList.add("active");
    });
  });

  closePopup.addEventListener("click", () => {
    popup.classList.remove("active");
    popupVideo.pause();
    popupVideo.src = "";
  });
});
