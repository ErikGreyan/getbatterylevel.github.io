
"use strict";

window.addEventListener("load", () => {
    const level = document.querySelector(".level");
    const batteryInfo = document.querySelector(".battery_info");
    navigator.getBattery().then(function (battery) {
        level.style.width = battery.level * 100 + '%';
        batteryInfo.innerHTML = battery.level * 100 + '%';
    });
});