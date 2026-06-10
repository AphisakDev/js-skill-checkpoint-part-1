// Question #3
let userPassword = "12345678910";
// เริ่มเขียนโค้ดตรงนี้

function checkPasswordStrength(pass) {

    const length = pass.length
    if (length < 6) {
        return "Weak"
    } else if (length >=6 && length <= 10) {
        return "Medium"
    } else if (length > 10){
        return "Strong"
    }
}

console.log(checkPasswordStrength(userPassword))