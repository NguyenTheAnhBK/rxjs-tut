const {Observable, BehaviorSubject} = require('rxjs-compat');

// Behavior Subject
// Behavior Subject lữu trữ giá trị emit gần nhất để khi có một Observer mới subscribe vào, nó sẽ 
// emit ngay lập tức giá trị đó cho Observer đó
var subject = new BehaviorSubject(0);
subject.subscribe({
    next: (v) => console.log('Observer A: ' + v)
});
subject.next(1);
subject.next(2);

subject.subscribe({
    next: (v) => console.log('Observer B: ' + v)
});
subject.next(3);