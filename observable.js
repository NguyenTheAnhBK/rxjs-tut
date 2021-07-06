const {Observable, Subject, BehaviorSubject} = require('rxjs-compat');

// Create Observable
const observable1 = new Observable(function subscribe(observer){
    const id = setInterval(() => {
        observer.next('Hello Rxjs');
    }, 1000);
});

const observable2 = Observable.create(function subsribe(observer){
    const id = setInterval(() => {
        observer.next('Hello Rxjs');
    }, 1000);
});

const arr = [1, 2, 3, 4];
const observable3 = Observable.from(arr);
observable3.subscribe(val => console.log(val));


// Subject
// Các Observer khác nhau subscribe cùng một Observable thì chúng tạo ra các execution khác nhau của riêng chúng
// Tiến hành share execution giữa nhiều Observers sử dụng Subject
// Như vậy Subject có thể hiểu là Multicast Observable
const foo = Observable.interval(500).take(5);
const observerBaz = {
    next: x => console.log('first next: ' + x),
    error: err => console.log('first error: ' + err),
    complete: _ => console.log('first done')
}
const observerBar = {
    next: x => console.log('second next: ' + x),
    error: err => console.log('second error: ' + err),
    complete: _ => console.log('second done')
}
foo.subscribe(observerBaz);
setTimeout(() => {
    foo.subscribe(observerBar);
}, 1500);

var subject = new Subject();
subject.subscribe({
    next: (v) => console.log('Observer A: ' + v)
});
subject.subscribe({
    next: (v) => console.log('Observer B: ' + v)
});

subject.next('hello');
subject.next('world');

