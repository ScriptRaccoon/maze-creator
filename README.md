# Maze creator

A visualization of the well-known backtracking algorithm for the creation of mazes.

Demo link: https://vbshz.codesandbox.io/

We start with a grid of cells which initially have walls on all of their sides. To create a maze, we start with a random cell and choose randomly one of its non-visited neighbors, removing the wall between them. We put the current cell on a stack and continue with the chosen neighbor in the same way. When at some point no neighbor can be found, we go back along the stack and try to find neighbors there. When every cell is visited, we are done.

For better visualization, the current cell is drawn red, all other visited cells are drawn blue. The walls are white.

In main.js you can configure the size of the maze as well as the waiting time in ms until the next cell is computed.
