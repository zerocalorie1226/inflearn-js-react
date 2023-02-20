function taskA(a, b, cb) {
  setTimeout(() => {
    const res = a + b;
    cb(res);
  }, 3000);
}
function taskB(a, cb) {
  setTimeout(() => {
    const res = a * 2;
    cb(res);
  }, 1000);
}

taskA(3, 4, (res) => {
  console.log(res);
});

taskB(7, (res) => {
  console.log(res);
});
console.log("코드 끝");
