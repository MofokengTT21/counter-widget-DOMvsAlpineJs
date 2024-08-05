document.addEventListener('DOMContentLoaded', function() {
    const domCounter = document.getElementById('dom-counter');
    const decrementButton = document.querySelector('.decrement');
    const incrementButton = document.querySelector('.increment');
    const resetButton = document.querySelector('.reset');
    const max = 10;

    decrementButton.addEventListener('click', function() {
        let count = parseInt(domCounter.textContent);
        if (count > 0) {
            domCounter.textContent = count - 1;
        }
    });

    incrementButton.addEventListener('click', function() {
        let count = parseInt(domCounter.textContent);
        if (count < max) {
            domCounter.textContent = count + 1;
        }
    });

    resetButton.addEventListener('click', function() {
        domCounter.textContent = 0;
    });
});
