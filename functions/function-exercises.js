function makeLine(size) {
    let line = "";
    for (i = 0; i < size; i++) {
        line += "#";
    }
    return line;
}

function makeSquare(box) {
    let square = "";
    for (let i = 0; i < box; i++) {
        square += (makeLine(box) + "\n");
    }
    return square.slice(0,-1);
}

function makeRectangle(width, height) {
    let rectangle = "";
    for (let i = 0; i <= height; i++) {
        rectangle += (makeLine(width) + "\n");
    }
    return rectangle.slice(0,-1);
}

function makeDownwardStairs (height) {
    let downwardStairs = "";
    for (let i = 1; i <= height; i++) {
        downwardStairs += (makeLine(i) + "\n");
    }
    return downwardStairs.slice(0,-1);
}

function makeSpaceLine(numSpaces, numChars) {
    let spaces = "";
    let chars = "";
    let output = "";
    for (let i = 0; i < numSpaces; i++) {
        spaces += "_";
    }
    for (let i = 0; i< numChars; i++) {
        chars += "#";
    }
    output = spaces + chars + spaces;
    return output;
}

function makeIsoscelesTriangle(height) {
    let triangle = "";
    let blankSpace = "";
    let triangleChars = "";
    for (let i = 0; i < height; i++) {
        let blankSpaceNumber = (height - i - 1);
        for (let j = 0; j < blankSpaceNumber; j++) {
            blankSpace += " ";
        }
        let triangleCharNumber = (2 * i + 1);
        for (let k = 0; k < triangleCharNumber; k++) {
            triangleChars += "#";
        }
        triangle += blankSpace + triangleChars + blankSpace + "\n";
        blankSpace = "";
        triangleChars = "";
    }
    return triangle.slice(0,-1);
}

function makeDiamond(height) {
    let diamond = makeIsoscelesTriangle(height);
    let reverseDiamond;

    reverseDiamond = diamond.split("\n").reverse().join("\n");
    diamond += "\n" + reverseDiamond;
    return diamond;
}

console.log(makeSquare(8));
console.log(makeRectangle(4,6));
console.log(makeDownwardStairs(6));
console.log(makeSpaceLine(6,10));
console.log(makeIsoscelesTriangle(16));
console.log(makeDiamond(10));