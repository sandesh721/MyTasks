document.addEventListener("DOMContentLoaded", () => {
  const shoes = document.querySelector(".shoes");
  const moveLeft = document.querySelector(".moveLeft");
  const moveRight = document.querySelector(".moveRight");

  const scrollAmount = 350
  moveLeft.addEventListener("click", () => {
    shoes.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  moveRight.addEventListener("click", () => {
    shoes.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  const products = document.querySelector(".products");
  const move_Left = document.querySelector(".move-Left");
  const move_Right = document.querySelector(".move-Right");
  
  move_Left.addEventListener("click", () => {
    products.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  move_Right.addEventListener("click", () => {
    products.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
  const sports = document.querySelector(".sports");
  const Left = document.querySelector(".Left");
  const Right = document.querySelector(".Right");
  
  Left.addEventListener("click", () => {
    sports.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  Right.addEventListener("click", () => {
    sports.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });


  const menubar = document.getElementById("menubar");
    const slideMenu = document.getElementById("slideMenu");
    const closeMenu = document.getElementById("closeMenu");

    menubar.addEventListener("click", () => {
    slideMenu.classList.add("open");
    });

    closeMenu.addEventListener("click", () => {
    slideMenu.classList.remove("open");
    });

});
