document.addEventListener("scroll", () => {
  const title = document.getElementById("title");
  const bg_2 = document.getElementById("back-2");
  const bg_3 = document.getElementById("back-3");
  const image_card_1 = document.getElementById("image__card-1");
  const image_card_2 = document.getElementById("image__card-2");
  const image_card_3 = document.getElementById("image__card-3");
  const image_card_4 = document.getElementById("image__card-4");
  const positionY = window.scrollY;
  title.style.fontSize = `${100 + positionY * 0.5}px`;
  bg_2.style.top = `-${positionY * 0.5}px`;
  bg_3.style.top = `-${positionY}px`;
  bg_3.style.transform = `scale(${1 + positionY * 0.001})`;
  image_card_1.style.transform = `translateY(${-positionY * 0.5 + 400}px)`;
  image_card_2.style.transform = `translateY(${positionY * 0.1 - 50}px)`;
  image_card_3.style.transform = `translateY(${-positionY * 0.1 + 100}px)`;
  image_card_4.style.transform = `translateY(${positionY * 0.2 - 125}px)`;
  const newOpacity = positionY * 0.001;
  if (newOpacity >= 0 && newOpacity <= 1) {
    image_card_1.style.opacity = newOpacity;
    image_card_2.style.opacity = newOpacity;
    image_card_3.style.opacity = newOpacity;
    image_card_4.style.opacity = newOpacity;
  }
});
