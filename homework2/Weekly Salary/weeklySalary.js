function weeklySalary(arr){
    const TIME = 8;
    let salary = 0;
    const TIME_PRICE = 10;
    const OVERTIME_PRICE = 15;

    for([key, value] of arr.entries()){
        if(value > 0){
            let overTime = 0
            if(value < TIME){
                salary+=value * TIME_PRICE;
            }
            else{
                overTime = value-TIME;
            }
           
           if(value>=TIME){
            salary+=(TIME * TIME_PRICE + overTime * OVERTIME_PRICE );
           }
           if(key == "5" && value!= 0 || key =="6" & value!=0 ){
            salary+=(TIME * TIME_PRICE + overTime * OVERTIME_PRICE );
           }
           
        }
        }
  
  return salary;
}
 const result = weeklySalary([0, 0, 0, 0, 0, 12, 0]);
 console.log(result)