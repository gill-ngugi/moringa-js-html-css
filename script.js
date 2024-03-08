document.getElementById('birthdateForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const birthdate = new Date(document.getElementById('birthdate').value);
    const gender = document.getElementById('gender').value;

    if (isValidDate(birthdate)) {
        const dayOfWeek = calculateDayOfWeek(birthdate);
        const akanName = getAkanName(dayOfWeek, gender);
        document.getElementById('result').innerText = `Your Akan name is ${akanName}`;
    } else {
        alert('Please enter a valid birthdate.');
    }
});

function isValidDate(date) {
    return date instanceof Date && !isNaN(date);
}

function calculateDayOfWeek(birthdate) {
    const CC = Math.floor(birthdate.getFullYear() / 100);
    const YY = birthdate.getFullYear() % 100;
    const MM = birthdate.getMonth() + 1;
    const DD = birthdate.getDate();

    let dayOfWeek = (Math.floor(CC / 4) - 2 * CC - 1 + Math.floor(5 * YY / 4) + Math.floor(26 * (MM + 1) / 10) + DD) % 7;
    if (dayOfWeek < 0) {
        dayOfWeek += 7;
    }
    return dayOfWeek;
}

function getAkanName(dayOfWeek, gender) {
    const maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    const femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

    if (gender === 'male') {
        return maleNames[dayOfWeek];
    } else {
        return femaleNames[dayOfWeek];
    }
}
