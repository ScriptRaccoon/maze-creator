let selected = null;

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 5; j++) {
        $("<div></div>")
            .attr("id", `${i},${j}`)
            .addClass("cell")
            .appendTo(".grid")
            .click(function () {
                $(".cell").removeClass("selected");
                $(this).addClass("visited selected");
                selected = [i, j];
            });
    }
}

$(() => {
    document.addEventListener("keydown", (e) => {
        if (!selected) return;
        const [i, j] = selected;
        switch (e.key) {
            case "c":
                $(".cell")
                    .removeClass("visited")
                    .removeClass("selected");
                break;
            case "ArrowLeft":
                if (j > 0) {
                    const cellA = document.getElementById(
                        `${i},${j}`
                    );
                    const cellB = document.getElementById(
                        `${i},${j - 1}`
                    );
                    $(cellA).css("border-left-color", "transparent");
                    $(cellB).css("border-right-color", "transparent");
                }
                break;
            case "ArrowRight":
                if (j < 4) {
                    const cellA = document.getElementById(
                        `${i},${j}`
                    );
                    const cellB = document.getElementById(
                        `${i},${j + 1}`
                    );
                    $(cellA).css("border-right-color", "transparent");
                    $(cellB).css("border-left-color", "transparent");
                }
                break;
            case "ArrowUp":
                if (i > 0) {
                    const cellA = document.getElementById(
                        `${i},${j}`
                    );
                    const cellB = document.getElementById(
                        `${i - 1},${j}`
                    );
                    $(cellA).css("border-top-color", "transparent");
                    $(cellB).css(
                        "border-bottom-color",
                        "transparent"
                    );
                }
                break;
            case "ArrowDown":
                if (i < 3) {
                    const cellA = document.getElementById(
                        `${i},${j}`
                    );
                    const cellB = document.getElementById(
                        `${i + 1},${j}`
                    );
                    $(cellA).css(
                        "border-bottom-color",
                        "transparent"
                    );
                    $(cellB).css("border-top-color", "transparent");
                }
                break;
        }
    });
});
