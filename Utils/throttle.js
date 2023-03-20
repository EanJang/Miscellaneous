// throttle(func, delay): creates a throttled function that only invokes func at most once every delay milliseconds.

function throttle(func, delay) {
    let lastCallTime = 0;
    return function(...args) {
        const now = Date.now();
        if (now - lastCallTime >= delay) {
            func.apply(this, args)
        }
    }
}