function tərsƏdəd(ədəd) {
    let tərs = 0;

    while (ədəd > 0) {
        let rəqəm = ədəd % 10;
        tərs = tərs * 10 + rəqəm;
        ədəd = (ədəd / 10) | 0;
    }

    return tərs;
}

console.log(tərsƏdəd(1234)); 