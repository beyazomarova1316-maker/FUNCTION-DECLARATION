function ədədlərinCemi(ədəd) {
    let cəm = 0;

    for (let i = 1; i <= ədəd; i++) {
        if (i % 2 === 0) {
            cəm += i;
        }
    }

    return cəm;
}

console.log(ədədlərinCemi(10)); 