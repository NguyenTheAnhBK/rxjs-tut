const {Observable} = require('rxjs-compat');

// Map
const source = Observable.from([1, 2, 3, 4, 5]);
const example = source.map(v => v + 10);
const subscribe = example.subscribe(x => console.log(x));

// Scan
// accumulator
const source2 = Observable.from([1, 2, 3, 4, 5]).scan((acc, value, index) => acc + value, 0);
const subscribe2 = source2.subscribe(v => console.log(v));