let roadMines = [false, false, false, true, false, false, true, false, false, false, false, false, true, false, false];
let position = 3;

for (let i = 0; i < roadMines.length; ++i) {
    if (roadMines[i] == true ) {
        position -= 1;
        if (position == 1) {
            console.log (`Танк переместился на позицию ${i + 1}, Танк поврежден`);
        } if (position == 2) {
            console.log (`Танк переместился на позицию ${i + 1}, Танк поврежден`);
        } else if (position == 0) {
            console.log (`Танк переместился на позицию ${i + 1}, Танк уничтожен`);
            break;
        } else {
            console.log (`Танк переместился на позицию ${i + 1}`)
        }
    } else {
        console.log(`Танк переместился на позицию ${i + 1}`);
    }
}