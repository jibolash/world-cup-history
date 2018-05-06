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

To use world-cup-history in a JavaScript file,
```js
const worldCupHistory = require('world-cup-history');
```
To get an object containing information about a world cup year, e.g 1934, 

```js
worldCupHistory.year(1978);
```

The line of code above will return the following
```shell
{
	hostCountry: 'Argentina',
	winner: 'Argentina',
	runnerUp: 'Netherlands',
	topGoalScorer: [
		{ 
		name: 'Mario Kempes', 
		country: 'Argentina', 
		numberOfGoals: 6 
		}
	],
	totalAttendance: 1545791,
	numberOfMatches: 38
}
```
The keys listed below give us data for each tournament year
- `hostCountry`
- `winner`
- `runnerUp`
- `topGoalScorer`
- `totalAttendance`
- `numberOfMatches`

The following are examples of the usage of all the keys listed above
```js
console.log(worldCupHistory.year(1934).winner); // Italy
console.log(worldCupHistory.year(1966).hostCountry); // England
console.log(worldCupHistory.year(1978).runnerUp); // Netherlands
console.log(worldCupHistory.year(1994).topGoalScorer[0].name); // Oleg Salenko
console.log(worldCupHistory.year(1990).totalAttendance); // 2516215
console.log(worldCupHistory.year(1986).numberOfMatches); // 52
```

## Additional Information

 - The `topGoalScorer` attribute returns an array. This is because there are tournaments which have  more than one top scorer.
 - The World cup is traditionally hosted by only one country. The exception is 2002 when South Korea and Japan were co-hosts. The two countries are separed by a Comma in this package. Some string manipuation (e.g [str.split([separator[, limit]])](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)) might be needed for this special case if you are interested in getting the countries as separate values.

---
I used the data in this package in an app. I thought other people might find it useful and decided to extract it into a package for others... and for myself.

[Mayowa Ajibola Sogbein](https://twitter.com/jibolash)


## License

MIT
