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

//mss = maximum subarray sum
function max_sub_arr(arr, n){
  if(n === 1){
    return arr[0];
  }
  let m = n/2;
  let left_mss = max_sub_arr(arr, m);
  let right_mss = max_sub_arr(arr + m, m - n);
  let leftsum, rightsum, sum = 0;
  for(i = m; i < n; i++){
    sum += arr[i];
    rightsum = Math.max(rightsum, sum);
  }
  sum = 0;
  for(i = (m - 1); i >= 0; i--){
    sum += arr[i];
    leftsum = Math.max(leftsum, sum);
  }
  let ans = Math.max(left_mss, right_mss);
  return Math.max(ans, leftsum + rightsum);
}
