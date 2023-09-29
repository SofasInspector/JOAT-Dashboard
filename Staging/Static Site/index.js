document.addEventListener('DOMContentLoaded', function() {
    const url = 'https://staging-joat-dashboard-web-server.onrender.com';

    // Get the checkbox elements and their corresponding variable names
    const checkboxes = {
        'sliderjoat': '/ff/JOATWS',
        'slidertemp': '/ff/template',
    };

    // Function to update checkbox state based on server response
    async function updateCheckboxState(checkboxElement, apiUrl) {
        try {
            const response = await axios.get(url + apiUrl);
            if (parseInt(response.data, 10) == 1) {
                checkboxElement.checked = true;
            } else {
                checkboxElement.checked = false;
            }
        } catch (error) {
            console.error(error);
        }
    }

    // Function to handle checkbox change event
    function handleCheckboxChange(checkboxElement, apiUrl) {
        checkboxElement.addEventListener('change', async function() {
            try {
                await axios.get(url + apiUrl + '/toggle', {
                    params: {
                        Authorization: 'supersecretpassword',
                    }
                });
            } catch (error) {
                console.error(error);
            }
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

    const updateButton = document.getElementById('updateButton');
    updateButton.addEventListener('click', async function() {
        for (const checkboxName in checkboxes) {
            if (checkboxes.hasOwnProperty(checkboxName)) {
                const apiUrl = checkboxes[checkboxName];
                const checkboxElement = document.getElementById(checkboxName);
                await updateCheckboxState(checkboxElement, apiUrl);
            }
        }
    })
})
