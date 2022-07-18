let hoursElem = document.querySelector('#hours-elem');
let minutesElem = document.querySelector('#minutes-elem');
let secondsElem = document.querySelector('#seconds-elem');
let selectElem = document.querySelector('select');

const timeZones = {
    'Kyiv': '+3',
    'Astana': '+6',
    'New-York': '-4',
    'Beijing': '+8',
    'London': '+1',
    'LA': '-7',
}

function selectedCity() {
    for (key in timeZones) {
        if (key == selectElem.value) {
            return key
        } else {
            continue
        }
    }
}

// +timeZones[`${selectedCity()}`]

function calcTimeZone(offset) {
    let date = new Date()

    let hours = date.getUTCHours() + offset
    hoursElem.innerHTML = hours;

    let utcMinutes = date.getUTCMinutes()
    minutesElem.innerHTML = utcMinutes;

    let utcSeconds = date.getUTCSeconds()
    secondsElem.innerHTML = utcSeconds;


    if (utcSeconds < 10) {
        secondsElem.innerHTML = `0${utcSeconds}`
    } else {
        secondsElem.innerHTML = utcSeconds
    }
    if (utcMinutes < 10) {
        minutesElem.innerHTML = `0${utcMinutes}`
    } else {
        minutesElem.innerHTML = utcMinutes
    }
    if (hours < 10) {
        hoursElem.innerHTML = `0${hours}`
    } else {
        hoursElem.innerHTML = hours
    }
    setTimeout(() => {
        calcTimeZone(+timeZones[`${selectedCity()}`])
    }, 1000)
}

calcTimeZone(+timeZones[`${selectedCity()}`])