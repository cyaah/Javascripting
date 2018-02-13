function obfuscate(string)
{
var password = string ;
var change = password.replace(/a/g, "4");
var change1 = change.replace(/e/g, "3");
var change2 = change1.replace(/o/g, "0");
var change3 = change2.replace(/l/g, "1");
console.log (change3);  
}
obfuscate(process.argv[2]);