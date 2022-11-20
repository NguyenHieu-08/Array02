let str = prompt('Nhập chuỗi: ');

document.getElementById('str').innerHTML = str;

let arr = str.split('');
for(let i = 0; i < arr.length; i++) {
    if(arr[i] === '-') {
        arr.splice(i,1,'_');
    }
}
document.getElementById('result').innerHTML = arr.join('');


