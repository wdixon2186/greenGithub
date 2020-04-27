//4/27/2020

function solution(digits){
    return +digits.split('').map((v,i,arr)=>arr.slice(i,i+5).join('')).sort((a,b)=>+b-+a)[0]
  }


  function abbrevName(name){

    let nameArray = name.split(" ");
      return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
    }

    