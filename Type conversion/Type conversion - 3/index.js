

// console.log(String(console.log), Number(console.log), Boolean(console.log));
// console.log(String({ name: 'Maxim' }), Number({ name: 'Maxim' }), Boolean({ name: 'Maxim' }));
console.log(String(Symbol('key')), Boolean(Symbol('key')));
// console.log(String(Number), Number(Number), Boolean(Number));
// console.log(String(''), Number(''), Boolean(''));
// console.log(String(0), Number(0), Boolean(0));
// console.log(String(-10), Number(-10), Boolean(-10));
// console.log(String('-105'), Number('-105'), Boolean('-105'));


//Symbol('key') - можно привести к строке и к булевому значению , приведение к числу выдаст ошибку

let arrey = [console.log, { name: 'Maxim' }, Number, '', 0, -10, '-105']

function log(i) {
    console.log(String(arrey[i]), Number(arrey[i]), Boolean(arrey[i]));
}
for (let i = 0; i < arrey.length; i++) {
    log(i)
}
