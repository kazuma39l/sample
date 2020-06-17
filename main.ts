radio.onReceivedNumber(function (receivedNumber) {
    basic.pause(1000)
    if (じゃんけん1 == receivedNumber) {
        basic.showIcon(IconNames.Asleep)
        if (receivedNumber == !(receivedNumber == 1 || receivedNumber == 2)) {
            if (じゃんけん1 == 1) {
                basic.showIcon(IconNames.Happy)
            } else if (じゃんけん1 == 2) {
                basic.showIcon(IconNames.Angry)
            }
        }
        if (receivedNumber == !(receivedNumber == 2 || receivedNumber == 3)) {
            if (じゃんけん1 == 2) {
                basic.showIcon(IconNames.Happy)
            } else if (じゃんけん1 == 3) {
                basic.showIcon(IconNames.Angry)
            }
        }
        if (receivedNumber == !(receivedNumber == 1 || receivedNumber == 3)) {
            if (じゃんけん1 == 1) {
                basic.showIcon(IconNames.Angry)
            } else if (じゃんけん1 == 2) {
                basic.showIcon(IconNames.Happy)
            }
        }
        if (receivedNumber == (receivedNumber == 1 && receivedNumber == 2)) {
            if (じゃんけん1 == 1) {
                basic.showIcon(IconNames.Angry)
            } else if (じゃんけん1 == 2) {
                basic.showIcon(IconNames.Happy)
            }
        }
        if (receivedNumber == (receivedNumber == 2 && receivedNumber == 3)) {
            if (じゃんけん1 == 2) {
                basic.showIcon(IconNames.Angry)
            } else if (じゃんけん1 == 3) {
                basic.showIcon(IconNames.Happy)
            }
        }
        if (receivedNumber == (receivedNumber == 1 && receivedNumber == 3)) {
            if (じゃんけん1 == 1) {
                basic.showIcon(IconNames.Happy)
            } else if (じゃんけん1 == 3) {
                basic.showIcon(IconNames.Angry)
            }
        }
        if (じゃんけん1 == receivedNumber) {
            basic.showIcon(IconNames.Asleep)
        } else if (じゃんけん1 == 1 && (receivedNumber == 2 && receivedNumber == 3)) {
            basic.showIcon(IconNames.Asleep)
        } else if (じゃんけん1 == 2 && (receivedNumber == 1 && receivedNumber == 3)) {
            basic.showIcon(IconNames.Asleep)
        } else if (じゃんけん1 == 3 && (receivedNumber == 1 && receivedNumber == 2)) {
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
