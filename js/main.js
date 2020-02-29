document.addEventListener(
  "DOMContentLoaded",
  function() {
    let filter = document.querySelector(".filter");

    // Modal Img
    let galleryItem = document.querySelectorAll(".gallery__item");
    let galleryItemImg = document.querySelectorAll(".gallery__item--img");
    let modalClose = document.querySelector(".modal__close");
    let modalOpen = document.querySelector(".modal__open");
    let modalOpenImg = document.querySelector(".modal__open--img");
    let arrowLeft = document.querySelector(".arrow__left");
    let arrowRight = document.querySelector(".arrow__right");
    for (let i = 0; i < galleryItem.length; i++) {
      galleryItem[i].addEventListener("click", function() {
        arrowLeft.style.visibility = "visible";
        arrowRight.style.visibility = "visible";
        modalClose.style.display = "block";
        modalOpen.style.display = "block";
        modalOpenImg.src =
          galleryItemImg[galleryItemImg[i].getAttribute("data-number") - 1].src;
        modalOpenImg.dataset.number =
          galleryItemImg[i].getAttribute("data-number") - 1;
        if (i == 0) {
          arrowLeft.style.visibility = "hidden";
        }
        if (i == galleryItem.length - 1) {
          arrowRight.style.visibility = "hidden";
        }
      });
    }
    // click Arrow Left, Right in Modal Img
    arrowLeft.addEventListener("click", function() {
      let k = modalOpenImg.getAttribute("data-number");
      k--;
      if (k == 0) {
        arrowLeft.style.visibility = "hidden";
        modalOpenImg.src = galleryItemImg[k].src;
        modalOpenImg.dataset.number = k;
      } else {
        arrowRight.style.visibility = "visible";
        modalOpenImg.src = galleryItemImg[k].src;
        modalOpenImg.dataset.number = k;
        console.log(k);
      }
    });
    arrowRight.addEventListener("click", function() {
      let k = modalOpenImg.getAttribute("data-number");
      k++;
      if (k === galleryItem.length - 1) {
        arrowRight.style.visibility = "hidden";
        modalOpenImg.src = galleryItemImg[k].src;
        modalOpenImg.dataset.number = k;
      } else {
        arrowLeft.style.visibility = "visible";

        modalOpenImg.src = galleryItemImg[k].src;
        modalOpenImg.dataset.number = k;
        console.log(k);
      }
    });
    modalClose.addEventListener("click", function() {
      modalClose.style.display = "none";
      modalOpen.style.display = "none";
    });
    // End Modal

    // Start Filter
    filter.addEventListener("change", function() {
      let value = filter.value;
      if (value == 9) {
        for (let i = 0; i < galleryItem.length; i++) {
          galleryItem[i].style.display = "block";
        }
        galleryItem[0].style.gridRow = "1/6";
        galleryItem[1].style.gridRow = "6/9";
        galleryItem[2].style.gridRow = "6/9";
        galleryItem[3].style.gridRow = "1/4";
        galleryItem[4].style.gridRow = "1/4";
        galleryItem[5].style.gridRow = "4/9";
        galleryItem[6].style.gridRow = "1/6";
        galleryItem[7].style.gridRow = "6/9";
        galleryItem[8].style.gridRow = "6/9";
        galleryItem[0].style.gridColumn = "1/3";
        galleryItem[1].style.gridColumn = "1/2";
        galleryItem[2].style.gridColumn = "2/3";
        galleryItem[3].style.gridColumn = "3/4";
        galleryItem[4].style.gridColumn = "4/5";
        galleryItem[5].style.gridColumn = "3/5";
        galleryItem[6].style.gridColumn = "5/7";
        galleryItem[7].style.gridColumn = "5/6";
        galleryItem[8].style.gridColumn = "6/7";
      }
      if (value == 8) {
        for (let i = 0; i < galleryItem.length; i++) {
          galleryItem[i].style.display = "block";
        }
        galleryItem[2].style.display = "none";
        galleryItem[0].style.gridRow = "1/5";
        galleryItem[1].style.gridRow = "5/9";
        galleryItem[3].style.gridRow = "1/4";
        galleryItem[4].style.gridRow = "1/4";
        galleryItem[5].style.gridRow = "4/9";
        galleryItem[6].style.gridRow = "1/6";
        galleryItem[7].style.gridRow = "6/9";
        galleryItem[8].style.gridRow = "6/9";
        galleryItem[0].style.gridColumn = "1/3";
        galleryItem[1].style.gridColumn = "1/3";
        galleryItem[3].style.gridColumn = "3/4";
        galleryItem[4].style.gridColumn = "4/5";
        galleryItem[5].style.gridColumn = "3/5";
        galleryItem[6].style.gridColumn = "5/7";
        galleryItem[7].style.gridColumn = "5/6";
        galleryItem[8].style.gridColumn = "6/7";
      }
      if (value == 7) {
        for (let i = 0; i < galleryItem.length; i++) {
          galleryItem[i].style.display = "block";
        }
        galleryItem[1].style.display = "none";
        galleryItem[2].style.display = "none";
        galleryItem[0].style.gridRow = "1/9";
        galleryItem[3].style.gridRow = "1/4";
        galleryItem[4].style.gridRow = "1/4";
        galleryItem[5].style.gridRow = "4/9";
        galleryItem[6].style.gridRow = "1/6";
        galleryItem[7].style.gridRow = "6/9";
        galleryItem[8].style.gridRow = "6/9";
        galleryItem[0].style.gridColumn = "1/3";
        galleryItem[3].style.gridColumn = "3/4";
        galleryItem[4].style.gridColumn = "4/5";
        galleryItem[5].style.gridColumn = "3/5";
        galleryItem[6].style.gridColumn = "5/7";
        galleryItem[7].style.gridColumn = "5/6";
        galleryItem[8].style.gridColumn = "6/7";
      }
      if (value == 6) {
        for (let i = 0; i < galleryItem.length; i++) {
          galleryItem[i].style.display = "block";
        }
        galleryItem[1].style.display = "none";
        galleryItem[2].style.display = "none";
        galleryItem[4].style.display = "none";
        galleryItem[0].style.gridRow = "1/9";
        galleryItem[3].style.gridRow = "1/5";
        galleryItem[5].style.gridRow = "5/9";
        galleryItem[6].style.gridRow = "1/6";
        galleryItem[7].style.gridRow = "6/9";
        galleryItem[8].style.gridRow = "6/9";
        galleryItem[0].style.gridColumn = "1/3";
        galleryItem[3].style.gridColumn = "3/5";
        galleryItem[5].style.gridColumn = "3/5";
        galleryItem[6].style.gridColumn = "5/7";
        galleryItem[7].style.gridColumn = "5/6";
        galleryItem[8].style.gridColumn = "6/7";
      }
      if (value == 5) {
        for (let i = 0; i < galleryItem.length; i++) {
          galleryItem[i].style.display = "block";
        }
        galleryItem[1].style.display = "none";
        galleryItem[2].style.display = "none";
        galleryItem[3].style.display = "none";
        galleryItem[4].style.display = "none";
        galleryItem[0].style.gridRow = "1/9";
        galleryItem[5].style.gridRow = "1/9";
        galleryItem[6].style.gridRow = "1/6";
        galleryItem[7].style.gridRow = "6/9";
        galleryItem[8].style.gridRow = "6/9";
        galleryItem[0].style.gridColumn = "1/3";
        galleryItem[5].style.gridColumn = "3/5";
        galleryItem[6].style.gridColumn = "5/7";
        galleryItem[7].style.gridColumn = "5/6";
        galleryItem[8].style.gridColumn = "6/7";
      }
      if (value == 4) {
        for (let i = 0; i < galleryItem.length; i++) {
          galleryItem[i].style.display = "none";
        }
        galleryItem[0].style.display = "block";
        galleryItem[5].style.display = "block";
        galleryItem[6].style.display = "block";
        galleryItem[7].style.display = "block";
        galleryItem[0].style.gridRow = "1/9";
        galleryItem[5].style.gridRow = "1/9";
        galleryItem[6].style.gridRow = "1/5";
        galleryItem[7].style.gridRow = "5/9";
        galleryItem[0].style.gridColumn = "1/3";
        galleryItem[5].style.gridColumn = "3/5";
        galleryItem[6].style.gridColumn = "5/7";
        galleryItem[7].style.gridColumn = "5/7";
      }
      if (value == 3) {
        for (let i = 0; i < galleryItem.length; i++) {
          galleryItem[i].style.display = "none";
        }

        galleryItem[0].style.display = "block";
        galleryItem[5].style.display = "block";
        galleryItem[6].style.display = "block";
        galleryItem[0].style.gridRow = "1/9";
        galleryItem[5].style.gridRow = "1/9";
        galleryItem[6].style.gridRow = "1/9";
        galleryItem[0].style.gridColumn = "1/3";
        galleryItem[5].style.gridColumn = "3/5";
        galleryItem[6].style.gridColumn = "5/7";
      }
      if (value == 2) {
        for (let i = 0; i < galleryItem.length; i++) {
          galleryItem[i].style.display = "none";
        }
        galleryItem[0].style.display = "block";
        galleryItem[6].style.display = "block";
        galleryItem[0].style.gridRow = "1/9";
        galleryItem[6].style.gridRow = "1/9";
        galleryItem[0].style.gridColumn = "1/4";
        galleryItem[6].style.gridColumn = "4/7";
      }
      if (value == 1) {
        for (let i = 0; i < galleryItem.length; i++) {
          galleryItem[i].style.display = "none";
        }
        galleryItem[0].style.display = "block";
        galleryItem[0].style.gridRow = "1/9";
        galleryItem[0].style.gridColumn = "1/7";
      }
    });
  },
  false
);
