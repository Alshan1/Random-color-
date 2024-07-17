document.addEventListener('DOMContentLoaded', () => {
    const circleBtn = document.getElementById('circleBtn');
    const colorBoxContainer = document.getElementById('colorBoxContainer');
    const addColorBtns = document.querySelectorAll('.add-color-btn');
    let selectedColor = null;

    function addColorBox(color) {
        const newColorBox = document.createElement('div');
        newColorBox.className = 'color-box';
        newColorBox.style.backgroundColor = color;
        colorBoxContainer.appendChild(newColorBox);
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    addColorBtns.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('add-color-btn')) {
                const color = button.getAttribute('data-color');
                selectedColor = color;

                // Change button text to "Remove"
                button.textContent = 'Remove';
                button.classList.add('remove-color-btn');
                button.classList.remove('add-color-btn');

                // Update other buttons back to "Add"
                addColorBtns.forEach(btn => {
                    if (btn !== button) {
                        btn.textContent = 'Add';
                        btn.classList.add('add-color-btn');
                        btn.classList.remove('remove-color-btn');
                    }
                });
            } else {
                // Remove color selection
                selectedColor = null;
                button.textContent = 'Add';
                button.classList.add('add-color-btn');
                button.classList.remove('remove-color-btn');
            }
        });
    });

    circleBtn.addEventListener('click', () => {
        if (selectedColor) {
            addColorBox(selectedColor);
        } else {
            addColorBox(getRandomColor());
        }
    });
});