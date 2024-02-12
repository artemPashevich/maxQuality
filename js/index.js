// document.addEventListener('DOMContentLoaded', () => {
//     const button = document.getElementById('toggleButton');
//     const gallery = document.getElementById('gallery');
//     let isGalleryOpen = false; // Initial state of the gallery

//     button.addEventListener('click', function() {
//         const hiddenPhotos = Array.from(gallery.querySelectorAll('.hidden'));
//         hiddenPhotos.forEach(photo => {
//             if (!isGalleryOpen) {
//                 // If the gallery is not open, we open it
//                 photo.style.height = '360px';
//                 photo.style.transform = 'scaleY(1)';
//             } else {
//                 // If the gallery is open, we close it
//                 photo.style.transform = 'scaleY(0)';
//                 // Wait for animation to finish before setting height to 0
//                 setTimeout(() => {
//                     photo.style.height = '0';
//                 }, 500);
//             }
//         });

//         // Toggle the gallery state
//         isGalleryOpen = !isGalleryOpen;

//         // Change the button text based on the state
//         if (isGalleryOpen) {
//             button.textContent = 'View Less';
//         } else {
//             button.textContent = 'View More';
//         }
//     });
// });


// // video start 

// document.addEventListener("DOMContentLoaded", function() {
//     var video = document.getElementById('myVideo');
//     video.muted = true;
//     var options = {
//       root: null, // отслеживаем видимость относительно вьюпорта
//       rootMargin: '0px',
//       threshold: 0.5 // видео начнет воспроизводиться, когда 50% элемента видно
//     };
  
//     var observer = new IntersectionObserver(function(entries, observer) {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           video.play();
//         } else {
//           video.pause();
//         }
//       });
//     }, options);
  
//     observer.observe(video);
//   });
  
// video end 


function toggleDropdown() {
    var dropdownMenu = document.getElementById("dropdown-menu");
    var dropdownToggle = document.querySelector('.dropdown-toggle');
  
    if (dropdownMenu.style.display === "block") {
      dropdownMenu.style.display = "none";
      dropdownToggle.classList.remove('active');
    } else {
      dropdownMenu.style.display = "block";
      dropdownToggle.classList.add('active');
    }
  }
  
  document.querySelectorAll('.custom-checkbox input[type="checkbox"]').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
        checkbox.parentElement.classList.add('checked');
      } else {
        checkbox.parentElement.classList.remove('checked');
      }
    });
  });
  
  var checkboxes = document.querySelectorAll('.dropdown-menu input[type="checkbox"]');
  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      updateDropdownLabel();
    });
  });
  
  function updateDropdownLabel() {
    var selected = [];
    checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        selected.push(checkbox.value);
      }
    });
  
    var dropdownToggle = document.querySelector('.dropdown-toggle');
    if (selected.length > 0) {
      dropdownToggle.value = selected.join(', ');
    } else {
      dropdownToggle.value = 'Type of construction works';
    }
  }
  
  