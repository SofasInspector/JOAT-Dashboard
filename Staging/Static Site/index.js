const axios = require('axios/dist/browser/axios.cjs');
const url = 'https://staging-joat-dashboard-web-server.onrender.com/'
const sliderjoat = document.getElementById('slider-joat');


//do later (sider lock)
// Event listener for the lock button
    // Disable or enable the slider based on the lock status
//    slider1.disabled = !slider1.disabled;

    // Change the appearance of the slider based on the lock status
//    if (slider1.disabled) {
        // If the slider is locked
//        slider1.nextElementSibling.style.backgroundColor = '#999'; // Change slider color
//        slider1.nextElementSibling.style.cursor = 'not-allowed'; // Change cursor style
//    } else {
        // If the slider is unlocked
//        slider1.nextElementSibling.style.backgroundColor = '#555'; // Reset slider color
//        slider1.nextElementSibling.style.cursor = 'pointer'; // Reset cursor style
//    }

// Event listener for the slider value change
sliderjoat.addEventListener('change', function() {
    // Check if the slider is not disabled (unlocked)
    if (!slider1.disabled) {
        // Perform actions based on the slider value
        if (slider1.checked) {
            // Slider is checked (ON) - Do something
            axios.get(url + '/ff/JOATWS/toggle', {
                params: {
                    Authorization: supersecreatpassword
                }
              })
        } else {
            // Slider is unchecked (OFF) - Do something else
            axios.get(url + '/ff/JOATWS/toggle', {
                params: {
                    Authorization: supersecreatpassword
                }
              })
        }
    }
});
