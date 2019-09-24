/**

Problem of the Day:

Reverse the words of a given string.

You can't use language provided string methods (such as split, reverse, etc.)

  
  usage:
    g++ rev.cpp
    ./a.out

**/


#include <iostream> 

void reverse_string( char* string )
{
  char* m = (char*) string;
  do
  {
    char *n = m;
    int l = 0;
    for ( char k = *m; k!=' ' && k!=0; k=*(++m) ) 
      l++;
    for (int i=1; i<=(l>>1); i++)
      std::swap( *(m-i), *n++ );
  }
  while ( *++m != 0 );
}



int main( int argc, char* argv[] )
{
  char testdata[][50] = {
    "    \0",
    "hello this is devmates\0",
    "   hello    this     is devmates\0",
    "hello    this     is devmates   \0",
    "  hello this is devmates   \0",
    "\0"
  };

  int i = 0;
  while ( *testdata[i] != 0 )
  {
    std::cout << "reverse   '" << testdata[i];
    reverse_string( testdata[i] );
    std::cout << "'  ->  '" << testdata[i] << "'\n";
    i++;
  }

}

