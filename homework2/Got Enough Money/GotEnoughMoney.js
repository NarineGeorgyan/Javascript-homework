function itemsPurchased(obj, money){

    const ITEMS_ARRAY = [];
    money=stringToNumber(money);
  for([key, value] of Object.entries(obj)){
    value=stringToNumber(value);
    if(value<money){
        money-=value;
        ITEMS_ARRAY.push(key)
      
    }else{
        continue;
    }
  }
  if(ITEMS_ARRAY.length===0){
    return "Nothing"
  }else{
    
 return  ITEMS_ARRAY
  }
}
console.log( itemsPurchased({
    Apple: "$4",
    Honey: "$3",
    Fan: "$14",
    Bananas: "$4",
    Pan: "$100",
    Spoon: "$2"
  }, "$1"))
function stringToNumber(string){
       return  +string.slice(1);
}
