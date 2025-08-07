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
  sr.reveal('.aboutContent', { origin: 'bottom', duration: 1000 });
  sr.reveal('.aboutImage', { origin: 'bottom', duration: 1000 });

  // ✅ Reveal tabs & content
  sr.reveal('.floorContainer', { origin: 'bottom' });
  sr.reveal('.content', { origin: 'bottom' });

  // ✅ Neighbourhood columns
  sr.reveal('.nHood-col:first-child .nHood-row', {
    origin: 'bottom',
    distance: '40px',
    interval: 150
  });

  sr.reveal('.nHood-col:nth-child(2) .nHood-row', {
    origin: 'bottom',
    distance: '40px',
    interval: 150
  });

  // ✅ Contact section
  sr.reveal('.contact', { origin: 'bottom', duration: 1000 });

  // ✅ Columns with delays
  sr.reveal('.col-1', { origin: 'bottom', delay: 100 });
  sr.reveal('.col-2', { origin: 'bottom', delay: 300 });
  sr.reveal('.col-3', { origin: 'bottom', delay: 500 });

  // ✅ Add your FAQ too!
  sr.reveal('.faq-item', { origin: 'bottom', interval: 200 });




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
