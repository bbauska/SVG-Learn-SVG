// Modal functionality
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".image-item").forEach(item => {
  item.addEventListener("click", () => {
    modal.style.display = "flex";
    modalTitle.textContent = item.dataset.title;
    modalDescription.textContent = item.dataset.description;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
