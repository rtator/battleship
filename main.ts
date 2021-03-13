input.onButtonPressed(Button.A, function () {
    battleship.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    shot = game.createSprite(battleship.get(LedSpriteProperty.X), battleship.get(LedSpriteProperty.Y))
    shot.change(LedSpriteProperty.Y, -1)
    basic.pause(100)
    shot.change(LedSpriteProperty.Y, -1)
    basic.pause(100)
    shot.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    battleship.change(LedSpriteProperty.X, 1)
})
let shot: game.LedSprite = null
let battleship: game.LedSprite = null
let alien_1 = game.createSprite(0, 0)
let alien_2 = game.createSprite(1, 0)
let alien_3 = game.createSprite(2, 0)
let alien_4 = game.createSprite(3, 0)
let alien_5 = game.createSprite(4, 0)
let alien_6 = game.createSprite(0, 1)
let alien_7 = game.createSprite(1, 1)
let alien_8 = game.createSprite(2, 1)
let alien_9 = game.createSprite(3, 1)
let alien_10 = game.createSprite(4, 1)
battleship = game.createSprite(2, 4)
basic.forever(function () {
    if (alien_1.isTouching(shot)) {
        alien_1.delete()
        shot.delete()
    }
})
basic.forever(function () {
    if (alien_2.isTouching(shot)) {
        alien_2.delete()
        shot.delete()
    }
})
basic.forever(function () {
    if (alien_3.isTouching(shot)) {
        alien_3.delete()
        shot.delete()
    }
})
basic.forever(function () {
    if (alien_4.isTouching(shot)) {
        alien_4.delete()
        shot.delete()
    }
})
basic.forever(function () {
    if (alien_5.isTouching(shot)) {
        alien_5.delete()
        shot.delete()
    }
})
basic.forever(function () {
    if (alien_6.isTouching(shot)) {
        alien_6.delete()
        shot.delete()
    }
})
basic.forever(function () {
    if (alien_7.isTouching(shot)) {
        alien_7.delete()
        shot.delete()
    }
})
basic.forever(function () {
    if (alien_8.isTouching(shot)) {
        alien_8.delete()
        shot.delete()
    }
})
basic.forever(function () {
    if (alien_9.isTouching(shot)) {
        alien_9.delete()
        shot.delete()
    }
})
basic.forever(function () {
    if (alien_10.isTouching(shot)) {
        alien_10.delete()
        shot.delete()
    }
})
