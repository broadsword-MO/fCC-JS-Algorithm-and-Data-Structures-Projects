// ================== Telephone Number Validator ===================
// The user may fill out the form field any way they choose as long as it has the format of a valid US number. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.
function telephoneCheck(str) {
    /* Explanation
    This returns true or false for either:
        1. Start of pattern, 10 digits, end of pattern... Or
        2. Start pattern, an optional character group with a 1 and an optional space, a character group with an escaped L paren, 3 digits and an escaped R paren OR just 3 digits, an optional space or dash, 3 digits, a space or dash, 4 digits, end pattern */
    return /^\d{10}$|^(1 ?)?(\(\d{3}\)|\d{3})[ -]?\d{3}[ -]\d{4}$/.test(str);
}

console.log(telephoneCheck('1(555)555-5555')); // should return true.
console.log(telephoneCheck('(555)555-5555')); // should return true.
console.log(telephoneCheck('(555-555-5555')); // should return false.
console.log(telephoneCheck('1 (555) 555-5555')); // should return true.
console.log(telephoneCheck('1 555)555-5555')); // should return false.
console.log(telephoneCheck('(6054756961)')); // should return false.
console.log(telephoneCheck('27576227382')); // should return false.
console.log(telephoneCheck('555-555-5555')); // should return true
console.log(telephoneCheck('5555555555')); // should return true
console.log(telephoneCheck('1 555-555-5555')); // should return true
