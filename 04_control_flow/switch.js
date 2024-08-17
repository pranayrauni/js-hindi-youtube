// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");          // jaha v case match ho jayga ur agar uske baad break nhi hai to niche ka sara case execute hoga except default
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}