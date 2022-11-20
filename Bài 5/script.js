let str1 = prompt('Nhập chuỗi 1: ');
let str2 = prompt('Nhập chuỗi 2: ');
let result = false;

document.getElementById('str1').innerHTML = str1;
document.getElementById('str2').innerHTML = str2;

for(let i = 0; i < str1.length; i++) {
    for(let j = 0; j < str2.length; j++) {
        if(str1[i]===str2[j]){
            document.getElementById('result').innerHTML = '2 chuỗi giống nhau';
        }
        else document.getElementById('result').innerHTML = '2 chuỗi khác nhau';
    }
}

