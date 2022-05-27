# Algorithm for ComputerAI

## Choice Selection

We know that a 10x10 grid translates to a 100 grid cells total. In a totally random setting,
this implies that the worst case scenario would require 100 moves to sink all ships.

Can we make this more efficient?

Consider the fact that the MINIMUM length of a ship is 2. We can effectively cut
the cell selection by half by targetting 'every other' cell instead.
ie)
  
  
    0 1 2 3 4 5 6 7 8 9

0 x   x   x   x   x

1   x   x   x   x   x

The grid shows that with this selection, the four cardinal directions of north, south, east, and
west, are clear (assuming in bounds) for each 'x'. Now again with a ship's minimum length of 2,
a part of that ship MUST be on an 'x'; it's impossible for a ship to land on two blanks (diagonals).

We make this choice with 2 scenarios:
  1) If a row is even (0,2,4...), then the column must also be even
  2) If a row is odd (1,3,5...), then the column must also be odd

We can now consider actions to build off this selection

## Targetting

Now that the computer has a coordinate, it determines its move based on these scenarios:
  1) The cell has already been hit ---> So it gets another 'choice'
  2) It is a hit AND it is the first hit ---> Now it knows that there must be another ship part
  3) There was a hit BEFORE ---> Now it just needs to check all cardinal directions from that hit and follow
 
Let's discuss (3) since that's what makes the algorithm 'smart'.

## CheckAround

Now that the computer has a hit, it needs to consider the following:
  1) Check each cardinal direction until theres another hit
  2) Follow through in that direction until theres a miss or out of bounds
  3) Go to the initial spot and go in the reverse direction of (1) 
      3a) So North + South, West + East
  4) Do (2) until it fails
  5) Review its short term memory of decisions from (1) - (4), and remove any coordinates
      from its memory that are associated with the now sunken ship
  6) If there are still coordinates in its memory, repeat (1) to (6) in this new coordinate
  7) When/if it fails, erase memory and start all over from 'Targetting'

This will guarantee that a ship will eventually sink with each sequential move. What checkAround
also considers is the account for connected ships at the origin attack.

___x1__ where x is origin attack
   |
   |
 __x2 another origin attack

So in this case, the algorithm will check up (out of bounds), then down, clear the vertical line since its 
sunk, then clear the horizontal in x1. It will then see that x2 is still exists after clearing x1 and its
consequent hits, then it will clear the horizontal line of x2. 

## Conclusion

I believe we can conclude that in comparing the worst case of random selection with this algorithm,
this algorithm will be nearly twice as fast and therefore more competitive against a player.
