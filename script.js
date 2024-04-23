function mincost(arr)
{ 
//write your code here
// return the min cost
	let sum=0;
	arr=arr.sort().reverse();
	for(let i=0;i<arr.length();i++){
		sum+=arr[i];
		for(let j=i+1;j<arr.length();j++){
			sum+=arr[j];
		}
	}
	
	return sum;
  
}

module.exports=mincost;
