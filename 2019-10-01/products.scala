/*

Problem of the Day:

Given non-empty array nums of integers, return an array output such that output[i] is equal to the product of all the
elements of nums except nums[i].

Example:

                      
  Input: [1,2,3,4]
  Output: [24,12,8,6]
  Why? 
      output[0] = 2*3*4 = 24
      output[1] = 1*3*4 = 12
      output[2] = 1*2*4 = 8
      output[3] = 1*2*3 = 6

*/

def products( v: List[Int] ) : List[Int] =
{
  var l = v.reduce( (x,y) => x*y )
  v.map( (a) => l/a)
}


var input = List(1, 2, 3, 4)
var output = products( input );
System.out.println( output );


System.out.println( products( List(1, 2, 3, 4, 5, -1, -2, 123 ) ) );


