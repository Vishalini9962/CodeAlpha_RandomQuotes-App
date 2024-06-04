var quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Stay hungry, stay foolish. - Steve Jobs",
    "Don't cry because it's over, smile because it happened. - Dr. Seuss",
    "Be yourself; everyone else is already taken. - Oscar Wilde",
    "You only live once, but if you do it right, once is enough. - Mae West",
    "Be the change that you wish to see in the world. - Mahatma Gandhi",
    "The only thing necessary for the triumph of evil is for good men to do nothing. - Edmund Burke",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston S. Churchill",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt"
];

function getRandomQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    var quoteElement = document.getElementById('quoteText');
    quoteElement.textContent = quotes[randomNumber];
}
