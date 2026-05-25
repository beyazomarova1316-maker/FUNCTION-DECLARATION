function rəqəmSayi(ədəd) {
    let say = 0;

    while (ədəd > 0) {
        say++;
        ədəd = (ədəd / 10) | 0;
    }

    return say;
}

console.log(rəqəmSayi(12345)); 