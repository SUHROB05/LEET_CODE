function listQoshish(list1, list2) {
    let list3 = [];
    
    if (list1.length === 0) {
        if (list2.length === 0) {
            console.log("Ikkala ro'yxat ham bo'sh", list3);
        } else {
            list3 = list2.slice(); 
            console.log("Javob:", list3);
        }
    } else if (list2.length === 0) {
        list3 = list1.slice(); 
        console.log("Javob:", list3);
    } else {
        list3 = list1.concat(list2); 
        console.log('Javob:', list3);
    }
    
    return list3;
}

const misol = listQoshish([1, 2, 3, 4], [4, 5, 6, 7, 8]);
console.log("Natija:", misol);