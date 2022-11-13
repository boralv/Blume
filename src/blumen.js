// Temporary solution for CORS -> https://cors-anywhere.herokuapp.com/
var url = 'https://blumlinge2.herokuapp.com/api/smallbouquet/';
const response = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);
const blumen = await response.json();
// console.log(blumen)

export { blumen };