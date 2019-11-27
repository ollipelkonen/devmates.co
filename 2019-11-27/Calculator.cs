/*

Problem of the Day:

Implement a basic calculator to evaluate a simple expression string.

The expression string contains only non-negative integers, +, -, *, / operators and empty spaces.

🎉 Share and discuss solutions directly on Devmates. [email.mg.devmates.co]
Example:

                      
  Input: "13+5 * 2 "
  Output: 23
  
  Input: " 15-4/2"
  Output: 13

  Input: " 24/2-  10/5  "
  Output: 10
                      
*/

using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;

class Calculator
{

  protected static void calc( LinkedList<string>items, string oper)
  {
    var d = items.Find(oper);
    while (d != null) {
      int v1 = int.Parse(d.Previous.Value);
      int v2 = int.Parse(d.Next.Value);
      switch (oper) {
        case "*": d.Value = (v1*v2).ToString(); break;
        case "/": d.Value = (v1/v2).ToString(); break;
        case "+": d.Value = (v1+v2).ToString(); break;
        case "-": d.Value = (v1-v2).ToString(); break;
      }
      items.Remove(d.Next);
      items.Remove(d.Previous);
      d = items.Find(oper);
    }
  }

  static int calculate( string input )
  {
    LinkedList<string> items = new LinkedList<string>(Regex.Split(Regex.Replace(input,@"\s+", ""), @"([\/\*\-\+])") );
    foreach ( string k in new[] {"*","/","+","-"} )
      calc(items,k);
    var en = items.GetEnumerator();
    en.MoveNext();
    return int.Parse( en.Current );
  }


  static void Main()
  {
    string[] input = {
      "13+5  *  2",
      " 15-4/2",
      " 24/2-  10/5  "
    };
    foreach (string s in input)
      Console.WriteLine( s + " = " + calculate(s));
  }

}

