function fizzBuzz(num){
    var tempStr="";
    if(num<1){
        return null;
    }
    for( var i=1; i<=num; i++){
        if(i%3==0 && i%5==0){
            tempStr+= "fizzbuzz, ";
        }
        else if(i%5==0){
            tempStr+="buzz, ";
        }
        else if(i%3==0){
            tempStr+="fizz, ";
        }else{
            tempStr= tempStr+i+", ";
        }
    }
    console.log(tempStr);

}
fizzBuzz(20);