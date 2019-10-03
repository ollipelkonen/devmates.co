/*
Problem of the Day:

Write a function that takes a string as input and reverse only the vowels of a string.

Example:

                      
  Input: "hello"
  Output: "holle"

  Input: "leetcode"
  Output: "leotcede"
*/


function reverseVowels(s2)
{
  var s = s2.split('');
  var i = 0, j = s.length-1;
  while ( i<j )
  {
    while (i<j && !/[aeiouAEIOU]/.test(s[i])) i++;
    while (i<j && !/[aeiouAEIOU]/.test(s[j])) j--;
    [s[i++],s[j--]] = [s[j],s[i]]
  }
  return s.join('');
}


function randomWord()
{
  const chars ='abcdefghijklmnopqrstuwvxyz 123';
  var s = '';
  const len = Math.floor(Math.random()*20)+2;
  for ( var i=0; i<len; i++ )
    s+=chars[Math.floor(Math.random() * chars.length - 1)];
  return s;
}


console.log(randomWord())
console.log( reverseVowels("ab") )
console.log( reverseVowels("abc") )
console.log( reverseVowels("abcd") )
console.log( reverseVowels("abcde") )
console.log( reverseVowels("abcdef") )
console.log( reverseVowels("abcdefg") )
console.log( reverseVowels("abcdefgh") )
console.log( reverseVowels("abcdefghi") )
console.log( reverseVowels("abcdefghij") )
console.log( reverseVowels("abcdefghijk") )

var errors = 0;
for (var i=0; i<100; i++ )
{
  const randomString = randomWord();
  const reversed = reverseVowels(randomString);
  if ( reverseVowels(reversed) != randomString )
  {
    console.log('error: ', randomString, ' -> ', reversed);
    errors++;
  }
  else
      console.log('ok: ', randomString, ' -> ', reversed);

}


console.log('errors: ', errors);




