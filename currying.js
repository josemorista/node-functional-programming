const { curry, compose, pipe } = require("rambda");

const text = "You are just dummy man!";
const blacklist = [
	"dummy",
	"idiot"
];
const placeholder = "@$#"

const split = curry((separator, text) => text.split(separator));
const getWords = split(" ");
const join = curry((separator, text) => text.join(separator));
const getPhrase = join(" ");

const includes = (element, array) => array.includes(element);
const map = curry((func, array) => array.map(func));

const hideWords = map(word => includes(word, blacklist) ? placeholder : word)

// const censured = text.split(" ").map(el => blacklist.includes(el.toLocaleLowerCase()) ? placeholder : el).join(" ");

// const censured = getPhrase(hideWords(getWords(text)));

// const censured = compose(getPhrase, hideWords, getWords)(text);

const censured = pipe(getWords, hideWords, getPhrase)(text);

console.log(censured);