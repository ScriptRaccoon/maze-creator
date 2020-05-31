import { Cell } from "./cell.js";
import { randEl } from "./helper.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const canvDim = [canvas.clientWidth, canvas.clientHeight];

export class Maze {
    constructor(size, wait) {
        this.cells = [];
        this.size = size;
        this.wait = wait;
        this.creating = false;
        this.scale = [canvDim[0] / size[0], canvDim[1] / size[1]];
        for (let i = 0; i < size[0]; i++) {
            for (let j = 0; j < size[1]; j++) {
                this.cells.push(new Cell([i, j], this.scale));
            }
        }
    }

    reset() {
        ctx.clearRect(0, 0, ...canvDim);
        this.cells.forEach((cell) => cell.reset());
    }

    cell(i, j) {
        return this.cells[i * this.size[1] + j];
    }

    draw(ctx) {
        this.cells.forEach((cell) => cell.draw(ctx));
    }

    neighbors(cell) {
        const neighbors = [];
        const x = cell.pos[0];
        const y = cell.pos[1];
        const addNeighbor = (u, v) => {
            if (u >= 0 && u < this.size[0] && v >= 0 && v < this.size[1]) {
                const c = this.cell(u, v);
                if (!c.visited) neighbors.push(c);
            }
        };
        addNeighbor(x - 1, y);
        addNeighbor(x + 1, y);
        addNeighbor(x, y + 1);
        addNeighbor(x, y - 1);
        return neighbors;
    }

    create() {
        const maze = this;
        if (maze.creating) return;
        maze.creating = true;
        const startCell = randEl(maze.cells);
        startCell.visited = true;
        let stack = [];
        let nextCell;
        let neighbors;
        maze.draw(ctx);
        calculateWith(startCell);
        function calculateWith(currentCell) {
            currentCell.color = "red";
            currentCell.draw(ctx);
            currentCell.color = "#000060";
            if (maze.cells.some((cell) => !cell.visited)) {
                neighbors = maze.neighbors(currentCell);
                if (neighbors.length == 0 && stack.length > 0) {
                    nextCell = stack.pop();
                } else {
                    nextCell = randEl(neighbors);
                    currentCell.removeLineBetween(nextCell);
                    stack.push(currentCell);
                    nextCell.visited = true;
                }
                setTimeout(() => {
                    currentCell.draw(ctx);
                    calculateWith(nextCell);
                }, maze.wait);
            } else {
                currentCell.draw(ctx);
                maze.creating = false;
            }
        }
    }
}
