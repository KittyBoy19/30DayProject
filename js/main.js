// Ryan Raishart
// kittyboy19
// rjraishart@gmail.com

$(document).ready(function () {

    const getURL = (word) => `https://pokeapi.co/api/v2/pokemon/${word}/`

    const getJSON = (url) => {
        console.log(url);
        const xhReq = new XMLHttpRequest(); // new request
        xhReq.open("GET", url, false);
        xhReq.send(null);
        const jsonObject = JSON.parse(xhReq.responseText); // store response
        return jsonObject;
    }

    const getHTML = (jsonObject) => {

        let html = `${jsonObject['forms'][0]['name'].toUpperCase()} <br>`;
        for (const property in jsonObject['abilities']) {
            html = html.concat(`${JSON.stringify(jsonObject['abilities'][property]['ability']['name'])} + `)
            html = html.substring(0, html.length - 2);
        }
        return html;
    }

    const injectDOM = (html) => $("#results").html(html)

    $("#search").on("click", function () {
        const keyword = $("#searchBar").val().toLowerCase(); // get user search term
        console.log(keyword);
        const url = getURL(keyword); // combine search term with base URL
        var jsonData = getJSON(url); // convert response to JSON
        const html = getHTML(jsonData); // convert json to html
        injectDOM(html); // display data
    });
});