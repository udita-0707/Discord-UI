document.addEventListener('DOMContentLoaded', function () {
    const micToggle = document.getElementById('micToggle');
    const headphoneToggle = document.getElementById('headphoneToggle');
    const settingsToggle = document.getElementById('settingsToggle');

    micToggle.addEventListener('click', function () {
        micToggle.classList.toggle('active'); // Toggles the active class to change state
        if (micToggle.classList.contains('active')) {
            console.log('Mic turned on');
        } else {
            console.log('Mic turned off');
        }
    });

    headphoneToggle.addEventListener('click', function () {
        headphoneToggle.classList.toggle('active');
        if (headphoneToggle.classList.contains('active')) {
            console.log('Headphones connected');
        } else {
            console.log('Headphones disconnected');
        }
    });

    settingsToggle.addEventListener('click', function () {
        console.log('Opening settings...');
        // Here you could trigger a settings modal or some other settings functionality
    });
});
