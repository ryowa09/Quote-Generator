const quoteResult = document.getElementById("result");
const quoteText = document.getElementById("quote");


let data = [];  

async function fetchQuote() {
    try {
        const response = await fetch("https://raw.githubusercontent.com/JamesFT/Database-Quotes-JSON/master/quotes.json");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        data = await response.json();
        getQuote();
    }
    catch (error) {
        console.error(error);
    }
}

function getQuote() {
    const randomIndex = Math.floor(Math.random() * data.length);
    const quote = data[randomIndex];

    quoteText.textContent = `"${quote.quoteText}"`;
    quoteResult.textContent = quote.quoteAuthor ? quote.quoteAuthor : "Unknown";
}

fetchQuote();