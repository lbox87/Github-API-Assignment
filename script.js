'use strict';

function submitForm() {
    $('form').submit(event => {
        event.preventDefault();
        const searchTerm = $('#js-search-term').val();
        const endpoint = "https://api.github.com/users/" + searchTerm + "/repos";

        fetch(endpoint)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error(response.message);
            })
            .then(responseJson => displayResults(responseJson))
            .catch(err => {
                if (err.message == "") {
                    $('#js-error-message').text(`Something went wrong: user not found`);
                }
                else {
                    $('#js-error-message').text(`Something went wrong: ${err.message}`);
                }
            });
    })
}

function displayResults(responseJson) {
    console.log(responseJson);
    $('#results-list').empty();
    for (let i = 0; i < responseJson.length; i++) {
        $('#results-list').append(
            `<li><h3>${responseJson[i].name}</h3></li>
      <p><a href="${responseJson[i].url}">${responseJson[i].url}</a>
      </p>`
        )
    };
    $('#results').removeClass('hidden');
};

$(submitForm);