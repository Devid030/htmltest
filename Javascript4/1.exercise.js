//
//
//

/* Users = [
    { name: 'DaisuKe', age: 24},
    { name: 'Devid', age: 24},
    { name: 'Gojo', age: 15},
    { name: 'Itadori', age: 17}
]

const user = (Users) => {
    for(const person of Users){
        if(person.age > 18) {
            console.log(`Name: ${person.name} \n${person.age}`)
        }
    }
}

user(Users); */

const Users = [
    { name: 'DaisuKe', age: 24},
    { name: 'Devid', age: 24},
    { name: 'Gojo', age: 15},
    { name: 'Itadori', age: 17}
];

const filterUsersOver18 = (user) => {
    return user.filter(person => person.age > 18);
}

const filteredUsers = filterUsersOver18(Users);
console.log(filteredUsers); 