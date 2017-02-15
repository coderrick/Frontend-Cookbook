"use strict";

function sub_arr_sum(arr, n){
  let ans = 0;
  let sub_arr_size = 0;
  let start_index = 0;

  for(sub_arr_size = 1; sub_arr_size <= n; ++sub_arr_size){
    for(start_index = 0; start_index < n; ++start_index){
      if(start_index + sub_arr_size > n){
        break;
      }
      let sum = 0;
      for(i = start_index; i < arr.length; i++){
        console.log("start_index = " + start_index + " sub_arr_size = " + sub_arr_size);
        sum += arr[i];
        console.log("arr[" + i + "] = " + arr[i]);
      }
      ans = Math.max(ans, sum);
    }
  }
  return ans
}
