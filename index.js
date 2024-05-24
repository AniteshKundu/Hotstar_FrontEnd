let movies = [
  {
    name: "falcome and the winter soldier",
    des:
      "Following the events of Avengers: Endgame, Sam Wilson and Bucky Barners team up in a global adventure...",
    image: "images/slider 2.png"
  },
  {
    name: "loki",
    des:
      "The mercurial villain Loki recumes his role as the God of Mischief in a new series that takes place...",
    image: "images/slider 1.png"
  },
  {
    name: "wanda vision",
    des:
      "Wanda Maximoff and vision- two super-powered begins living idealized suburban lives-begin to suspect that everything is not as it seems.",
    image: "images/slider 3.png"
  },
  {
    name: "raya and the last dragon",
    des:
      "Raya,a fallen pricess, must track down the legendary last dragon to stop the evil forces that have returned and threatened her world.",
    image: "images/slider 4.png"
  },
  {
    name: "luca",
    des:
      "The movie is a coming-of-age story about one young boy experiencing an unforgettable summer filled with gelato,pasta and endless scooter rides.",
    image: "images/slider 5.png"
  }
];
function myFunction() {
  let x = document.getElementById("myNavbar");
  if (x.classList.contains("responsive")) {
    x.className = "navbar";
    navLink[0].style.opacity = "0";
    setTimeout(() => {
      navLink[0].style.display = "none";
    }, 800);
  } else {
    x.className += " responsive";
    navLink[0].style.display = "flex";
    setTimeout(() => {
      navLink[0].style.opacity = "1";
    }, 200);
  }
}
let navLink = document.getElementsByClassName("nav-links");
const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0; //track the current slide

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }
  //Create dom elements
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  //attaching all elements
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  //setting up items
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";
  sliders.push(slide);
  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};
for (let i = 0; i < 3; i++) {
  createSlide();
}
setInterval(() => {
  createSlide();
}, 3000);

//video cards

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

//card sliders

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
    console.log(item.scrollLeft);
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
