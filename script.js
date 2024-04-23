function mincost(arr)
{ 
//write your code here
// return the min cost
	let sum=0;
	arr=arr.sort((a,b)=>a-b)
	for(let i=0;i<arr.length-1;i++){
		let connect=arr[i]+arr[i+1];
		sum+=connect;
		arr[i+1]=connect;
	}
	
	return sum;
  
}

module.exports=mincost;
