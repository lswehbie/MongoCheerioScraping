$(document).ready(() => {

    $(".scrape-button").click(() => {

        console.log("clicked");

        $.get("/scrape", data => {
            console.log(data);

        })
    })
})