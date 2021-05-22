input.onButtonPressed(Button.A, function () {
    basic.showNumber(randint(2, 9))
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(randint(15, 17))
})
basic.forever(function () {
    basic.showNumber(1)
})
