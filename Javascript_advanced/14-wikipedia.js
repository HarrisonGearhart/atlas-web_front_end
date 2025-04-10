// Function to create a paragraph element and append it to the document body
function createElement(data) {
    const paragraph = document.createElement('p');  // Create a <p> element
    paragraph.textContent = data;  // Set the content of the paragraph to the passed data
    document.body.appendChild(paragraph);  // Append the paragraph to the document body
}

// Function to query Wikipedia's API and execute the callback with the extracted data
function queryWikipedia(callback) {
    const xhr = new XMLHttpRequest();  // Create a new XMLHttpRequest object
    const url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';
    
    xhr.open('GET', url, true);  // Open a GET request to the Wikipedia API URL

    // Set up the function to be called when the request completes
    xhr.onload = function() {
        if (xhr.status === 200) {  // If the request was successful
            const response = JSON.parse(xhr.responseText);  // Parse the JSON response
            const extract = response.query.pages[Object.keys(response.query.pages)[0]].extract;  // Extract the introduction text
            callback(extract);  // Call the callback function with the extract data
        } else {
            console.error('Error fetching data from Wikipedia');
        }
    };

    xhr.onerror = function() {
        console.error('Network error occurred');
    };

    xhr.send();  // Send the request
}

// Call queryWikipedia with createElement as the callback
queryWikipedia(createElement);
