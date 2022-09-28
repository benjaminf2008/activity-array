function doSomething () {
    doSomething()
}
input.onButtonPressed(Button.AB, function () {
    choice = randint(0, options.length - 1)
    basic.showString("" + (options[choice]))
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
