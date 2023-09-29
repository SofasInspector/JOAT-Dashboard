document.addEventListener('DOMContentLoaded', function() {
const url = 'https://staging-joat-dashboard-web-server.onrender.com/'
const sliderjoat = document.getElementById('sliderjoat');
console.log('js running')

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
    console.log('slider change detected')
    // Check if the slider is not disabled (unlocked)
    if (!sliderjoat.disabled) {
        // Perform actions based on the slider value
        if (sliderjoat.checked) {
            // Slider is checked (ON) - Do something
            axios.get(url + '/ff/JOATWS/toggle', {
                params: {
                    Authorization: 'supersecreatpassword'
                }
              })
        } else {
            // Slider is unchecked (OFF) - Do something else
            axios.get(url + '/ff/JOATWS/toggle', {
                params: {
                    Authorization: 'supersecreatpassword'
                }})}}})})