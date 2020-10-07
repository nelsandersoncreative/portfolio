const technologyGrid = document.getElementById('technology-grid');
const techReveal = document.getElementById('btn-reveal');
const techHide = document.getElementById('btn-hide');
const techMobile = document.getElementById('front-end-tech-mobile');
const projectTitleHide = document.getElementById('project-title-hide');
const projectTitleShow = document.getElementById('project-title-show');
const projectOne = document.getElementById('project-one-wrapper');

const shotOne = document.getElementById('screenshotOne');
const shotTwo = document.getElementById('screenshotTwo');
const shotThree = document.getElementById('screenshotThree');
const shotFour = document.getElementById('screenshotFour');

const featuredImage = document.getElementById("featured-img");


const technologyGridTwo = document.getElementById('technology-grid-2');
const techRevealTwo = document.getElementById('btn-reveal-2');
const techHideTwo = document.getElementById('btn-hide-2');
const techMobileTwo = document.getElementById('front-end-tech-mobile-2');
const projectTitleHideTwo = document.getElementById('project-title-hide-2');
const projectTitleShowTwo = document.getElementById('project-title-show-2');
const projectTwo = document.getElementById('project-two-wrapper');

const shotOne2 = document.getElementById('screenshotOne-2');
const shotTwo2 = document.getElementById('screenshotTwo-2');
const shotThree2 = document.getElementById('screenshotThree-2');
const shotFour2 = document.getElementById('screenshotFour-2');

const featuredImage2 = document.getElementById("featured-img-2");

const projectTitleHideThree = document.getElementById('project-title-hide-3');
const projectTitleShowThree = document.getElementById('project-title-show-3');
const projectThree = document.getElementById('project-three-wrapper');

const shotOne3 = document.getElementById('screenshotOne-3');
const shotTwo3 = document.getElementById('screenshotTwo-3');
const shotThree3 = document.getElementById('screenshotThree-3');
const shotFour3 = document.getElementById('screenshotFour-3');

const featuredImage3 = document.getElementById("featured-img-3");


function makeFeatured(newImage) {
  featuredImage.src = newImage.src;
}

function makeFeaturedTwo(newImage) {
  featuredImage2.src = newImage.src;
}

function makeFeaturedThree(newImage) {
  featuredImage3.src = newImage.src;
}

techReveal.addEventListener('click', () => {
    technologyGrid.style.display = "flex";
    techReveal.style.display = "none";
    techMobile.style.display = "none";
    techHide.style.display = "flex";
});

techHide.addEventListener('click', () => {
  technologyGrid.style.display = "none";
  techHide.style.display = "none";
  techMobile.style.display = "grid";
  techReveal.style.display = "flex"
});

projectTitleHide.addEventListener('click', () => {
  projectTitleHide.style.display = "none";
  projectTitleShow.style.display = "flex";
  projectOne.style.display = "block";
});

projectTitleShow.addEventListener('click', () => {
  projectTitleShow.style.display = "none";
  projectTitleHide.style.display = "flex";
  projectOne.style.display = "none";
});


techRevealTwo.addEventListener('click', () => {
  technologyGridTwo.style.display = "flex";
  techRevealTwo.style.display = "none";
  techMobileTwo.style.display = "none";
  techHideTwo.style.display = "flex"
});

techHideTwo.addEventListener('click', () => {
technologyGridTwo.style.display = "none";
techHideTwo.style.display = "none";
techMobileTwo.style.display = "grid";
techRevealTwo.style.display = "flex"
});

projectTitleHideTwo.addEventListener('click', () => {
  projectTitleHideTwo.style.display = "none";
  projectTitleShowTwo.style.display = "flex";
  projectTwo.style.display = "flex";
});

projectTitleShowTwo.addEventListener('click', () => {
  projectTitleShowTwo.style.display = "none";
  projectTitleHideTwo.style.display = "flex";
  projectTwo.style.display = "none";
});

projectTitleHideThree.addEventListener('click', () => {
  projectTitleHideThree.style.display = "none";
  projectTitleShowThree.style.display = "flex";
  projectThree.style.display = "block";
});

projectTitleShowThree.addEventListener('click', () => {
  projectTitleShowThree.style.display = "none";
  projectTitleHideThree.style.display = "flex";
  projectThree.style.display = "none";
});


shotOne.addEventListener('click', () => {
  makeFeatured(shotOne);
});

shotTwo.addEventListener('click', () => {
  makeFeatured(shotTwo);
});

shotThree.addEventListener('click', () => {
  makeFeatured(shotThree);
});

shotFour.addEventListener('click', () => {
  makeFeatured(shotFour);
});


shotOne2.addEventListener('click', () => {
  makeFeaturedTwo(shotOne2);
});

shotTwo2.addEventListener('click', () => {
  makeFeaturedTwo(shotTwo2);
});

shotThree2.addEventListener('click', () => {
  makeFeaturedTwo(shotThree2);
});

shotFour2.addEventListener('click', () => {
  makeFeaturedTwo(shotFour2);
});


shotOne3.addEventListener('click', () => {
  makeFeaturedThree(shotOne3);
});

shotTwo3.addEventListener('click', () => {
  makeFeaturedThree(shotTwo3);
});

shotThree3.addEventListener('click', () => {
  makeFeaturedThree(shotThree3);
});

shotFour3.addEventListener('click', () => {
  makeFeaturedThree(shotFour3);
});

// closeButton.addEventListener('click', () => {
//   closeButton.parentElement.style.display='none';
// });
