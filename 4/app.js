console.log("1: start");

setTimeout(() => console.log("7: timeout-outer"), 0);

queueMicrotask(() => console.log("3: qMicrotask-early"));

Promise.resolve().then(() => {
  console.log("4: promise-then-outer");
  setTimeout(() => console.log("8: timeout-inner"), 0);
  Promise.resolve().then(() => console.log("6: promise-then-inner"));
});

(async function run() {
  console.log("2: async-start");
  await Promise.resolve();
  console.log("5: after-await");
  queueMicrotask(() => console.log("6.5: qMicrotask-late"));
})();

console.log("end-sync");
