"use strict";

//FADE 
var fadeEl = document.querySelector('.fade');
var hasScrolled = false;
window.addEventListener('scroll', function () {
  if (!hasScrolled) {
    fadeEl.style.opacity = '0.5';
    hasScrolled = true;
  }
});

//FILTERS
var filtersEl = document.querySelector('.filters');
var projectEl1 = document.querySelector('.project:nth-child(1)');
var projectEl2 = document.querySelector('.project:nth-child(2)');
var projectEl3 = document.querySelector('.project:nth-child(3)');
var projectEl4 = document.querySelector('.project:nth-child(4)');
var projectEl5 = document.querySelector('.project:nth-child(5)');
var projectEl6 = document.querySelector('.project:nth-child(6)');
var htmlEl = document.querySelector('html');
filtersEl.addEventListener('click', function (e) {
  // remove fade
  fadeEl.style.opacity = '0';

  //make clicked button active
  document.querySelector('.filter-btn--active').classList.remove('filter-btn--active');
  e.target.classList.add('filter-btn--active');

  // change image opacities
  htmlEl.style.setProperty('--default-opacity', '0.4');
  htmlEl.style.setProperty('--hover-opacity', '0.3');

  // reorganize grid
  var filterText = e.target.textContent;
  if (filterText === 'All') {
    projectEl1.style.opacity = '1';
    projectEl1.style.transform = 'scale(1)';
    projectEl2.style.opacity = '1';
    projectEl2.style.transform = 'scale(1)';
    projectEl3.style.opacity = '1';
    projectEl3.style.transform = 'scale(1)';
    projectEl4.style.opacity = '1';
    projectEl4.style.transform = 'scale(1)';
    projectEl5.style.opacity = '1';
    projectEl5.style.transform = 'scale(1)';
    projectEl6.style.opacity = '1';
    projectEl6.style.transform = 'scale(1)';
  } else if (filterText === 'Front end') {
    projectEl1.style.opacity = '0';
    projectEl1.style.transform = 'scale(0)';
    projectEl2.style.opacity = '0';
    projectEl2.style.transform = 'scale(0)';
    projectEl5.style.opacity = '0';
    projectEl5.style.transform = 'scale(0)';
    projectEl6.style.opacity = '0';
    projectEl6.style.transform = 'scale(0)';
    projectEl3.style.transform = 'translateX(-650px)';
    projectEl3.style.opacity = '1';
    projectEl4.style.transform = 'translate(325px, -502px)';
    projectEl4.style.opacity = '1';
  } else if (filterText === 'Back end') {
    projectEl1.style.opacity = '0';
    projectEl1.style.transform = 'scale(0)';
    projectEl2.style.opacity = '0';
    projectEl2.style.transform = 'scale(0)';
    projectEl3.style.opacity = '0';
    projectEl3.style.transform = 'scale(0)';
    projectEl4.style.opacity = '0';
    projectEl4.style.transform = 'scale(0)';
    projectEl5.style.transform = 'translate(-325px, -359px)';
    projectEl5.style.opacity = '1';
    projectEl6.style.transform = 'translate(-325px, -501px)';
    projectEl6.style.opacity = '1';
  } else if (filterText === 'Full-stack') {
    projectEl3.style.opacity = '0';
    projectEl3.style.transform = 'scale(0)';
    projectEl4.style.opacity = '0';
    projectEl4.style.transform = 'scale(0)';
    projectEl5.style.opacity = '0';
    projectEl5.style.transform = 'scale(0)';
    projectEl6.style.opacity = '0';
    projectEl6.style.transform = 'scale(0)';
    projectEl1.style.opacity = '1';
    projectEl1.style.transform = 'scale(1)';
    projectEl2.style.opacity = '1';
    projectEl2.style.transform = 'scale(1)';
  }
});
