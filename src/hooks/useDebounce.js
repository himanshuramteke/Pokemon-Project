function useDebounce(cb, delay = 2000) {
    let timerId;
    return (...args) => {
        console.log(timerId);
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            cb(...args);
        }, delay);
    }
}

export default useDebounce;