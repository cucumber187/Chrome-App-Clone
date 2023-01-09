const quotes = [
    {
        quote: "Nothing in more despicable than respect based on fear.",
        author: "Albert camus",
    },
    {
        quote: "When you have faults, do not fear to abandon them. ",
        author: "Confucius",
    },
    {
        quote: "Age is no guarantee of maturity.",
        author: "Lawana Blackwell",
    },
    {
        quote: "DThe greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
    },
    {
        quote: "The goal of life is living in agreement with nature.",
        author: "Zeno",
    },
    {
        quote: "All you need in this life is ignorance and confidence, then success is sure. ",
        author: "Mark Twain",
    },
    {
        quote: "Life is from the inside out. When you shift on the inside, life shifts on the outside. ",
        author: "Kamal Ravikant",
    },
    {
        quote: "Life can only be understood backwards; but it must be lived forwards.",
        author: "Søren Kierkegaard",
    },
    {
        quote: "DDespite the forecast, live like it’s spring.",
        author: "Lilly Pulitzer",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomNumber = Math.floor(Math.random() * quotes.length);
const todaysQuote = quotes[randomNumber]

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;