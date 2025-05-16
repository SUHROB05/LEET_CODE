/**
 * @param {number} num
 * @return {boolean}
 */
let isPerfectSquare = function (num) {
    for (let i = 0; i <= num; i++) {
        if (i * i === num) {
            console.log(true);
            return true;
        }else if(i*i >num){
            break;
        }
    }
    console.log(false)
    return false;
};

let misol1 = isPerfectSquare(16)
let misol2 = isPerfectSquare(50)
let misol3 = isPerfectSquare(14)