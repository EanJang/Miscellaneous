innerTableCompare(a, b, header) {
    let first = '';
    let second = '';
    const c = header.asc ? 1 : -1;
    let func = function(value) {
        return value.notificationMethods[0].sendMethod+value.notificationMethods[1].sendMethod+value.notificationMethods[2].sendMethod;
    }

    [first, second] = [a, b].map(value => func(value));
    return((first>second) - (second>first)) * c;
}