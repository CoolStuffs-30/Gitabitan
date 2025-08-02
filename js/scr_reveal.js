//   ScrollReveal().reveal('.ammenities-icon', {
//     origin: 'bottom',
//     distance: '40px',
//     duration: 800,
//     easing: 'ease-in-out',
//     interval: 100, // stagger each icon by 100ms
//     reset: false   // animate only once
//   });



//     // Reveal the section divider
//   ScrollReveal().reveal('.section-divider', {
//     origin: 'bottom',
//     distance: '30px',
//     duration: 800,
//     easing: 'ease-in-out',
//     interval: 100,
//     opacity: 0,
//   });

//   // Reveal the text content from left
//   ScrollReveal().reveal('.aboutContent', {
//     origin: 'left',
//     distance: '50px',
//     duration: 1000,
//     easing: 'ease-in-out',
//     opacity: 0,
//   });

//   // Reveal the swiper images from right
//   ScrollReveal().reveal('.aboutImage', {
//     origin: 'right',
//     distance: '50px',
//     duration: 1000,
//     easing: 'ease-in-out',
//     opacity: 0,
//   });











//   // Initialize ScrollReveal
// const sr = ScrollReveal({
//   origin: 'top',
//   distance: '50px',
//   duration: 1000,
//   easing: 'ease-in-out',
//   opacity: 0,
//   reset: false  // Important: do not re-run on scroll
// });

// // Reveal the tabs container only once
// sr.reveal('.floorContainer');

// // (Optional) If you want to reveal the `.content` container once too:
// sr.reveal('.content');











//   // Left column slides in from left
//   ScrollReveal().reveal('.nHood-col:first-child .nHood-row', {
//     origin: 'left',
//     distance: '40px',
//     duration: 800,
//     interval: 150,
//     opacity: 0,
//     easing: 'ease-in-out'
//   });

//   // Right column slides in from right
//   ScrollReveal().reveal('.nHood-col:nth-child(2) .nHood-row', {
//     origin: 'right',
//     distance: '40px',
//     duration: 800,
//     interval: 150,
//     opacity: 0,
//     easing: 'ease-in-out'
//   });








//   ScrollReveal().reveal('.contact', {
//     origin: 'bottom',
//     distance: '50px',
//     duration: 1000,
//     easing: 'ease-in-out',
//     opacity: 0
//   });


  

//   ScrollReveal().reveal('.col-1', {
//   origin: 'left',
//   distance: '50px',
//   duration: 800,
//   delay: 100
// });

// ScrollReveal().reveal('.col-2', {
//   origin: 'bottom',
//   distance: '50px',
//   duration: 800,
//   delay: 300
// });

// ScrollReveal().reveal('.col-3', {
//   origin: 'right',
//   distance: '50px',
//   duration: 800,
//   delay: 500
// });



  // ✅ Create ONE instance only
  
  
  const sr = ScrollReveal({
    distance: '50px',
    duration: 800,
    easing: 'ease-in-out',
    opacity: 0,
    reset: false
  });

  // ✅ Reveal ammenities icons
  sr.reveal('.ammenities-icon', {
    origin: 'bottom',
    distance: '40px',
    interval: 100
  });

  // ✅ Reveal section dividers
  sr.reveal('.section-divider', {
    origin: 'bottom',
    distance: '30px',
    interval: 100
  });

  // ✅ Reveal about content & image with different directions
  sr.reveal('.aboutContent', { origin: 'left', duration: 1000 });
  sr.reveal('.aboutImage', { origin: 'right', duration: 1000 });

  // ✅ Reveal tabs & content
  sr.reveal('.floorContainer', { origin: 'top' });
  sr.reveal('.content', { origin: 'top' });

  // ✅ Neighbourhood columns
  sr.reveal('.nHood-col:first-child .nHood-row', {
    origin: 'left',
    distance: '40px',
    interval: 150
  });

  sr.reveal('.nHood-col:nth-child(2) .nHood-row', {
    origin: 'right',
    distance: '40px',
    interval: 150
  });

  // ✅ Contact section
  sr.reveal('.contact', { origin: 'bottom', duration: 1000 });

  // ✅ Columns with delays
  sr.reveal('.col-1', { origin: 'left', delay: 100 });
  sr.reveal('.col-2', { origin: 'bottom', delay: 300 });
  sr.reveal('.col-3', { origin: 'right', delay: 500 });

  // ✅ Add your FAQ too!
  sr.reveal('.faq-item', { origin: 'left', interval: 200 });




    ScrollReveal({
    reset: false,
    distance: '50px',
    duration: 800,
    easing: 'ease-in-out',
    origin: 'bottom'
  });
    
  // Gallery reveal
  ScrollReveal().reveal('.masonry-item', { interval: 100 });

  // FAQ reveal — slides from left
  ScrollReveal().reveal('.faq-item', {
    interval: 200,
    origin: 'bottom'
  });
