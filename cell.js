export class Cell {
    constructor(pos, scale) {
        this.scale = scale;
        this.pos = pos;
        this.walls = { left: true, right: true, bottom: true, top: true };
        this.visited = false;
        this.color = "#000060";
    }

    reset() {
        this.walls.left = true;
        this.walls.right = true;
        this.walls.top = true;
        this.walls.bottom = true;
        this.visited = false;
    }

    draw(ctx) {
        const scale = this.scale;

        if (this.visited) {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.pos[0] * scale[0], this.pos[1] * scale[1], scale[0], scale[1]);
        }
        ctx.strokeStyle = "#EEE";

        if (this.walls.left) {
            ctx.beginPath();
            ctx.moveTo(this.pos[0] * scale[0], this.pos[1] * scale[1]);
            ctx.lineTo(this.pos[0] * scale[0], (this.pos[1] + 1) * scale[1]);
            ctx.stroke();
        }
        if (this.walls.right) {
            ctx.beginPath();
            ctx.moveTo((this.pos[0] + 1) * scale[0], this.pos[1] * scale[1]);
            ctx.lineTo((this.pos[0] + 1) * scale[0], (this.pos[1] + 1) * scale[1]);
            ctx.stroke();
        }
        if (this.walls.bottom) {
            ctx.beginPath();
            ctx.moveTo(this.pos[0] * scale[0], (this.pos[1] + 1) * scale[1]);
            ctx.lineTo((this.pos[0] + 1) * scale[0], (this.pos[1] + 1) * scale[1]);
            ctx.stroke();
        }
        if (this.walls.top) {
            ctx.beginPath();
            ctx.moveTo(this.pos[0] * scale[0], this.pos[1] * scale[1]);
            ctx.lineTo((this.pos[0] + 1) * scale[0], this.pos[1] * scale[1]);
            ctx.stroke();
        }
    }

    removeLineBetween(cellB) {
        const cellA = this;
        if (cellA.pos[0] == cellB.pos[0]) {
            if (cellA.pos[1] == cellB.pos[1] + 1) {
                cellA.walls.top = false;
                cellB.walls.bottom = false;
                return;
            } else if (cellA.pos[1] + 1 == cellB.pos[1]) {
                cellB.walls.top = false;
                cellA.walls.bottom = false;
                return;
            }
        } else if (cellA.pos[1] == cellB.pos[1]) {
            if (cellA.pos[0] == cellB.pos[0] + 1) {
                cellA.walls.left = false;
                cellB.walls.right = false;
                return;
            } else if (cellA.pos[0] + 1 == cellB.pos[0]) {
                cellB.walls.left = false;
                cellA.walls.right = false;
                return;
            }
        }
    }
}
