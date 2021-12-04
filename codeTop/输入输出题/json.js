var book={
    "title":"js高级程序设计",
    "author":"褚雅婷",
    edition:3,
    year:2021,
    toJSON:function() {
        return [this.title,this.edition];
    }
}
var bookStr=JSON.stringify(book,["title","year"],4);
console.log(bookStr)