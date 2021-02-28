var numButtons = [];

document.querySelector("#populate").addEventListener("click", populateBoard);

function populateBoard() {
    var max = Number(document.querySelector("#maxNumber").value);
    //Let's find out whether it is faster to remove the first child or the last child.
    //var before = Date.now();
    while (document.querySelector("#board").childElementCount !== 0) {
        document.querySelector("#board").removeChild(document.querySelector("#board").firstChild);
    }
    //var after = Date.now();
    //console.log(after - before);
    if (!isNaN(max)) {
        for (var i = 0; i <= max; i++) {
            numButtons[i] = document.createElement("button");
            numButtons[i].classList.add("number");
            numButtons[i].id = "" + i;
            numButtons[i].textContent = "" + i;
            numButtons[i].addEventListener("click", toggle);
            document.getElementById("board").appendChild(numButtons[i]);
        }
    }

    
}

function toggle() {
    if (this.classList.contains("off")) {
        this.classList.remove("off");
    }
    else {
        this.classList.add("off");
    }
}
