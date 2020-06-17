let 相手の手 = 0
let じゃんけん1 = 0
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        相手の手 = 1
    } else if (receivedNumber == 2) {
        相手の手 = 2
    } else {
        相手の手 = 3
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
basic.forever(function () {
    radio.setGroup(9)
    basic.pause(500)
    if (じゃんけん1 == 0) {
        basic.showIcon(IconNames.Asleep)
        if (相手の手 == 1) {
            if (じゃんけん1 == 2) {
                basic.showIcon(IconNames.Happy)
            } else if (じゃんけん1 == 3) {
                basic.showIcon(IconNames.Angry)
            }
        }
        if (0 == 2) {
            if (じゃんけん1 == 3) {
                basic.showIcon(IconNames.Happy)
            } else if (じゃんけん1 == 1) {
                basic.showIcon(IconNames.Angry)
            }
        }
    }
    if (0 == 3) {
        if (じゃんけん1 == 1) {
            basic.showIcon(IconNames.Angry)
        } else if (じゃんけん1 == 2) {
            basic.showIcon(IconNames.Happy)
        }
    }
    if (0 == 1 && 0 == 2) {
        if (じゃんけん1 == 1) {
            basic.showIcon(IconNames.Angry)
        } else if (じゃんけん1 == 2) {
            basic.showIcon(IconNames.Happy)
        }
    }
    if (0 == 2 && 0 == 3) {
        if (じゃんけん1 == 2) {
            basic.showIcon(IconNames.Angry)
        } else if (じゃんけん1 == 3) {
            basic.showIcon(IconNames.Happy)
        }
    }
    if (0 == (0 == 1 && 0 == 3)) {
        if (じゃんけん1 == 1) {
            basic.showIcon(IconNames.Happy)
        } else if (じゃんけん1 == 3) {
            basic.showIcon(IconNames.Angry)
        }
    }
    if (じゃんけん1 == 0) {
        basic.showIcon(IconNames.Asleep)
    } else if (じゃんけん1 == 1 && (0 == 2 && 0 == 3)) {
        basic.showIcon(IconNames.Asleep)
    } else if (じゃんけん1 == 2 && (0 == 1 && 0 == 3)) {
        basic.showIcon(IconNames.Asleep)
    } else if (じゃんけん1 == 3 && (0 == 1 && 0 == 2)) {
        basic.showIcon(IconNames.Asleep)
    }
})
