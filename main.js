import { Maze } from "./maze.js";

const size = [40, 40];
const wait = 20;

let maze = new Maze(size, wait);

canvas.addEventListener("click", () => {
    if (!maze.creating) {
        maze.reset();
        maze.create();
    }
});
