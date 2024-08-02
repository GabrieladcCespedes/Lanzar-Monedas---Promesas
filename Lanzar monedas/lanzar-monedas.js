function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeads() {
    return new Promise((resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        while (headsCount < 5) {
            attempts++;
            let result = tossCoin();
            console.log(`${result} fue lanzado`);
            if (result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }
            if (attempts > 100) {
                reject("Demasiados intentos, más de 100");
                return;
            }
        }
        resolve(`Se necesitaron ${attempts} intentos para obtener cinco "caras"`);
    });
}

fiveHeads()
    .then(res => console.log(res))
    .catch(err => console.log(err));

console.log("¿Cuándo se ejecuta esto ahora?");
