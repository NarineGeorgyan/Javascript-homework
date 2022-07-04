function point(num){
    let str ="";
    for( let i= 0; i<num; i++){
      str+="#"        
    }
    return str;
}
function spacePoint(num){
    let str  = "";
    for( let i= 0; i<num; i++){
      str+="*"        
    }
    return str;
}
function makeBox(num){
    
    let space=3;
    let str= "";
   for(let i=num; i>0; i--){
    str+=point(i)+"\n"
    for(let j= i; j<num-1; j++){
       
        str+=point(i)+spacePoint(space)+point(i)+"\n"
           }
    
   }
   
    return str;
}
const result= makeBox(2)
console.log(result);