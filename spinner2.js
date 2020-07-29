const  spinner = ['|', '/', '-', '|', '-', '\\', '|'];
let ms = 150;
for (let x in spinner) {
  setTimeout(() => {
    process.stdout.write('\r' + spinner[x]);
  }, ms);
  ms += 100;
}
