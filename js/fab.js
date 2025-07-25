    const fabMain = document.querySelector('.fab-main');
    const fabOptions = document.querySelector('.fab-options');

    fabMain.addEventListener('click', () => {
      fabMain.classList.toggle('active');
      fabOptions.classList.toggle('show');
    });

    document.getElementById('callback').addEventListener('click', () => {
      window.location.href = 'tel:+911234567890'; // Replace with your phone number
    });

    document.getElementById('callus').addEventListener('click', () => {
      window.location.href = '#'; // Replace with actual page URL when ready
    });