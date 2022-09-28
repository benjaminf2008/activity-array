function convertCtoF (C: number) {
    return C * 1.8 + 32
}
input.onButtonPressed(Button.A, function () {
    choice = randint(0, options.length - 1)
    basic.showString("" + (options[choice]))
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(convertCtoF(input.temperature()))
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature())
})
let choice = 0
let options: string[] = []
options = [
"eat some food",
"make some food",
"clean your room",
"do your homework",
"give food to someone else",
"read a book"
]
