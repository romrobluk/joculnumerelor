var semne = ['+', '-']

function redirect(url) {
    window.location.replace(url);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function showNumber(text) {
    document.getElementById('number').innerHTML = text;
}

function startGame() {
    var total = 0;
    for (x = 1; x < 11; x++) {
        if (x == 1) {
            sleep(3000 * x).then(() => {
                var number = Math.floor(Math.random() * 100);
                total = number;
                showNumber(number);
            });
            continue
        }
        sleep(3000 * x).then(() => {
            var semn = semne[Math.floor(Math.random() * semne.length)];
            var number = Math.floor(Math.random() * 100);
            if (semn == '+') {
                total = total + number;
            }
            if (semn == "-") {
                total = total - number;
            }
            showNumber(semn + number);
        });
    }
    sleep(3000 * 11).then(() => { redirect(`./guess.html?ex=-91827365&ab=123786511&encoded=true&n=${total}&numar=1802`) });
}

function getParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
}

function verify(numar) {
    if (numar == document.getElementById('guess').value) {
        redirect('./castig.html');
    }
    else {
        redirect('./pierdere.html');
    }
}