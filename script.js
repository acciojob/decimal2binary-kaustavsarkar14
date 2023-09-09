function decimalToBinary(num) {
  //Write you code here
  let ans = ""
	while(num>0){
		if(num%2===0)
			ans+=0
    else 
        ans+=1
      num = Math.floor(num / 2)
	}
  return ans.split("").reverse().join("")
}

window.decimalToBinary = decimalToBinary;
