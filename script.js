const iconCart = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
`;
const iconHeart = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>
`;
const iconArrowRight = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>
`;

const iconFresh = `<svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
stroke-width="1.5"
stroke="currentColor"
class="w-6 h-6"
>
<path
stroke-linecap="round"
stroke-linejoin="round"
d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z"
/>
</svg>`;

const paraFresh = `<p>Freshest and highest-quality food your family, office and all</p>`;
const paraHeroRight = `DELICIOUS FOOD FABLES & TASTE PARADISE`;

const firstLayer = document.createElement('div');
const secondLayer = document.createElement('div');
document.body.appendChild(firstLayer);
firstLayer.appendChild(secondLayer);
firstLayer.setAttribute('class', 'background');
secondLayer.setAttribute('class', 'mainContainer');

// header elements
const header = document.createElement('header');
const navBar = document.createElement('div');
const logo = document.createElement('div');
const cartContainer = document.createElement('div');

secondLayer.appendChild(header);
let headerArr = [navBar, logo, cartContainer];

//setting ids and appending header elements
navBar.setAttribute('id', 'links');
logo.setAttribute('id', 'logo');
cartContainer.setAttribute('id', 'cartContainer');

headerArr.forEach((el) => {
  header.appendChild(el);
});

//creating list of links for the navbar elements

const navElements = ['Home', 'Shop', 'Delivery', 'About'];
navElements.forEach((el) => {
  let eachLink = document.createElement('a');
  eachLink.innerHTML = `${el}`;
  eachLink.setAttribute('href', `/${el}`);
  navBar.appendChild(eachLink);
});

//creating main logo

logo.innerHTML = '<h1>FABLAND</h1>';

//creating cart container
// const [ orderNow, rightArrow, iconContainer, cartIcon, heartIcon, verticalLine] = items
const orderNow = document.createElement('h5');
const rightArrow = document.createElement('div');
const iconContainer = document.createElement('div');
const cartIcon = document.createElement('div');
const heartIcon = document.createElement('div');
const verticalLine = document.createElement('span');
rightArrow.setAttribute('id', 'rightArrow');
cartIcon.setAttribute('id', 'cartIcon');
heartIcon.setAttribute('id', 'heartIcon');
iconContainer.setAttribute('id', 'iconContainer');
verticalLine.setAttribute('id', 'verticalLine');

orderNow.textContent = `ORDER NOW`;
rightArrow.innerHTML = iconArrowRight;
cartIcon.innerHTML = iconCart;
heartIcon.innerHTML = iconHeart;
let cartContainerArr = [orderNow, rightArrow, iconContainer];
let iconContainerArr = [cartIcon, verticalLine, heartIcon];

cartContainerArr.forEach((el) => cartContainer.appendChild(el));
iconContainerArr.forEach((el) => iconContainer.appendChild(el));

//line after header
const midLine = document.createElement('hr');
secondLayer.appendChild(midLine);

//hero container

const heroContainer = document.createElement('div');
const heroLeft = document.createElement('div');
const heroRight = document.createElement('div');
const heroFresh = document.createElement('div');
const heroClients = document.createElement('div');
const heroDeli = document.createElement('div');
const heroFreshImg = document.createElement('div');
const heroFreshText = document.createElement('div');
const heroLeftEl = [heroFresh, heroClients];

secondLayer.appendChild(heroContainer);
heroContainer.appendChild(heroRight);
heroContainer.appendChild(heroLeft);
heroRight.appendChild(heroDeli);
heroLeftEl.forEach((div) => {
  heroLeft.appendChild(div);
});
heroFresh.appendChild(heroFreshImg);
heroFresh.appendChild(heroFreshText);

heroLeft.setAttribute('id', 'heroLeft');
heroRight.setAttribute('id', 'heroRight');
heroFresh.setAttribute('id', 'heroFresh');
heroClients.setAttribute('id', 'heroClients');
heroDeli.setAttribute('id', 'heroDeli');
heroFreshImg.setAttribute('id', 'imageFresh');
heroFreshText.setAttribute('id', 'textFresh');

heroFreshImg.innerHTML = iconFresh;
heroFreshText.innerHTML = paraFresh;