const fs = require('fs');

let i = 0;
fs.readdirSync('./img').forEach(file => {
    let arr = file.split('-');
    arr[arr.length - 1] = arr[arr.length - 1].split('.')[0];
    ++i;
    let str = "new Auto(\n";
    str += i + ",\n";
    str += "\"" + arr[0] + "\",\n";
    str += "\"" + arr[1] + "\",\n";
    str += "CategoriaAuto." + arr[2].charAt(0).toUpperCase() + arr[2].slice(1) + ",\n";
    str += arr[3] + ",\n";
    str += "\"" + 'src/assets/img/'+  file + "\",\n";
    console.log(str + "),");
});