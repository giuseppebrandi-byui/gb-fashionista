// Get the form element that opens the modal
const newsletterForm = document.querySelector(".newsletterForm");
// Get the modal
const modalN = document.querySelector("#newsLetterModal");
// Get the button that opens the modal
const newsLetterBtn = document.querySelector(".newsletterBtn");
// Get the span element that closes the modal
const newsLetterCloseBtn = document.querySelector(".close");

// When the user clicks the button, open the modal
newsLetterBtn.onclick = function (e) {
  e.preventDefault();
  let emailFieldValue = document.querySelector("[name=emailN]").value;
  if (emailFieldValue !== "") {
    modalN.style.display = "block";
  }
};

// When the user clicks on <span> (x), close the modal
newsLetterCloseBtn.onclick = function () {
  modalN.style.display = "none";
  newsletterForm.reset();
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalN) {
    modalN.style.display = "none";
  }
};
