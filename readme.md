<h1 align="center">
	<br>
	<br>
    world-cup-history
	<br>
	<br>
	<br>
</h1>

world-cup-history is an npm package for FIFA World cup historical data.
It contains information about the host country, winner, runner up, top goal scorer(s), attendance and number of matches
played in every FIFA world cup tournament since 1930 when the first tournament held


## Install

```console
$ npm install world-cup-history
```


## Usage

To use world-cup-history in a JavaScript file,
```js
const worldCupHistory = require('world-cup-history');
```
To get an object containing information about a world cup year, e.g 1978, 

```js
worldCupHistory.year(1978);
```

The line of code above will return the following object
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
The keys listed below give us information for the selected tournament year
- `hostCountry`
- `winner`
- `runnerUp`
- `topGoalScorer`
- `totalAttendance`
- `numberOfMatches`

The following are examples of the usage of all the keys listed above
```js
worldCupHistory.year(1934).winner; // Who won the world cup in the 1934? 
worldCupHistory.year(1966).hostCountry; // Which country hosted the world cup in 1966?
worldCupHistory.year(1978).runnerUp; // Which country was the runner up in 1978?
worldCupHistory.year(1994).topGoalScorer[0].name; // Who was the highest goal scorer at the 1994 world cup?
worldCupHistory.year(1990).totalAttendance; // What was the total attendance for the world cup in 1990?
worldCupHistory.year(1986).numberOfMatches; // How many matches were played at the 1986 world cup?
```

## Additional Information

 - The `topGoalScorer` attribute returns an array. This is because there are tournaments which have  more than one top scorer.
 - The World cup is traditionally hosted by only one country. The exception is 2002 when South Korea and Japan were co-hosts. The two countries are separed by a Comma in this package. Some string manipuation (e.g [str.split([separator[, limit]])](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)) might be needed for this special case if you are interested in getting the countries as separate values.

---
I used the data in this package in an app. I thought other people might find it useful and decided to extract it into a package for others... and for myself.

[Mayowa Ajibola Sogbein](https://twitter.com/jibolash)


## License

MIT
