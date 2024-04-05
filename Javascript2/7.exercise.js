function vowels (string) {
    let count = 0
    for (let i = 0; i < string.length ; i++){
        if (string[i] === 'a' ||
         string[i] === 'e' ||
         string[i] === 'i' ||
         string[i] === 'o' ||
         string[i] === 'u'
    ) {
        count++;
    }
    }
    return count;
}

console.log(vowels('bello hola helo'))