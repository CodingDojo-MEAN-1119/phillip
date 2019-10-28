function maxMinAverage(arr){

    var max =arr[0];
    var min =arr[0];
    var sum =0;
    for( var i=0; i<arr.length; i++){
        if( arr[i]>max){
            max=arr[i];
        }
        else if( arr[i]<min){
            min=arr[i];
        }
        sum+=arr[i];
    }
    console.log("The max is: ",max, ", the min is: ",min, ", and the average is: ",Math.round(sum/arr.length,"."));
}
maxMinAverage([1,3,5,6])