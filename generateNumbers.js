function getNumbers(min,max,range=1){
  if(max<min && range > max-min && range > 0){
    throw Error('Please enter correct values for generating numbers')
  }
  if(range < 0 && max > min){
    throw Error('For decreasing values please enter correct numbers')
  }

  let array = []
  if(range < 0){
    for(let i=min;i>max;i+=range){
        array.push(i)
      }
  }else{
    for(let i=min;i<max;i+=range){
        array.push(i)
      }
  }
  
  
  return array
}


module.exports = {
    getNumbers:getNumbers
}