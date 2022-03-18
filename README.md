# Maze creator

A visualization of the well-known backtracking algorithm for the creation of mazes.

Demo: https://mazecreator.netlify.app/

We start with a grid of cells which initially have walls on all of their sides. To create a maze, we start with a random cell and choose randomly one of its non-visited neighbors, removing the wall between them. We put the current cell on a stack and continue with the chosen neighbor in the same way. When at some point no neighbor can be found, we go back along the stack and try to find neighbors there. When every cell is visited, we are done.

For better visualization, the current cell is drawn red, all other visited cells are drawn blue. The walls are white.

Via the menu above the canvas you can adjust the delay for the computation of the next cell as well as the size of the maze.
