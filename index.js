const axios = require("axios"); //To do http  request 
const cheerio = require("cheerio");  //To interact with site elements

async function getData(url) {
    try {
        let datos = await axios.get(url);
        return datos.data;
    } catch (err) {
        console.log(err);
    }
}

let site = "http://quotes.toscrape.com/";

(async function () {
    let doc = await getData(site);
    const $ = cheerio.load(doc); //Loading the html document
    //console.log($(".quote").text());
    let quotes = $(".quote"); // ("selector") . dot for class names --- quotes is a object
    quotes.each(function (num, elemt) {
        console.log($(elemt).children(".text").text(), num);
        console.log($(elemt).children().eq(1).children(".author").text(), num); //.eq(n) return the children number n
    });
})();

/*
We can scrap with another method with the "path" in html file ---> XPath

$x("/html/body/div/div[2]/div[1]/*")
$x("/html/body/div/div[2]/div[1]/* /span[1]")

let q = $x("/html/body/div/div[2]/div[1]/* /span[1]")
console.log(q)
q.forEach(function(e){console.log(e.textContent)})

*/