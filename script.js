document.addEventListener("DOMContentLoaded", function () {
    
    var apiUrl = 'https://api.github.com/users/manishkumar12i/repos';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Iterate through the repositories and extract titles
            var titles = data.map(repo => repo.name);

            // Update the titles in all boxes with class "box"
            var boxHeadings = document.querySelectorAll('.box h1');

            titles.forEach((title, index) => {
                if (boxHeadings[index]) {
                    boxHeadings[index].textContent = title;
                }
            });
        });
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Iterate through the repositories and extract titles
            var desc = data.map(repo => repo.description);

            // Update the titles in all boxes with class "box"
            var descheadings = document.querySelectorAll('.box p');

            desc.forEach((desc, index) => {
                if (descheadings[index]) {
                    descheadings[index].textContent = desc;
                }
            });
        });



    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Iterate through the repositories and extract titles
            var private = data.map(repo => repo.private);

            // Update the titles in all boxes with class "box"
            var privateheadings = document.querySelectorAll('.box h3');

            private.forEach((status, index) => {
                if (privateheadings[index]) {
                    privateheadings[index].textContent = `Is Private/Public: ${status ? "Private" : "Public"}`;
                }
            });
        });

        
});




