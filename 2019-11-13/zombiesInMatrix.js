/*
Problem: 🧟‍♂️Zombies in Matrix
Given a 2D grid, each cell is either a zombie 1 or a human 0. Zombies can turn adjacent (up / down / left / right) human beings into zombies every hour. Find out how many hours does it take to infect all humans?

  Input:
  [[0, 1, 1, 0, 1],
   [0, 1, 0, 1, 0],
   [0, 0, 0, 0, 1],
   [0, 1, 0, 0, 0]]

  Output: 2

  Why?
  At the end of the 1st hour, the status of the grid:
  [[1, 1, 1, 1, 1],
   [1, 1, 1, 1, 1],
   [0, 1, 0, 1, 1],
   [1, 1, 1, 0, 1]]

  At the end of the 2nd hour, the status of the grid:
  [[1, 1, 1, 1, 1],
   [1, 1, 1, 1, 1],
   [1, 1, 1, 1, 1],
   [1, 1, 1, 1, 1]]

*/


function turnToZombies( input )
{
  let count = 0;
  while ( input.find( a => a.includes(0) ) )
  {
    count++;
    input = input.map( (a,y) => a.map( (b,x) => (input[y][Math.max(0,x-1)] | input[y][Math.min(x+1,input[y].length-1)] | input[Math.max(0,y-1)][x] | input[Math.min(y+1,input.length-1)] | input[y][x]) ) );
  }
  return count;
}

