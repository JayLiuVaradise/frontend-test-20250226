const fn = () => {
    console.log('this is branch feature/20250227');
    console.log('This line added by new-test-branch');


}

fn();


const debounce = (callback, wait) => {
    let timeoutId = null;
    return (...arg) => {
        if (timeoutId !== null) return;
        timeoutId = setTimeout(() => {
            callback(arg);
        }, wait);
    }
}