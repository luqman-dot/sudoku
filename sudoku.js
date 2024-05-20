// sudoku.js

// Sample Sudoku puzzle (0 represents empty cells)
const samplePuzzle = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('sudoku-grid');
    const newGameButton = document.getElementById('new-game-button');
    const checkSolutionButton = document.getElementById('check-solution-button');

    function createGrid() {
        grid.innerHTML = '';
        for (let i = 0; i < 9; i++) {
            const row = document.createElement('tr');
            for (let j = 0; j < 9; j++) {
                const cell = document.createElement('td');
                const input = document.createElement('input');
                input.type = 'text';
                input.maxLength = '1';

                if (samplePuzzle[i][j] !== 0) {
                    input.value = samplePuzzle[i][j];
                    input.disabled = true;
                }

                cell.appendChild(input);
                row.appendChild(cell);
            }
            grid.appendChild(row);
        }
    }

    function checkSolution() {
        const cells = document.querySelectorAll('td input');
        let isValid = true;

        cells.forEach((input, index) => {
            const value = input.value;
            const row = Math.floor(index / 9);
            const col = index % 9;
            if (value != samplePuzzle[row][col] && samplePuzzle[row][col] != 0) {
                isValid = false;
                input.style.color = 'red';
            } else {
                input.style.color = 'black';
            }
        });

        if (isValid) {
            alert('Congratulations! You solved the puzzle.');
        } else {
            alert('There are errors in the puzzle.');
        }
    }

    newGameButton.addEventListener('click', createGrid);
    checkSolutionButton.addEventListener('click', checkSolution);

    createGrid();  // Initialize the grid when the page loads
});
