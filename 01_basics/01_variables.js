const accountId = 144553
let accountEmail = "harsh@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi" 
let accountState
// not recommended to use var for new code
// const is used for constants, which cannot be reassigned
// accountId = 2 // not allowed, const cannot be reassigned

accountEmail = "hardy@gmail.com"
accountPassword = "478589"
accountCity = "Mumbai"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

//IMP
// Reassigning is fine with both let and var.
// Re-declaring is allowed only with var in the same scope.


