const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  //   write your code here
	for(int i=0;i<sampleObject.length;i++){
  if(key===sampleObject.key){
    return true;
  }

  return false;
}
}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
