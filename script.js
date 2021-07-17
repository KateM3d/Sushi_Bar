function opening() {
    const restOpening = new Date('October 1, 2021 00:00');
    const now = new Date();
    const diff = restOpening - now;


    const msSecond = 1000;
    const msMinute = 60 * 1000;
    const msHour = 60 * 60 * 1000;
    const msDay = 24 * 60 * 60 * 1000;

    const displayDay = Math.floor(diff / msDay);
    document.querySelector(".day").textContent = displayDay;

    const displayHour = Math.floor((diff % msDay) / msHour);
    document.querySelector(".hour").textContent = displayHour;


    const displayMinute = Math.floor((diff % msHour) / msMinute);
    document.querySelector(".minute").textContent = displayMinute;


    const displaySecond = Math.floor((diff % msMinute) / msSecond);
    document.querySelector(".second").textContent = displaySecond;


    if (diff <= 0) {
        document.querySelector(".day").textContent = 0;
        document.querySelector(".hour").textContent = 0;
        document.querySelector(".minute").textContent = 0;
        document.querySelector(".second").textContent = 0;
        clearInterval(timerID);
        newHeader();
    }

}

let timerID = setInterval(opening, 1000);


opening();

function newHeader() {
    const heading = document.querySelector('h3');
    heading.textContent = "We are open! ";
    heading.classList.add("red");
}