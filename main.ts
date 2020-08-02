input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.clearScreen()
        basic.pause(500)
        basic.showIcon(IconNames.Heart)
    }
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("C D E F G A B C5 ", 120)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        `)
})
