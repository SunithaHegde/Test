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