function isPalindromet(x: number): boolean {
    const str: string = x.toString(); 
    const reversed: string = str.split('').reverse().join(''); 
    return str === reversed; 
}
console.log(isPalindromet(25874));