function mincost(arr)

{  
    let sum=0;
    if(arr.length==1){
    
    return arr[0]}
for(let i=0;i<arr.length-1;i++){
    arr.sort((a,b)=>a-b);
    sum+=arr[i]+arr[i+1];
   
    arr[i+1]+=arr[i];

}
return sum;
	
  
}

module.exports=mincost;
