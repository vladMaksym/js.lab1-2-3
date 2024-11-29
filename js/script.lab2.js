function cutText() {
    const blocks = document.querySelectorAll('.text-block');
    blocks.forEach(block => {
        let text = block.textContent.trim();
        if (text.length > 10) {
            block.textContent = text.substring(0, 10) + '...';
        }
    });
}

function replaceNegativeNumbers() {
    const tableCells = document.querySelectorAll('#numbersTable td');
    tableCells.forEach(cell => {
        let value = parseInt(cell.textContent, 10);
        if (value < 0) {
            const square = value * value;
            cell.textContent = square;
            cell.classList.add('negative');
        }
    });
}