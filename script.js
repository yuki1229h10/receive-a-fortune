let kujis = ['大吉','吉','中吉','小吉','末吉','凶','凶吉'];

let kuji = Math.floor(Math.random() * kujis.length);
console.log(kuji);
document.write('    <p>あなたの今年の運勢は、' +　kujis[kuji] +　'です。</p> ');

if (kuji === 0) {
    alert('運がいいなアンタ！');
}