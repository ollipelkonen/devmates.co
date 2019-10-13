<?php
  /*
  Problem of the Day:

  Given a list of 24-hour clock time points in "Hour:Minutes" format, find the minimum minutes difference between any two
  time points in the list.

  Note:

  The number of time points in the given list is at least 2 and won't exceed 20000

  Example:


    Input: ["23:49","00:00"]
    Output: 11

    Input: ["23:29", "00:00", "23:11"]
    Output: 18
  */


  $input = ["23:49","00:00"];
  $output = find_minimum_time_diff($input);
  echo 'minimum time difference in ' . print_r($input,true) . "is $output minutes\n\n";


  $input = ["23:29", "00:00", "23:11"];
  $output = find_minimum_time_diff($input);
  echo 'minimum time difference in ' . print_r($input,true) . "is $output minutes\n\n";




  function find_minimum_time_diff($times)
  {
    $count = count($times);
    sort($times);
    $m = PHP_INT_MAX;
    $last = strtotime( $times[$count-1] ) - 60*60*24;
    for ( $i=0; $i<$count; $i++ )
    {
      $cur = strtotime($times[$i]);
      $m = min( abs($cur-$last), $m );
      $last = $cur;
    }
    return $m / 60;
  }

?>