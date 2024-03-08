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