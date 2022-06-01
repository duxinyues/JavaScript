export function defaultCompare(a, b) {
    if (a === b) {
        return 0;
    }
    return a < b ? -1 : 1;
}

export function swap(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]]
}