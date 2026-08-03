// 1. length
console.log("Salom".length);     
console.log("JavaScript".length); 
console.log("12345".length);   
console.log("".length);           
console.log("Frontend".length);   
// 2. charAt() va at() 
console.log("Salom".charAt(0)); 
console.log("Salom".charAt(2));
console.log("Dastur".at(1));    
console.log("Dastur".at(-1));  
console.log("Hello".at(-2));   
// 3. charCodeAt() 
console.log("A".charCodeAt(0)); 
console.log("B".charCodeAt(0)); 
console.log("a".charCodeAt(0));
console.log("1".charCodeAt(0)); 
console.log("Z".charCodeAt(0)); 
// 4. concat()
console.log("Salom".concat(" Dunyo"));
console.log("Java".concat("Script"));
console.log("Men ".concat("o'qiyman"));
console.log("A".concat("B", "C"));
console.log("Front".concat("end"));
// 5. includes()
console.log("JavaScript".includes("Script"));
console.log("Salom".includes("lo"));       
console.log("Dastur".includes("tur"));   
console.log("Kitob".includes("abc"));        
console.log("Frontend".includes("end"));     
// 6. startsWith() va endsWith()
console.log("Salom".startsWith("Sa")); 
console.log("JavaScript".startsWith("Java"));
console.log("Kitob".startsWith("ki"));
console.log("Salom".endsWith("om")); 
console.log("Frontend".endsWith("end")); 
// 7. search(), indexOf(), lastIndexOf() 
console.log("Salom".search("lo"));
console.log("JavaScript".indexOf("Script")); 
console.log("Hello Hello".lastIndexOf("Hello"));
console.log("Frontend".indexOf("end"));
console.log("Banana".lastIndexOf("a")); 
// 8. padStart() va padEnd() 
console.log("5".padStart(3, "0")); 
console.log("7".padEnd(4, "0"));  
console.log("99".padStart(5, "*")); 
console.log("JS".padEnd(5, "."));  
console.log("1".padStart(2, "0"));  
