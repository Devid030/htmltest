var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Book = /** @class */ (function () {
    function Book(title, author, genre, ISBN, available) {
        if (available === void 0) { available = true; }
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.ISBN = ISBN;
        this.available = available;
    }
    return Book;
}());
var UserAccount = /** @class */ (function () {
    function UserAccount(name) {
        this.name = name;
        this.borrowed_books = [];
    }
    UserAccount.prototype.borrowBook = function (bookTitle, library) {
        var bookAvailability = library.borrowBook(bookTitle);
        if (bookAvailability) {
            this.borrowed_books.push(bookTitle);
        }
        return bookAvailability;
    };
    UserAccount.prototype.viewBorrowedBook = function () {
        return this.borrowed_books;
    };
    return UserAccount;
}());
//for student
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name) {
        return _super.call(this, name) || this;
    }
    Student.prototype.borrowBook = function (bookTitle, library) {
        if (this.borrowed_books.length >= 5) {
            return "Sorry, you can't borrow more than 5 books";
        }
        else {
            return _super.prototype.borrowBook.call(this, bookTitle, library);
        }
    };
    return Student;
}(UserAccount));
//for Admin
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(name) {
        return _super.call(this, name) || this;
    }
    Admin.prototype.borrowBook = function (bookTitle, library) {
        return _super.prototype.borrowBook.call(this, bookTitle, library);
    };
    return Admin;
}(UserAccount));
var Library = /** @class */ (function () {
    function Library(name) {
        this.name = name;
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.removeBook = function (title) {
        title = title.toLowerCase();
        this.books = this.books.filter(function (book) { return book.title.toLowerCase() !== title && book.ISBN !== title; });
    };
    Library.prototype.searchBook = function (titleOrISBN) {
        titleOrISBN = titleOrISBN.toLowerCase(); // Convert to lowercase
        var foundBooks = this.books.filter(function (book) {
            return book.title.toLowerCase() === titleOrISBN ||
                book.ISBN === titleOrISBN ||
                book.author.toLowerCase() === titleOrISBN ||
                book.genre.toLowerCase() === titleOrISBN;
        });
        return foundBooks.length > 0 ? foundBooks : "Not found";
    };
    Library.prototype.displayAvailableBooks = function () {
        var availableBooks = this.books.filter(function (book) { return book.available; });
        console.log("Available Books:");
        availableBooks.forEach(function (book) { return console.log(book.title); });
    };
    Library.prototype.printBooks = function () {
        var i = 1;
        this.books.forEach(function (book) {
            console.log("===================> Book #".concat(i++));
            console.log("Title: ".concat(book.title, " , Author ").concat(book.author, " ,Genre: ").concat(book.genre, " , Available: ").concat(book.available, ", ISBN: ").concat(book.ISBN));
            console.log("===================");
        });
    };
    Library.prototype.borrowBook = function (title) {
        var foundBook = this.books.find(function (book) { return book.title.toLowerCase() === title.toLowerCase(); });
        if (foundBook && foundBook.available) {
            foundBook.available = false;
            return "You have successfully borrowed ".concat(title);
        }
        return "Sorry, ".concat(title, " is not available");
    };
    Library.prototype.returnBook = function (title) {
        title = title.toLowerCase();
        var foundBook = this.books.find(function (book) { return book.title.toLowerCase() === title; });
        if (foundBook && !foundBook.available) {
            foundBook.available = true;
            return "You have successfully returned ".concat(title);
        }
        return "Sorry, ".concat(title, " is not available");
    };
    return Library;
}());
//add book
var book1 = new Book("First Love", "Sok", "Love", "123");
var book2 = new Book("Reactjs", "dara", "Code", "468");
var book3 = new Book("Principles of Economics", "Vireak", "Economics", "8888");
var book4 = new Book("Clay tablets", "Jon", "history", "9999");
var book5 = new Book("History of Angkor", "vichet", "history", "1100");
var book6 = new Book("History of Wat Phnom", "Vuth", "history", "1111");
var library = new Library("Rean An");
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.addBook(book6);
//print
// console.log("Books in Library:");
// library.printBooks();
//remove book
// library.removeBook("468");
// console.log("Books in Library after remove:");
// library.printBooks();
//Search Book by title and ISBN
// console.log("Search Book:");
// const foundBookByISBN = library.searchBook("123"); // Assuming ISBN is stored in the Book class as 'ISBN'
// console.log(foundBookByISBN);
//Borrow Book from admin and student
var admin = new Admin("admin Ko");
var student = new Student("Li Tang");
//let student2 = new Student("student2");
console.log(admin.borrowBook("Reactjs", library));
console.log(student.borrowBook("Principles of Economics", library));
console.log(student.borrowBook("Clay tablets", library));
console.log(student.borrowBook("History of Angkor", library));
console.log(student.borrowBook("History of Wat Phnom", library));
console.log(student.borrowBook("first Love", library));
//more than for student
// console.log(student.borrowBook("first Love", library));
// console.log(student.borrowBook("Reactjs", library));
// console.log(student.borrowBook("Principles of Economics",library));
// console.log(student.borrowBook("Clay tablets",library));
// console.log(student.borrowBook("History of Angkor", library));
// console.log(student.borrowBook("History of Wat Phnom", library));
//for return book
// console.log(library.returnBook("first Love"))
