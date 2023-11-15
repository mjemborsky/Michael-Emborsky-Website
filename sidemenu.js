// sidemenu.js
// Created by: Michael Emborsky
// Purpose:

document.addEventListener('DOMContentLoaded', function() {
    // Initializing Properties
    var header = document.querySelector('header');
    var chevron = document.getElementById('chevron');
    var chevronPointer = chevron.querySelector('.pointer')
    var links = document.querySelector('.main-link');
    links.style.display = 'none';
    chevronPointer.style.zIndex = '2';
    var isExpanded = false; // Flag to track the state of expanded links
    // Expand or Collapse Links
    chevron.addEventListener('click', function(e) {
      e.preventDefault();
      if (isExpanded) {
        // Collapse the links
        links.style.display = 'none';
        header.style.width = '0';
        chevron.style.left = '0';
        isExpanded = false;
      } else {
        // Expand the links
        links.style.display = 'flex';
        links.style.alignItems = 'center';
        links.style.flexDirection = 'column';
        header.style.width = '20%';
        chevron.style.left = '20%';
        isExpanded = true;
      }
    });
  });
  