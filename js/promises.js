// asynchronous operations -> AJAX

// waitForCoffee(chargeCustomer)
// askForACoffee(waitForCoffee)

fecth("data/blog.json")
    .then(response => response.json())
    .then(posts => {
        console.log(posts.length);
        console.log(posts[0].content);
    })
    .catch();
