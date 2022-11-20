let str = prompt('Nhập chuỗi: ');
let count = 0;

document.getElementById('str').innerHTML = str;
for(let i = 0; i < str.length; i++) {
    count = count + 1
}

document.getElementById('result').innerHTML = `Số ký tự là ${count}`;
