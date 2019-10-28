function bubbleSort(a){
    var swapp;
    var n = a.length-1;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (a[i] > a[i+1])
            {
               var temp = a[i];
               a[i] = a[i+1];
               a[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
 return a; 
}

console.log(bubbleSort([5,7,2,1,8]));