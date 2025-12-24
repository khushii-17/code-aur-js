const accId = 14423 // value of variable cannot be change later
let accEmail = "khushi@mymail.com" //
var accPassword = "123456"
accCity = "Varanasi"  // js allows this but not a good practice so use let to define variables
let accState;  // by default it is undefined
//accId = 234  // not allowed
accEmail = "khushi.w@mymail.com"
accPassword = "171717"
accCity = "Bombay"
/*
Prefer not to use var
Because of issue in block scope and functional scope

earlier var was used but it does not have any scope so it was 
like u can use a variable only once
later comes let which obeys scope
*/
console.log(accId);
console.table([accId, accEmail, accPassword, accCity, accState])
