function checkPassword (password) {
    if (password.length >= 8){
        console.log('strong password');
    } else {
        console.log('weak password');
    }
}

checkPassword('123478');