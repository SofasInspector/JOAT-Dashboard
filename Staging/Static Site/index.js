document.addEventListener('DOMContentLoaded', function() {
    const url = 'https://staging-joat-dashboard-web-server.onrender.com';

    // Get the checkboxs elements
    const sliderjoat = document.getElementById('slider-joat');
    const sliderjoatpath = '/ff/JOATWS'

    // Function to update checkbox state based on server response
    function updateCheckboxState(path) {
        // Fetch the state from the server
        axios.get(url + path)
            .then(response => {
                sliderjoat.checked = (response.data === 1);
            })
    }


    // Add event listener for checkbox change event
    sliderjoat.addEventListener('change', function() {
        // Perform actions based on the slider value
        axios.get(url + '/ff/JOATWS/toggle', {
            params: {
                Authorization: 'supersecretpassword',
            }
        })
    });


        // Initial update of checkbox state
        updateCheckboxState(sliderjoatpath);
});
