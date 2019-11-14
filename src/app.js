// this is an example of improting data from JSON
import orders from '../data/orders.json';

export default (function () {
    // YOUR CODE GOES HERE
    // next line is for example only
    console.log(orders[1]);
    document.getElementById("app").innerHTML = "<h1>Hello WG Forge</h1>";
}());
