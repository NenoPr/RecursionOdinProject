


function fibs(n) {
    if (n < 2) return 1
    let list = [0,1,1];
    for ( let i = 3; i<n; i++) {
        list.push(list[i-1] + list[i-2])
    }
    return list
}

function fibsRec(n) {
    if ( n <= 3 ) return 1
    return  fibsRec(n - 1) + fibsRec(n - 2)
}


function mergeSort(array) {
	if (array.length <= 1) return array;

	let arrHalf = Math.floor(array.length / 2);
	let arr1 = array.slice(0, arrHalf);
	let arr2 = array.slice(arrHalf);

	return mergeArrays(mergeSort(arr1), mergeSort(arr2));
}


function mergeArrays(arr1, arr2) {
	let newArray = []
    let leftArr = 0
    let rightArr = 0
  
	while (leftArr < arr1.length && rightArr < arr2.length) {
		if (arr1[leftArr] < arr2[rightArr]) {
			newArray.push(arr1[leftArr]);
			leftArr++
		} else {
			newArray.push(arr2[rightArr]);
			rightArr++
		}
	}
  
	if (arr1[leftArr]) {	
		let forMerge = arr1.slice(leftArr)
		newArray.push(...forMerge); 
	} else {
		let forMerge = arr2.slice(rightArr)
		newArray.push(...forMerge); 
	}
	return newArray;
}

console.log("fibs",fibs(8))
console.log("fibsRec",fibsRec(8))
console.log("mergeSort",mergeSort([4,3,12,8,21,74,19,1]))