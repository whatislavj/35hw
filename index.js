function showRemainingTime() {
    let selectedDate = document.getElementById('selectedDate').value;

    if (selectedDate === "") {
        alert("Selectează o dată în viitor.");
        return;
    }

    let currentDate = new Date();
    let selectedDateTime = new Date(selectedDate);

    if (selectedDateTime <= currentDate) {
        alert("Selectează o dată în viitor.");
        return;
    }

    let timeDifference = selectedDateTime - currentDate;
    let daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    document.getElementById('result').innerHTML = "Timpul rămas până la data selectată: " + daysRemaining + " zile.";
}