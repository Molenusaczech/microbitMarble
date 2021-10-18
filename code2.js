let X = 2
let Y = 2
basic.forever(function () {
    basic.clearScreen()
    led.plot(X, Y)
    if (input.rotation(Rotation.Pitch) > 30) {
        if (!(Y == 4)) {
            Y += 1
        }
    } else if (input.rotation(Rotation.Pitch) < -30) {
        if (!(Y == 0)) {
            Y += -1
        }
    }
    if (input.rotation(Rotation.Roll) > 30) {
        if (!(X == 4)) {
            X += 1
        }
    } else if (input.rotation(Rotation.Roll) < -30) {
        if (!(X == 0)) {
            X += -1
        }
    }
    control.waitMicros(1000000 - (Math.abs(input.rotation(Rotation.Pitch) * 5000) + Math.abs(input.rotation(Rotation.Pitch) * 5000)))
})
