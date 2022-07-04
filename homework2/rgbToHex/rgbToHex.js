function rgbToHex(rgb){
    const arrHex = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]
    rgb = rgb.split("rgb(").join("");
    rgb = rgb.split(")").join("");
    rgb = rgb.split(",");
    rgb= rgb.reduce((agg,num)=>{
        const mn = num%16;
        const qan = parseInt(num/16);
 
        agg.push(qan, mn);
     
       return agg
     },[])
     .map(val=>{
        for([key, value] of arrHex.entries()){
            if(val===key){
                return value;
            }
         }
     }).join("");
   return "#"+rgb

}
console.log(rgbToHex("rgb(0, 128, 192)"));

