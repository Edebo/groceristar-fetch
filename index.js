const search       = require("./projects/Search/search.js");
const groceristar  = require("./projects/GroceriStar/groceristar.js");
const chickenKyiv  = require('./projects/ChickenKyiv/chickenKyiv.js');
const mealCalendar = require("./projects/MealCalendar/mealCalendar.js");
const showcase     = require("./projects/Showcase/showcase.js");
const graphQL     = require("./projects/GraphQL/graphQL.js");

// i'm separating this file because it's not fit to logic of this module very well.
const CKImport     = require("./Import/CKImport");
// console.log(groceristar.getAllIngredientsByOneDepartmentKey("Fresh vegetables"));
// console.log(groceristar.getGroceryByNameWithDepAndIngKey("Ultimate Grocery List"));
// console.log(groceristar.getGroceriesWithDepIngKey());

// console.log(groceristar.getAllIngredientsWithId());
// console.log(groceristar.getCountIngOfDepartment());

// console.log(groceristar.getKeyArrayDepAndIng().length);



module.exports = {
  search: search,
  groceristar: groceristar,
  chickenKyiv: chickenKyiv,
  mealCalendar: mealCalendar,
  showcase: showcase,
  graphQL: graphQL,


  CKImport: CKImport
}
