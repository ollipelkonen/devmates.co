/*
Problem of the Day:

You are given a list of non-negative integers nums and a target, T. You have 2 symbols + and -. For each integer, you should choose one sybmol:
+ or -.

Find out how many ways to assign symbols to make sum of integers equal to target T.
*/

using System;

class MainClass {

  public static int equalSumCount( int[] input, int T )
  {
    int c=0;
    for (int i=0;i<1<<input.Length;i++)
    {
      int val = 0;
      for (int j=0;j<input.Length;j++)
      {
        if ( (i&(1<<j)) == 0 )
          val+=input[j];
        else
          val-=input[j];
      }
      if (val==T)
        c++;
    }
    return c;
  }

  public static void Main (string[] args) {

    int[] input = {1, 1, 1, 1, 1};
    int T = 3;

    Console.WriteLine( MainClass.equalSumCount(input,T) );
  }
}
