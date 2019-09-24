/**
  
  usage:
    g++ rev.cpp
    ./a.out

**/

#include <iostream> 


void reverse_string( char* string )
{
  char* m = string;
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
  char input[] = "hello this is amadeo";
  reverse_string(input);

  std::cout << input;
}

