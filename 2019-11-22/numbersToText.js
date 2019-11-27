/*
Problem: 💬Integers to English Words
Convert a non-negative integer to its english words representation.

  Input: 12345
  Output: "Twelve Thousand Three Hundred Forty Five"

  Input: 1234567891
  Output: "One Billion Two Hundred Thirty Four Million 
        Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"

  Input: 123
  Output: "One Hundred Twenty Three"

*/

convert = (k) => 
{
  const t1 = [' zero',' one',' two',' three',' four',' five',' six',' seven',' eight',' nine'];
  const t2 = [' ten',' eleven',' twelve',' thirteen',' fourteen',' fifteen',' sixteen',' seventeen',' eighteen',' nineteen' ];
  const t3 = ['','', ' twenty',' thirty',' fourty',' fifty',' sixty',' seventy',' eighty',' ninety'];
  const m1 = ['',' hundred',' thousand',' million',' billion',' trillion'];
  d = k.toString(10);
  const m = [2,1,3,3,3,3].map( (a,i) => {
    const x = d.match( new RegExp("[0-9]{0,"+a+"}$") );
    if ( x != null && x[0] != '' ) {
      d = d.substring(0,x.index);
      return x[0].split('').reverse().join('')
    }
  }).filter(a=>a!=undefined)
  console.log(m)
  if ( m.length == 1 && m[0] == 0 )
    return t1[0];
  var s = '';
  m.forEach( (a,i) => {
    var t = '';
    if ( a.length == 1 && a > 0 )
    {
      const z = a.charCodeAt();
      t = (z>48?(t1[z-48]):'');
      s = t + m1[i] + s;
    }
    else if ( a > 0 )
    {
      const b = a.split('')
      if ( a.length==3 && b[2] > 0 )  // hundreds
        t = t + t1[b[2].charCodeAt()-48] + m1[1];
      if ( b[1] == "1" )  // 1x
        t = t + t2[b[0].charCodeAt()-48];
      else if ( b[0] == "0" ) // x0
        t = t + t3[b[1].charCodeAt()-48];
      else  // xx
        t = t + t3[b[1].charCodeAt()-48] + t1[b[0].charCodeAt()-48];
      s = t + m1[i] + s;
    }
  });
  return s.trim();
}
convert(12345678901)

