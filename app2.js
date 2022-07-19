let timeElem = document.querySelector('#time-block');
let selectElem = document.querySelector('select');

const timeZones = {
    'Asia/Aqtau': 'Asia/Aqtau',
    'Asia/Almaty': 'Asia/Almaty',
    'Asia/Hong_Kong': 'Asia/Hong_Kong',
    'America/Los_Angeles': 'America/Los_Angeles',
    'America/New_York': 'America/New_York',
    'Europe/Kiev': 'Europe/Kiev',
    'Europe/London': 'Europe/London',
    'Europe/Istanbul': 'Europe/Istanbul',
}

const selectedCity = () => {
    for (key in timeZones) {
        if (key == selectElem.value) {
            return key
        } else {
            continue
        }
    }
}

const showTime = () => {
    timeElem.innerHTML = new Date().toLocaleString('en-us', {
        timeZone: `${selectedCity()}`,
        timeStyle: 'medium',
        hourCycle: 'h23'
    })
}

setInterval(showTime, 1000)