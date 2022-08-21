function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    } else {
        return getPin();
    }
}

function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}
document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})
//calculator part
document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typedNumberFiled = document.getElementById('typed-number');
    const previousTypedNumber = typedNumberFiled.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typedNumberFiled.value = '';
        } //remove last digits fron typed number when press <
        else if (number === '<') {
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberFiled.value = remainingDigits;
        }
    } else {

        //ek er odhik number k pashapashi boshaite

        const newTypeNumber = previousTypedNumber + number;
        typedNumberFiled.value = newTypeNumber;
    }

})

document.getElementById('verify-pin').addEventListener('click', function () {
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typedNumberFiled = document.getElementById('typed-number');
    const typedNumber = typedNumberFiled.value;
    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');

    if (typedNumber === currentPin) {

        pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';
    } else {

        pinFailureMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
})