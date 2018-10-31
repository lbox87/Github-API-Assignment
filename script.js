'use strict';

// "https://api.github.com/users/lbox87/repos"

function submitForm() {
    $('form').submit(event => {
        event.preventDefault();
        let searchTerm = $('#js-search-term').val();
        console.log(`current search term is ${searchTerm}`);
        let endpoint = "https://api.github.com/users/" + searchTerm + "/repos";
        console.log(`current endpoint is ${endpoint}`);
    });
}

$(submitForm);