

var solveSudoku = function(board) { 
    dfs(board);
  };
  
  function dfs(board) {
    const n = board.length;
    for (let row = 0; row < n; row++) {
      for (let col = 0; col < n; col++) {
        if (board[row][col] == '.') {
            
        for (let i = 1; i <= 9; i++) {
          c = i.toString();
          if (isValid(board, row, col, c)) {
            board[row][col] = c;
            if (dfs(board) == true) return true;
          }
        }
        
        board[row][col] = '.';
        return false;
      }
      }
    }
    return true;
  }
  
  function isValid(board, row, col, ch) {
    const n = board.length;
    for (let i = 0; i < n; i++) {
      if (board[row][i] == ch || board[i][col] == ch){
          return false;
      }
      const blkRow = Math.floor(row / 3) * 3 +  Math.floor(i / 3);
      const blkCol = Math.floor(col / 3) * 3 +  Math.floor(i % 3);
      if (board[blkRow][blkCol] == ch) return false;
    }
    return true;
  }