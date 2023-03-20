// debounce(func, delay): creates a debounced function that delays invoking func until after delay milliseconds have elapsed since the last time the debounced function was invoked.

function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          func.apply(this, args);
        }, delay);
    }
}