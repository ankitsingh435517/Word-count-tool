
var input = document.getElementById('str').value;
var lengthOfWord = input.length;
console.log(lengthOfWord);


function calcLength(str){
    document.getElementById('output').innerHTML = 'length Of word => ' + str.value.length;    
}