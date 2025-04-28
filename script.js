const htmlBody = document.querySelector("body")
const leftPanel = document.querySelector('.left-panel');
const rightPanel = document.querySelector('.right-panel');
const leftHeading = leftPanel.querySelector('h1');
const rightHeading = rightPanel.querySelector('h1');
const leftContent = leftPanel.querySelector('.panel-content');
const rightContent = rightPanel.querySelector('.panel-content')
const middle = document.querySelector('.middle');

const HIDE_TEXT = "HIDE"

// Function to close all panels and reset
function closeAll() {
  toggleScroll(false);

  leftPanel.classList.remove('expanded');
  rightPanel.classList.remove('expanded');
  leftHeading.classList.remove('slide-left');
  rightHeading.classList.remove('slide-right');
  leftContent.classList.remove('visible');
  rightContent.classList.remove('visible');
  middle.classList.remove('shrink');

  rightHeading.textContent = "OTHER PROJECTS"
  leftHeading.textContent = "Music/Audio"
}

// Expand the left panel and shrink the middle
function expandLeft() {
  closeAll();
  toggleScroll(true);
  leftHeading.classList.add('slide-left');
  leftPanel.classList.add('expanded');
  middle.classList.add('shrink');

  rightHeading.textContent = HIDE_TEXT
  leftContent.classList.add('visible');
}

// Expand the right panel and shrink the middle
function expandRight() {
  closeAll();
  toggleScroll(true);
  rightHeading.classList.add('slide-right');
  rightPanel.classList.add('expanded');
  middle.classList.add('shrink');

  leftHeading.textContent = HIDE_TEXT
  rightContent.classList.add('visible');
}

function toggleScroll(toggle){
    if (toggle){
        htmlBody.classList.remove("no-scroll");
        htmlBody.classList.add("allow-scroll");
    }else {
        htmlBody.classList.remove("allow-scroll");
        htmlBody.classList.add("no-scroll");
    }
}

// Clicking "Music/Audio" (left panel)
leftPanel.addEventListener('click', () => {
  if (rightPanel.classList.contains('expanded')) {
    closeAll();
  } else if (!leftPanel.classList.contains('expanded')) {
    expandLeft();
  }
});

// Clicking "Other Projects" (right panel)
rightPanel.addEventListener('click', () => {
  if (leftPanel.classList.contains('expanded')) {
    closeAll();
  } else if (!rightPanel.classList.contains('expanded')) {
    expandRight();
  }
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    
    while (content) {
      if (content.nodeName === "DIV") {
        if (content.style.display === "block") {
          content.style.display = "none"
        } else {
          content.style.display = "block"
        }
      }
      content = content.nextElementSibling;
    }


  });
}