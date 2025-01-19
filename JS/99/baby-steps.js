
const args = process.argv.slice(2);


const sum = args.map(Number).reduce((total, num) => total + num, 0);

console.log(sum);

