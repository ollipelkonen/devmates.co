/*

Problem of the Day:

Given a string, reduce the string by removing 3 or more consecutive identical characters. You should greedily remove characters from left to
right.

Example:

                      
  Input: "aaabbbc"
  Output: "c"
  Why?:
  1. Remove 3 'a': "aaabbbc" => "bbbc"
  2. Remove 3 'b': "bbbc" => "c"

*/



function remove_identicals(s)
{
  const k = s.replace( /(.)\1{2}/g, '' );
  if ( k == s ) 
    return k;
  return remove_identicals(k);
}


// input contains input as a key and expected output as a value
const input = {
  'aaabbbc': 'c',
  'aabbbacd': 'cd',
  'aabbccddeeedcba': '',
};

// testing
for (var i in input)
{
  const output = remove_identicals( i );
  console.log( 'testing "' + i + '"  expecting "' + input[i] + '"   got "' + output + '"' );
}

