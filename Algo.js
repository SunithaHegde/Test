/*Find pair with given sum in the array
var arr =[8,5,2,1,7];
sum =10
O(n^2) - 2 loops, O(nlong) sort and divide, O(n) hashing

*/

function findPairWithSum(arr,sum){
	var map ={};
	for(let i=0; i< arr.length ;++i){
		console.log(map[sum - arr[i]] + "" + sum +" "+ arr[i])
		if(map[sum - arr[i]] >= 0){
			return map[sum - arr[i]] + " " +i;
		}	
		map[arr[i]] = i;
	}	
	return map;	 
}	

/** check sub array with 0 sum
O(n^2) 2 loops
**/
 function subArryWithZeroSum(arr){
	let map ={};
	let sum =0;
	for(let i= 0;i< arr.length ;++i){
		 sum+=arr[i];
		 if(arr[i] == 0 || sum == 0 || map[sum] != undefined){
				return true;
		 }	 
		 map[sum]=i;
	}	 
	return false;
 }	 
 
 
 /** get all sub array with sum 0 **/
 //[4,2,-3,-1,0,4]
 function printAllSubArrayWithZeroSum(arr){
	var map = {};
	var subArr = [];
	var sum =0;
	for(let i=0;i<arr.length;++i){
		sum += arr[i];
		if(arr[i] == 0){
			console.log("o")
			var arr1 =[]
			arr1.push(arr[i])
			subArr.push(arr1);	
		}	
		if(sum == 0){
						console.log("sum")

			var arr1 =[]
			for(let j =0; j<= i ;++j){
				arr1.push(arr[j]);
			}	
			subArr.push(arr1);
		}	
		if(map[sum] != undefined && Math.abs(map[sum] - i) > 1) {

			var arr1 =[]
			for(let j = map[sum]+1; j<= i ;++j){
				arr1.push(arr[j]);
			}	
			subArr.push(arr1);	
		}	
		map[sum] = i;
	}
	 console.log(map);
	 return subArr;
 }	 
 
 
 /** sort Binary array  o(n)**/
 var mc =[1,0,0,1,1,0];
 function sortBinary(arr){
	 var n = arr.length
	for(let i=0;i< n;++i){
		if(arr[i] == 0){
			arr.unshift(arr.splice(i,1)[0]);	
		}	
	}	return arr;
 } 
 
 /** find duplicate element in given array  O(n)**/
 var arr = [1,4,4,5,7];
 
 function findDuplicateElement(arr){
	var countObj ={};
	for(let i=0;i<arr.length ;++i){
		if(countObj[arr[i]]){
			return arr[i];
		}	
		countObj[arr[i]] = 1;
	}	 
	 return -1;
 }	 
 findDuplicateElement(arr);
 
 /** length of larget subarray with continuous numbers O(n^2)**/
  /** maxnum - minNum = maxIndex- minIndex**/
 var subArr =[0,2,1,3,5,4,0];
 function findMax(num1,num2){
	return num1 > num2 ? num1:num2;
 }	 
 function findMin(num1,num2){
	return num1 < num2 ? num1:num2;
 }	 
 function findMaxLengthOfSubArray(subArr) {
	let maxLength = 1;
	let max,min; 
	for( let i=0;i <subArr.length; ++i){
		max = subArr[i];
		min = subArr[i];
		for(let j = i+1; j < subArr.length ;++j){
			max = findMax(max,subArr[j]);
			min = findMin(min,subArr[j]);
			if(max - min == j - i){
				maxLength = findMax(maxLength,j-i+1);	
			}	
		}	
	}	
	return maxLength;
 }	 
 findMaxLengthOfSubArray(subArr);
 
 /** Find maximum length sub-array having given sum O(n^2) **/
 
 var somArr = [5,6,-5,5,3,5,3,-2,0];
 var sum = 8;
 
 function findMaxLengthSubArrWithSum(somArr,sum){
	let maxLength = 1;
	let tempSum = 0;
	 for( let i=0;i <somArr.length; ++i){
		tempSum = somArr[i]; 
		for(let j = i+1; j < somArr.length ;++j){
			tempSum += somArr[j]; 
			if(tempSum == sum){
				maxLength = maxLength > j-i+1 ? maxLength : j-i+1;
			}	
		}	
	}
	return maxLength;
 }	 
 findMaxLengthSubArrWithSum(somArr,sum);
 
 // Better solution copied o(n)
  function findMaxLengthSubArrWithSumBetter(somArr,sum){
	let map ={};
	let arrSum = 0;
	let len = 0;
	for(let i =0;i< somArr.length; ++i){
		arrSum += somArr[i];
		if(map[arrSum] == undefined){
			map[arrSum] = i;
		}	
		if( map[arrSum - sum] != undefined){
			len = len < i - map[arrSum - sum] ? i - map[arrSum - sum]: len
		}	
	}	
	console.log(map)
	return len;
  }	  
/**Find maximum length sub-array having equal number of 0’s and 1’s 
	O(n^2) - 2 loops and check length
	better solution O(n)
**/
var zeroOneArr=[0,0,1,0,1,0,0];
function findMaxLengthsubArrWithEqualNumOf01(zeroOneArr){
	for(let i = 0;i < zeroOneArr.length; ++i){
		if(zeroOneArr[i] == 0){
			zeroOneArr[i] = -1;
		}	
	}	
	return findMaxLengthSubArrWithSumBetter(zeroOneArr,0);
}	

/*Sort an array containing 0’s, 1’s and 2’s (Dutch national flag problem) 
Similar solution to RGB Ball problem 
**/
var dutchArray = [0, 1, 2, 2, 1, 0, 0, 2, 0, 1, 1, 0];
function sortArrayOfDup(arr){
	let start =0;
	let cur = 0;
	let end = arr.length - 1;
	let pivot = 1;
	let temp; 
	while(cur <= end){
		if(arr[cur] < pivot){
			temp = arr[start];
			arr[start] = arr[cur];
			arr[cur] = temp;
			start++;
			cur++;
		} else if(arr[cur] > pivot){
			temp = arr[end];
			arr[end] = arr[cur];
			arr[cur] = temp;
			end--;
		}	else {
			cur++;
		}	
	}
	return arr;
}	

/** 
Inplace merge two sorted arrays
Input
X[] = { 1, 4, 7, 8, 10 } 
Y[] = { 2, 3, 9 }

output
X[] = { 1, 2, 3, 4, 7 }
Y[] = { 8, 9, 10 }
Complexity O(n^2)?? 
**/
var X = [1, 4, 7, 8, 10];
var Y = [ 2, 3, 9 ];
function inplaceMergeTwoSortedArray(X,Y) { 
	for(let i =0 ;i < X.length ;++i){
		if(X[i] > Y[0]){
			X.splice(i,0,Y[0])
			Y.splice(0,1);
			Y.push(X.pop());
		}	
	}
	Y.sort(function(a, b){return a - b});
	return {
		X:X,
		Y:Y	
	}	
}
// O (m*n)
function inplaceMerge(X,Y){
	let temp; 
	for(let i =0 ;i < X.length ;++i){
		if(X[i] > Y[0]){
			temp = X[i];
			X[i] = Y[0];
			Y[0] = temp;
			Y.sort(function(a, b){return a - b});
		}	
	}		
	return {
		X:X,
		Y:Y	
	}
}	