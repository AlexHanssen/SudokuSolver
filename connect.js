// ZZ

/*
1 access board values by selecting children of id = grid
2 call outer array=puzzle, call rows row 1 = puzzle [0] etc
3  use nested loop count when 


input and output:
var puzzle = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]];

sudoku(puzzle);


/* Should return:
[[5,3,4,6,7,8,9,1,2],
[6,7,2,1,9,5,3,4,8],
[1,9,8,3,4,2,5,6,7],
[8,5,9,7,6,1,4,2,3],
[4,2,6,8,5,3,7,9,1],
[7,1,3,9,2,4,8,5,6],
[9,6,1,5,3,7,2,8,4],
[2,8,7,4,1,9,6,3,5],
[3,4,5,2,8,6,1,7,9]] 

*/

//accesses the children of the div wrapper called grid in index.html
let nodes = document.getElementById('grid').childNodes;
let outputArray =[];
for (let i=0; i<nodes.length; i++) {
    let puzzle = [];
    for (let j=0; j<9; j++){
        let rowArray=[];
        console.log(nodes[i].innerHTML)
        rowArray.push(nodes[i].innerHTML);
        if (j===8){
            puzzle.push(rowArray)
        }
     }

outputArray = puzzle;
    }


