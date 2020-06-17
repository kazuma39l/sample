radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        if (じゃんけん1 == !(じゃんけん1 == 1 || じゃんけん1 == 2)) {
            basic.showIcon(IconNames.Happy)
        } else if (じゃんけん1 == 2) {
            basic.showIcon(IconNames.Angry)
        } else {
            basic.showIcon(IconNames.Asleep)
        }
    }
    if (receivedNumber == !(じゃんけん1 == 2 || じゃんけん1 == 3)) {
        if (じゃんけん1 == 1) {
            basic.showIcon(IconNames.Asleep)
        } else if (じゃんけん1 == 2) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Angry)
        }
    }
    if (receivedNumber == !(じゃんけん1 == 1 || じゃんけん1 == 3)) {
        if (じゃんけん1 == 1) {
            basic.showIcon(IconNames.Angry)
        } else if (じゃんけん1 == 2) {
            basic.showIcon(IconNames.Asleep)
        } else {
            basic.showIcon(IconNames.Happy)
        }
    }
    if (receivedNumber == (じゃんけん1 == 1 && じゃんけん1 == 2)) {
        if (じゃんけん1 == 1) {
            basic.showIcon(IconNames.Angry)
        } else if (じゃんけん1 == 2) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Asleep)
        }
    }
    if (receivedNumber == (じゃんけん1 == 2 && じゃんけん1 == 3)) {
        if (じゃんけん1 == 1) {
            basic.showIcon(IconNames.Asleep)
        } else if (じゃんけん1 == 2) {
            basic.showIcon(IconNames.Angry)
        } else {
            basic.showIcon(IconNames.Happy)
        }
    }
    if (receivedNumber == (じゃんけん1 == 1 && じゃんけん1 == 3)) {
        if (じゃんけん1 == 1) {
            basic.showIcon(IconNames.Happy)
        } else if (じゃんけん1 == 2) {
            basic.showIcon(IconNames.Asleep)
        } else {
            basic.showIcon(IconNames.Angry)
        }
    }
    if (じゃんけん1 == 1 && (じゃんけん1 == 2 && じゃんけん1 == 3)) {
        if (じゃんけん1 == 1) {
            basic.showIcon(IconNames.Asleep)
        } else if (じゃんけん1 == 2) {
            basic.showIcon(IconNames.Asleep)
        } else {
            basic.showIcon(IconNames.Asleep)
        }
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.SmallSquare)
    じゃんけん1 = 1
    radio.sendNumber(じゃんけん1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Scissors)
    じゃんけん1 = 3
    radio.sendNumber(じゃんけん1)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Chessboard)
    じゃんけん1 = 2
    radio.sendNumber(じゃんけん1)
})
let じゃんけん1 = 0
radio.setGroup(9)
basic.forever(function () {
	
})
