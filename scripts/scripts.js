// Last edited by: Julia Caro
// Last edited on: June 4, 2024

// Some data we can work with

const inventors = [
	{ first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
	{ first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
	{ first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
	{ first: "Marie", last: "Curie", year: 1867, passed: 1934 },
	{ first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
	{ first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
	{ first: "Max", last: "Planck", year: 1858, passed: 1947 },
	{ first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
	{ first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
	{ first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
	{ first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
	{ first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
	"Bernhard, Sandra",
	"Bethea, Erin",
	"Becker, Carl",
	"Bentsen, Lloyd",
	"Beckett, Samuel",
	"Blake, William",
	"Berger, Ric",
	"Beddoes, Mick",
	"Beethoven, Ludwig",
	"Belloc, Hilaire",
	"Begin, Menachem",
	"Bellow, Saul",
	"Benchley, Robert",
	"Blair, Robert",
	"Benenson, Peter",
	"Benjamin, Walter",
	"Berlin, Irving",
	"Benn, Tony",
	"Benson, Leana",
	"Bent, Silas",
	"Berle, Milton",
	"Berry, Halle",
	"Biko, Steve",
	"Beck, Glenn",
	"Bergman, Ingmar",
	"Black, Elk",
	"Berio, Luciano",
	"Berne, Eric",
	"Berra, Yogi",
	"Berry, Wendell",
	"Bevan, Aneurin",
	"Ben-Gurion, David",
	"Bevel, Ken",
	"Biden, Joseph",
	"Bennington, Chester",
	"Bierce, Ambrose",
	"Billings, Josh",
	"Birrell, Augustine",
	"Blair, Tony",
	"Beecher, Henry",
	"Biondo, Frank",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
// filtering the inventors' birth years that are greater than or equal to the year 1500 AND less than or equal to the year 1599
const fifteenHundreds = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year <= 1599));

// console the table of fifteenHundreds
console.table(fifteenHundreds);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
// returning the template strings of the inventors' first and last names
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);

// console log fullNames
console.log(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birth date, oldest to youngest
// if the first inventor's birth date is greater than the next inventor's birth date, add 1. Else, subtract 1.
const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);

// console the table of ordered
console.table(ordered);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const totalYears = inventors.reduce((total, inventor) => {
	// return the total plus (the inventor's birth year subtracted from their death year)
	return total + (inventor.passed - inventor.year);
}, 0); // the zero starts the total count from zero

// console log the totalYears
console.log(totalYears);

// 5. Sort the inventors by years lived
const oldestInventor = inventors.sort(function (a, b) {
	// subtracting the birth year from the death year of the last inventor
	const lastInventor = a.passed - a.year;
	// subtracting the birth year from the death year of the next inventor
	const nextInventor = b.passed - b.year;

	// return 'if the lastInventor is greater than nextInventor' is true, then subtract 1. Else, add 1.
	return lastInventor > nextInventor ? -1 : 1;
});

// console the table of oldestInventor
console.table(oldestInventor);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// this next code should only be commented *in* if used on the above link!

// // selecting all of the elements that have a link on that wikipedia page
// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));

// // filtering out all the links that don't have 'de' as part of their link name
// const de = links
// 	.map(link => link.textContent) // textContent is the link name
// 	.filter(streetName => streetName.includes('de')); // filtering out only the links that include 'de' as part of their street name

// 7. sort Exercise
// Sort the people alphabetically by last name
const sortedNames = people.sort((lastPerson, nextPerson) => {
	const [aLastName, aFirstName] = lastPerson.split(", "); // taking the first person's last and first name, and splitting it by the comma and space
	const [bLastName, bFirstName] = nextPerson.split(", "); // taking the next person's last and first name, and splitting it by the comma and space

	return aLastName > bLastName ? 1 : -1; // return 'if the first person's last name is greater than the next person's last name' is true, return -1. Else, return 1.
});

// console log the sorted names
console.log(sortedNames);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
	"car",
	"car",
	"truck",
	"truck",
	"bike",
	"walk",
	"car",
	"van",
	"bike",
	"walk",
	"car",
	"van",
	"car",
	"truck",
];

const transportation = data.reduce(function (obj, item) {
	if (!obj[item]) { // if the object has no items...
		obj[item] = 0; // ... then set the number to 0
	}
	obj[item]++; // increment the amount of items per object
	return obj; // return the number of objects
}, {}); // empty object

// console log transportation
console.log(transportation);