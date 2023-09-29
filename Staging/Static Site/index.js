document.addEventListener('DOMContentLoaded', function() {
    const url = 'https://staging-joat-dashboard-web-server.onrender.com';

    // Get the checkbox elements and their corresponding variable names
    const checkboxes = {
        'sliderjoat': '/ff/JOATWS',
    };

    // Function to update checkbox state based on server response
    function updateCheckboxState(checkboxElement, apiUrl) {
        axios.get(url + apiUrl)
            .then(response => {
                checkboxElement.checked = (parseInt(response.data, 10) === 1);
            })
    }

    // Function to handle checkbox change event
    function handleCheckboxChange(checkboxElement, apiUrl) {
        checkboxElement.addEventListener('change', function() {
            axios.get(url + apiUrl + '/toggle', {
                params: {
                    Authorization: 'supersecretpassword',
                }
            })
        });
    }

    for (const checkboxName in checkboxes) {
        if (checkboxes.hasOwnProperty(checkboxName)) {
            const apiUrl = checkboxes[checkboxName];
            const checkboxElement = document.getElementById(checkboxName);
            updateCheckboxState(checkboxElement, apiUrl);
            handleCheckboxChange(checkboxElement, apiUrl);
        }
    }
});
