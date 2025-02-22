namespace SpriteKind {
    export const АПТЕЧКА = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.АПТЕЧКА, function (sprite, otherSprite) {
    otherSprite.setFlag(SpriteFlag.Invisible, true)
    info.changeLifeBy(2)
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
    pause(5000)
    otherSprite.setFlag(SpriteFlag.Invisible, false)
    otherSprite.setPosition(randint(10, 150), randint(10, 110))
    info.startCountdown(20)
})
info.onCountdownEnd(function () {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.dissolve)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.setFlag(SpriteFlag.Invisible, true)
    info.changeScoreBy(1)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    pause(500)
    otherSprite.setFlag(SpriteFlag.Invisible, false)
    otherSprite.setPosition(randint(10, 150), randint(10, 110))
    info.startCountdown(20)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.setFlag(SpriteFlag.Invisible, true)
    info.changeLifeBy(-1)
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
    pause(500)
    otherSprite.setFlag(SpriteFlag.Invisible, false)
    otherSprite.setPosition(randint(10, 150), randint(10, 110))
    info.startCountdown(20)
})
scene.setBackgroundColor(7)
let Обезьяна = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . . . 
    c c c c c d d e e e f c . . . . 
    . f d d d d e e e f f . . . . . 
    . . f f f f f e e e e f . . . . 
    . . . . f f e e e e e e f . f f 
    . . . f e e f e e f e e f . e f 
    . . f e e f e e f e e e f . e f 
    . f b d f d b f b b f e f f e f 
    . f d d f d d f d d b e f f f f 
    . . f f f f f f f f f f f f f . 
    `, SpriteKind.Player)
Обезьяна.setPosition(114, 53)
info.setLife(3)
controller.moveSprite(Обезьяна)
let Банан = sprites.create(img`
    . . . . . . . . . . . f f f . . 
    . . . . . . . . . . . f f f f . 
    . . . . . . . . . . . f 1 5 f . 
    . . . . . . . . . . . f 1 5 f . 
    . . . . . . . . . . f 1 1 5 f f 
    . . . . . . . . . . f 1 5 5 5 f 
    . . . . . . . . . . f 1 5 5 5 f 
    . . . . . . . . . f 1 1 5 5 5 f 
    . . . . . . . f f 1 1 5 5 5 5 f 
    . . . . f f f 5 5 5 5 5 5 5 4 f 
    . f f f 5 5 5 5 5 5 5 5 5 4 4 f 
    f 5 5 5 5 5 5 5 5 5 5 4 4 4 f . 
    . f 5 5 5 5 5 5 5 4 4 4 4 f . . 
    . . f 5 5 4 4 4 4 4 4 f f . . . 
    . . . f f f 4 4 4 f f . . . . . 
    . . . . . . f f f . . . . . . . 
    `, SpriteKind.Food)
Банан.setPosition(40, 64)
info.setScore(0)
let ОСТРЫЙ_БАНАН = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . f . . 
    . . . . . . . . . . . . . f . . 
    . . . . . . . . . . . f f f . . 
    . . . . . . . . . f f f 2 f . . 
    . . . . . . . . f f 5 5 f f . . 
    . . . . . . f f f 2 5 f f . . . 
    . . . . . f f 5 5 2 f f . . . . 
    . . . . f f 2 5 f f . . . . . . 
    . . . f f 5 5 f f . . . . . . . 
    . . f 5 5 2 f f . . . . . . . . 
    . . f 2 f f f . . . . . . . . . 
    . . f f f . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
ОСТРЫЙ_БАНАН.setPosition(43, 21)
let ОСТРЫЙ_БАНАН_2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . f . . 
    . . . . . . . . . . . . . f . . 
    . . . . . . . . . . . f f f . . 
    . . . . . . . . . f f f 2 f . . 
    . . . . . . . . f f 5 5 f f . . 
    . . . . . . f f f 2 5 f f . . . 
    . . . . . f f 5 5 2 f f . . . . 
    . . . . f f 2 5 f f . . . . . . 
    . . . f f 5 5 f f . . . . . . . 
    . . f 5 5 2 f f . . . . . . . . 
    . . f 2 f f f . . . . . . . . . 
    . . f f f . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
ОСТРЫЙ_БАНАН_2.setPosition(143, 106)
let ОСТРЫЙ_БАНАН_3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . f . . 
    . . . . . . . . . . . . . f . . 
    . . . . . . . . . . . f f f . . 
    . . . . . . . . . f f f 2 f . . 
    . . . . . . . . f f 5 5 f f . . 
    . . . . . . f f f 2 5 f f . . . 
    . . . . . f f 5 5 2 f f . . . . 
    . . . . f f 2 5 f f . . . . . . 
    . . . f f 5 5 f f . . . . . . . 
    . . f 5 5 2 f f . . . . . . . . 
    . . f 2 f f f . . . . . . . . . 
    . . f f f . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
ОСТРЫЙ_БАНАН_2.setPosition(83, 9)
let АПТЕЧКА = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 2 2 1 2 2 2 2 2 . . . 
    . . . 2 2 2 2 1 2 2 2 2 2 . . . 
    . . . 2 2 1 1 1 1 1 2 2 2 . . . 
    . . . 2 2 2 2 1 2 2 2 2 2 . . . 
    . . . 2 2 2 2 1 2 2 2 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.АПТЕЧКА)
