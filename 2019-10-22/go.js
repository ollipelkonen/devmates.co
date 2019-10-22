/*

Problem of the Day:

You play a game of Go. You are given a board with some stones placed on it (w is white stone, b is black stone, e is empty spot.), and you are
given a new black stone to be placed on an empty spot. You have to return the number of enemy stones that this move will capture.

*/

var add_black = function( map, pos ) {
  function flood( map, pos, score=0 )
  {
    if ( score < 0 )
      return -1;
    if ( pos.y < 0 || pos.y>=map.length || pos.x<0 || pos.x>=map[0].length )
      return -1;

    const current = map[pos.y][pos.x];
    switch( current )
    {
      case 'e':
        return -1;
      case 'b':
      case 'W':
        return score;
      case 'w':
        map[pos.y][pos.x] = 'W';
        score++;
    }

    score = flood( map, {x:pos.x+1,y:pos.y}, score );
    if ( score < 0 )
      return -1;

    score = flood( map, {x:pos.x-1,y:pos.y}, score );
    if ( score < 0 )
      return -1;

    score = flood( map, {x:pos.x,y:pos.y+1}, score );
    if ( score < 0 )
      return -1;

    score = flood( map, {x:pos.x,y:pos.y-1}, score );
    if ( score < 0 )
      return -1;

    return score;
  }

  // add black stone
  board[pos.y][pos.x] = 'b';
  return Math.max(flood(board,{x:pos.x-1,y:pos.y}), 
      flood(board,{x:pos.x+1,y:pos.y}), 
      flood(board,{x:pos.x,y:pos.y+1}), 
      flood(board,{x:pos.x,y:pos.y-1}) ); 
}




function test( board, pos, expectedValue )
{
  const score = add_black( board, pos );
  if ( score != expectedValue ) 
    console.log('expected', expectedValue, 'but got', score, "\n", board );
  else
    console.log('ok. expected', expectedValue, 'got', score);
}




let row = 2, col = 5

let board = [['e', 'e', 'e', 'e', 'b', 'b', 'b'], 
            ['e', 'e', 'e', 'e', 'b', 'w', 'b'],
            ['e', 'e', 'e', 'e', 'b', 'e', 'b'],
            ['e', 'e', 'e', 'e', 'e', 'e', 'e']];
test( board, {x:col,y:row}, 1 );

board = [['e', 'e', 'e', 'e', 'b', 'b', 'b'],
         ['e', 'e', 'e', 'b', 'w', 'w', 'b'],
         ['e', 'e', 'e', 'e', 'b', 'e', 'b'],
         ['e', 'e', 'e', 'e', 'e', 'e', 'e']]
test( board, {x:col,y:row}, 2 );

board = [['e', 'e', 'e', 'e', 'b', 'b', 'b'],
         ['e', 'e', 'e', 'e', 'w', 'w', 'b'],
         ['e', 'e', 'e', 'e', 'b', 'e', 'b'],
         ['e', 'e', 'e', 'e', 'e', 'e', 'e']]
test( board, {x:col,y:row}, 0 );

board = [['e', 'e', 'b', 'b', 'b', 'b', 'b'], 
         ['e', 'e', 'b', 'w', 'e', 'w', 'b'],
         ['e', 'e', 'b', 'b', 'b', 'e', 'b'],
         ['e', 'e', 'e', 'e', 'e', 'e', 'e']]
test( board, {x:col,y:row}, 0 );

board = [['e', 'e', 'e', 'b', 'b', 'b', 'b'],
         ['e', 'e', 'b', 'w', 'w', 'w', 'b'],
         ['e', 'e', 'b', 'w', 'b', 'e', 'b'],
         ['e', 'e', 'e', 'b', 'e', 'e', 'e']]
test( board, {x:col,y:row}, 4 );

