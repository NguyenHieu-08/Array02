let arr = ['c','s','c','2','6','1'];

for(let i = 0; i < arr.length/2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - i -1];
    arr[arr.length - i -1] = temp;
}

document.getElementById('result').innerHTML = arr.join('');
