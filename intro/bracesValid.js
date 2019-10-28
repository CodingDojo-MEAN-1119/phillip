

function valid(str){
    var tempArr=str.split("");
    var pCount=0;
    var bCount=0;
    var cCount=0;
    for(var i=0; i<tempArr.length; i++){
        if(i=="("){
            pCount+=1;
        }
        if(i==")" && pCount<1){
            return false;
        }
        if(i==")"){
            pCount-=1;
        }
        if(i=="{"){
            cCount+=1;
        }
        if(i=="}" && cCount<1){
            return false;
        }
        if(i=="}"){
            cCount-=1;
        }
        if(i=="["){
            bCount+=1;
        }
        if(i=="]" && bCount<1){
            return false;
        }
        if(i=="]"){
            bCount-=1;
        }

    }
    if (bCount ==0 && cCount==0 && pCount==0){
        return true;
    }
    return false;
    
}
console.log(valid("{{()}}}{"));

