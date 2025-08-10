    const fabMain = document.querySelector('.fab-main');
    const fabOptions = document.querySelector('.fab-options');

    fabMain.addEventListener('click', () => {
      fabMain.classList.toggle('active');
      fabOptions.classList.toggle('show');
    });

    document.getElementById('callus').addEventListener('click', () => {
      window.location.href = 'tel:+918240704900'; // Replace with your phone number
    });

    document.getElementById('callback').addEventListener('click', () => {
      window.location.href = '#form'; // Replace with actual page URL when ready
    });

    document.fonts.ready.then(() => {
      const callIcon = document.querySelector('.material-symbols-outlined.fab-icon');
      if (callIcon) callIcon.classList.add('font-loaded');
    });