// NAV MENU
const navHeader = document.getElementById('nav-header');
const navAbout = document.getElementById('nav-about');
const navProjects = document.getElementById('nav-projects');
const navContact = document.getElementById('nav-contact');

// CONTENT SECTIONS
const portraitPic = document.getElementById('portrait-pic');
const sectionAbout = document.getElementById('about-section');
const sectionProjects = document.getElementById('projects-section');
const sectionContact = document.getElementById('contact-section');

const projectOne = document.getElementById('project-one-wrapper');
const projectTitleHide = document.getElementById('project-title-hide');
const projectTitleShow = document.getElementById('project-title-show');

const projectTwo = document.getElementById('project-two-wrapper');
const projectTitleHideTwo = document.getElementById('project-title-hide-2');
const projectTitleShowTwo = document.getElementById('project-title-show-2');

const projectThree = document.getElementById('project-three-wrapper');
const projectTitleHideThree = document.getElementById('project-title-hide-3');
const projectTitleShowThree = document.getElementById('project-title-show-3');

// SCREENSHOTS - Cryptotracker
const featuredImage = document.getElementById("featured-img");
const shotOne = document.getElementById('screenshot-one');
const shotTwo = document.getElementById('screenshot-two');
const shotThree = document.getElementById('screenshot-three');
const shotFour = document.getElementById('screenshot-four');

// SCREENSHOTS - National Park List
const featuredImage2 = document.getElementById("featured-img-2");
const shotOne2 = document.getElementById('screenshot-one-2');
const shotTwo2 = document.getElementById('screenshot-two-2');
const shotThree2 = document.getElementById('screenshot-three-2');
const shotFour2 = document.getElementById('screenshot-four-2');

// SCREENSHOTS - Pop Song Chord Progressions
const featuredImage3 = document.getElementById("featured-img-3");
const shotOne3 = document.getElementById('screenshot-one-3');
const shotTwo3 = document.getElementById('screenshot-two-3');
const shotThree3 = document.getElementById('screenshot-three-3');
const shotFour3 = document.getElementById('screenshot-four-3');

const technologyGrid = document.getElementById('technology-grid');
const techReveal = document.getElementById('btn-reveal');
const techHide = document.getElementById('btn-hide');
const techMobile = document.getElementById('front-end-tech-mobile');
const technologyGridTwo = document.getElementById('technology-grid-2');
const techRevealTwo = document.getElementById('btn-reveal-2');
const techHideTwo = document.getElementById('btn-hide-2');
const techMobileTwo = document.getElementById('front-end-tech-mobile-2');

// FOOTER
const backToTop = document.getElementById('back-to-top');

function makeFeatured(image, newImage) {
  image.src = newImage.src
}

function resetDisplay() {
  sectionAbout.style.display = 'flex';
  sectionProjects.style.display = 'flex';
  sectionContact.style.display = 'flex';
  portraitPic.style.display = 'flex';
}

function removeHeight() {
  setTimeout(() => {
    sectionContact.style.removeProperty('height');
  }, 200);
}

navHeader.addEventListener('click', () => {
  resetDisplay();
  removeHeight();
});

navAbout.addEventListener('click', () => {
  resetDisplay();
  removeHeight();
});

navProjects.addEventListener('click', () => {
  resetDisplay();
  removeHeight();
});

navContact.addEventListener('click', () => {
  sectionContact.style.justifyContent = 'flex-start';
  sectionContact.style.height = '50vh';

});

backToTop.addEventListener('click', () => {
  resetDisplay();
});

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
  techReveal.style.display = "flex";
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
  techHideTwo.style.display = "flex";
});

techHideTwo.addEventListener('click', () => {
technologyGridTwo.style.display = "none";
techHideTwo.style.display = "none";
techMobileTwo.style.display = "grid";
techRevealTwo.style.display = "flex";
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
  makeFeatured(featuredImage, shotOne);
});

shotTwo.addEventListener('click', () => {
  makeFeatured(featuredImage, shotTwo);
});

shotThree.addEventListener('click', () => {
  makeFeatured(featuredImage, shotThree);
});

shotFour.addEventListener('click', () => {
  makeFeatured(featuredImage, shotFour);
});

shotOne2.addEventListener('click', () => {
  makeFeatured(featuredImage2, shotOne2);
});

shotTwo2.addEventListener('click', () => {
  makeFeatured(featuredImage2, shotTwo2);
});

shotThree2.addEventListener('click', () => {
  makeFeatured(featuredImage2, shotThree2);
});

shotFour2.addEventListener('click', () => {
  makeFeatured(featuredImage2, shotFour2);
});

shotOne3.addEventListener('click', () => {
  makeFeatured(featuredImage3, shotOne3);
});

shotTwo3.addEventListener('click', () => {
  makeFeatured(featuredImage3, shotTwo3);
});

shotThree3.addEventListener('click', () => {
  makeFeatured(featuredImage3, shotThree3);
});

shotFour3.addEventListener('click', () => {
  makeFeatured(featuredImage3, shotFour3);
});
