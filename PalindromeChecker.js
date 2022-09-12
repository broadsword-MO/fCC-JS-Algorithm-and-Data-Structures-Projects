// ===================================================
//            Beginnings of a draft
// ===================================================

//   ---------- From a melvingeorge.me blog -------
// a string
// const str = "#HelloWorld123$%";
const str = 'Ra%ce $dar'; // This line should be unnecessary once it's in the function

// ================== All Lowercase ===================
// Make everything lowercase, Mine
const lowerStr = str.toLowerCase();
console.log(lowerStr);

// ================== Setup Regex to reduce to alphanumeric only ===================
// regex expression to match all non-alphanumeric characters in string
const regex = /[^a-z0-9]/g; // I slightly modified the parameters

// ================== Use Regex with replace() =======================
// use replace() method to match and remove all the non-alphanumeric characters
const newStr = lowerStr.replace(regex, ''); // I edited the string name

console.log(newStr); // helloworld123

// ---------------- All mine -------------------
// ------------- After Regex, use spread syntax ---------------
const strArr = [...newStr];
console.log(strArr);

// ----------- compare and remove first and last elements ---------
// -------- Maybe put in a for or while loop ------------
// Not right yet...
for (let i = 0; i < strArr.length; i++) {
    console.log(strArr.length);
    if (strArr.shift() == strArr.pop()) {
        return true;
    } else {
        return console.log('Not a palindrome');
    }
    return console.log('A palindrome!');
}

// ===================================================
//              Solution w/console.logs
// ===================================================

function palindrome(str) {
    console.log(str);
    const lowerStr = str.toLowerCase();
    console.log(lowerStr);
    const regex = /[^a-z0-9]/g;
    const newStr = lowerStr.replace(regex, '');
    console.log(newStr);
    const strArr = [...newStr];
    console.log(strArr);

    while (strArr.length > 0) {
        console.log(strArr.length);
        if (strArr.length === 1) {
            return console.log(true);
        } else if (strArr.shift() === strArr.pop()) {
            console.log(strArr);
            console.log(strArr.length);
            console.log('so far so good');
        } else {
            return console.log(false);
        }
    }
    return console.log(true);
}

// palindrome("almostomla"); // false
palindrome('Ra%ce $car'); // true

// ================== Solution w/o console.logs ===================
function palindrome(str) {
    const lowerStr = str.toLowerCase();
    const regex = /[^a-z0-9]/g;
    const newStr = lowerStr.replace(regex, '');
    const strArr = [...newStr];

    while (strArr.length > 0) {
        if (strArr.length === 1) {
            return true;
        } else if (strArr.shift() === strArr.pop()) {
        } else {
            return false;
        }
    }
    return true;
}

// console.log(palindrome("almostomla")); // false
// console.log(palindrome('Ra%ce $car')); // true
console.log(palindrome('eye')); // true
