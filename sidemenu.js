// sidemenu.js
// Created by: Michael Emborsky
// Purpose:

document.addEventListener('DOMContentLoaded', function() {
    // Initializing Properties
    var header = document.querySelector(header);
    var chevron = document.getElementById('chevron');
    var links = document.querySelector('.main-link');
    links.style.display = 'none';
    var isExpanded = false; // Flag to track the state of expanded links
    // Expand or Collapse Links
    chevron.addEventListener('click', function(e) {
      e.preventDefault();
      if (isExpanded) {
        // Collapse the links
        links.style.display = 'none';
        chevron.style.left = '0';
        isExpanded = false;
      } else {
        // Expand the links
        links.style.display = 'flex';
        links.style.alignItems = 'center';
        links.style.flexDirection = 'column';
        chevron.style.left = '20%';
        isExpanded = true;
      }
    });
  });
  