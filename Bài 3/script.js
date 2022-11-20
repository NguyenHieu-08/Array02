let num = prompt('Nhập số lượng');
let number = '0123456789'
let count = 0;
let a = [];

for(let i = 0; i < num; i++) {
    a[i] = prompt('Nhập chuỗi');
}

document.getElementById('str').innerHTML = a;
for(let i = 0; i < a.length; i++) {
    for(let j = 0; j < a[i].length; j++) {
        if(number.indexOf(a[i][j]) !== -1) count++
    }
}

document.getElementById('result').innerHTML = `Số ký tự là ${count}`;
