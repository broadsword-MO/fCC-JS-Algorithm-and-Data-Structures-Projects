/* 1st successful, basic solution, passed May 25, 2022, didn't submit */
function convertToRoman(num) {
    let str = num.toString();
    console.log(str);
    let romanArr = [];
    // Ones place
    if (str[str.length - 1] == 1) romanArr.unshift("i");
    if (str[str.length - 1] == 2) romanArr.unshift("ii");
    if (str[str.length - 1] == 3) romanArr.unshift("iii");
    if (str[str.length - 1] == 4) romanArr.unshift("iv");
    if (str[str.length - 1] == 5) romanArr.unshift("v");
    if (str[str.length - 1] == 6) romanArr.unshift("vi");
    if (str[str.length - 1] == 7) romanArr.unshift("vii");
    if (str[str.length - 1] == 8) romanArr.unshift("viii");
    if (str[str.length - 1] == 9) romanArr.unshift("ix");
    // Tens place
    if (str[str.length - 2] == 1) romanArr.unshift("x");
    if (str[str.length - 2] == 2) romanArr.unshift("xx");
    if (str[str.length - 2] == 3) romanArr.unshift("xxx");
    if (str[str.length - 2] == 4) romanArr.unshift("xl");
    if (str[str.length - 2] == 5) romanArr.unshift("l");
    if (str[str.length - 2] == 6) romanArr.unshift("lx");
    if (str[str.length - 2] == 7) romanArr.unshift("lxx");
    if (str[str.length - 2] == 8) romanArr.unshift("lxxx");
    if (str[str.length - 2] == 9) romanArr.unshift("xc");
    // Hundreds place
    if (str[str.length - 3] == 1) romanArr.unshift("c");
    if (str[str.length - 3] == 2) romanArr.unshift("cc");
    if (str[str.length - 3] == 3) romanArr.unshift("ccc");
    if (str[str.length - 3] == 4) romanArr.unshift("cd");
    if (str[str.length - 3] == 5) romanArr.unshift("d");
    if (str[str.length - 3] == 6) romanArr.unshift("dc");
    if (str[str.length - 3] == 7) romanArr.unshift("dcc");
    if (str[str.length - 3] == 8) romanArr.unshift("dccc");
    if (str[str.length - 3] == 9) romanArr.unshift("cm");
    // Thousands place
    if (str[str.length - 4] == 1) romanArr.unshift("m");
    if (str[str.length - 4] == 2) romanArr.unshift("mm");
    if (str[str.length - 4] == 3) romanArr.unshift("mmm");

    return romanArr.join("").toUpperCase();
}

// Submitted May 28, 2022
function convertToRoman(num) {
    let numArr = num.toString().split('');
    console.log(num);
    let ones = { 0: '', 1: "i", 2: "ii", 3: "iii", 4: "iv", 5: "v", 6: "vi", 7: "vii", 8: "viii", 9: "ix" };
    let tens = { 0: '', 1: "x", 2: "xx", 3: "xxx", 4: "xl", 5: "l", 6: "lx", 7: "lxx", 8: "lxxx", 9: "xc" };
    let hundreds = { 0: '', 1: "c", 2: "cc", 3: "ccc", 4: "cd", 5: "d", 6: "dc", 7: "dcc", 8: "dccc", 9: "cm" };
    let thousands = { 1: "m", 2: "mm", 3: "mmm" };
    return numArr
        .map((n, i) => {
            if (i == numArr.length - 1) return n.replace(n, ones[n]);
            if (i == numArr.length - 2) return n.replace(n, tens[n]);
            if (i == numArr.length - 3) return n.replace(n, hundreds[n]);
            if (i == numArr.length - 4) return n.replace(n, thousands[n]);
        })
        .join('')
        .toUpperCase();
}
// Or this works
// let romanArr = [];
// numArr.forEach((n, i) => {    
//     if (i == numArr.length - 1) romanArr.push(ones[n]);
//     if (i == numArr.length - 2) romanArr.push(tens[n]);
//     if (i == numArr.length - 3) romanArr.push(hundreds[n]);
//     if (i == numArr.length - 4) romanArr.push(thousands[n]);
// })
// return romanArr.join('').toUpperCase();

console.log(convertToRoman(8));
console.log(convertToRoman(10));
console.log(convertToRoman(274));
console.log(convertToRoman(1062));
console.log(convertToRoman(3591));
