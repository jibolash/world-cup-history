<h1 align="center">
	<br>
	<br>
    world-cup-history
	<br>
	<br>
	<br>
</h1>



## Install

```console
$ npm install world-cup-history
```


## Usage

```js
const worldCupHistory = require('world-cup-history');

console.log(worldCupHistory["1934"].winner); // Italy
console.log(worldCupHistory["1966"].hostCountry); // England
console.log(worldCupHistory["1978"].runnerUp); // Netherlands
console.log(worldCupHistory["1994"].topGoalScorer[0].name); // Oleg Salenko
console.log(worldCupHistory["1990"].totalAttendance); // 2516215
console.log(worldCupHistory["1986"].numberOfMatches); // 52
```

## Additional Information

 - The `topGoalScorer` attribute returns an array. This is because there are tournaments which have  more than one top scorer.
 - The World cup is traditionally hosted by only one country. The exception is 2002 when South Korea and Japan were co-hosts. The two countries are separed by a Comma in this package. Some string manipuation (e.g [str.split([separator[, limit]])](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)) might be needed for this special case if you are interested in getting the countries as separate values.

---
I'm using the data in this package in an app. I thought other people might find it useful and decided to extract it into a package for others... and for myself.

[Mayowa Ajibola Sogbein](https://twitter.com/jibolash)


## License

MIT
