const {Observable} = require('rxjs-compat');


// Tạo Observable từ một static value
// Các static value chúng được gửi đi sync nếu không có tác động của scheduler
const foo1 = Observable.of(100);
foo1.subscribe(x => console.log(x));
const foo2 = Observable.of(100, 200, 300, 400);
foo2.subscribe(x => console.log(x));

// Repeat: repeat khi nào Observable hoàn thành
const arr = [100, 200, 300];
const observable = Observable.from(arr).repeat(2);
observable.subscribe(x => console.log(x));