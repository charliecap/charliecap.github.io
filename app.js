// window.onload = function () {
//   document.body.classList.remove("is-preload");
// };
// window.ontouchmove = function () {
//   return false;
// };
// window.onorientationchange = function () {
//   document.body.scrollTop = 0;
// };

// const now = new Date();
// const before = new Date("May 1 2020 10:00:00");
// const update = dateFns.distanceInWords(now, before, {addSuffix: true});

// const html = `
// <span>Created ${update}</span>
// `;

// document.querySelector('#footer').innerHTML += html;




// //  dateFns.distanceInWords(now, before, {addSuffix: true})

// //  time.innerHTML = dateFns.distanceInWords(now, before, {addSuffix: true});



// NEW CODE

window.onload = function () {
  document.body.classList.remove("is-preload");
};
window.ontouchmove = function () {
  return false;
};
window.onorientationchange = function () {
  document.body.scrollTop = 0;
};

const now = new Date();
const before = new Date("May 1 2020 10:00:00");
const update = dateFns.distanceInWords(now, before, {addSuffix: true});

const html = `
<span>Created ${update}</span>
`;

document.querySelector('#footer').innerHTML += html;




//  dateFns.distanceInWords(now, before, {addSuffix: true})

//  time.innerHTML = dateFns.distanceInWords(now, before, {addSuffix: true});




