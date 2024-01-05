function Book(title, author, year, price) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.price = price;

  this.getTitle = function () {
    return this.title;
  };

  this.getAuthor = function () {
    return this.author;
  };

  this.getYear = function () {
    return this.year;
  };

  this.getPrice = function () {
    return this.price;
  };

  this.setTitle = function (newTitle) {
    this.title = newTitle;
  };

  this.setAuthor = function (newAuthor) {
    this.author = newAuthor;
  };

  this.setYear = function (newYear) {
    this.year = newYear;
  };

  this.setPrice = function (newPrice) {
    this.price = newPrice;
  };

  this.calculateDiscountedPrice = function (discountPercentage) {
    const discountedPrice =
      this.price - this.price * (discountPercentage / 100);
    return discountedPrice;
  };
}

const book1 = new Book("Чотири вітри", "Крістін Генна", 2020, 450);

console.log(book1.getTitle());
console.log(book1.getYear());
console.log(book1.calculateDiscountedPrice(90));

book1.setTitle("New title");
