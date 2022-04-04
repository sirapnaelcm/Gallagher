controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpacePlane, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let Bogey: Sprite = null
let projectile: Sprite = null
let SpacePlane: Sprite = null
scene.setBackgroundColor(1)
SpacePlane = sprites.create(img`
    ..ccc.........ffffff....
    ..facc.......fcc88ff....
    ..faacc...fffccccff.....
    ..f8aacccc88884aa8cc....
    ..f88acc88888888aab9c...
    ..cf8888888888888b999c..
    .c88c888888888b11199b8c.
    f88ccccccc888899111b888c
    fffffcc888c888888888888f
    .....f8888aa8888888888f.
    ....f8888aafc8888888ff..
    ...c8888aaffffffffff....
    ...c8888cfffc8f.........
    ...ffffffff8ccf.........
    .......ffff8cf..........
    ........fffff...........
    `, SpriteKind.Player)
controller.moveSprite(SpacePlane, 200, 200)
SpacePlane.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(500, function () {
    Bogey = sprites.create(img`
        ....ffffff.........ccc..
        ....ffaaccf.......cc8f..
        .....ffccccfff...cc88f..
        ....cca888aaaacccc88af..
        ...c9b88aaaaaaaacc8aaf..
        ..c999baaaaaaaaaaaaafc..
        .cab99111baaaaaaaaacaac.
        caaab11199aaaacccccccaaf
        faaaaaaaaaaaacaaaccfffff
        .faaaaaaaaaa88aaaaf.....
        ..ffaaaaaaacf88aaaaf....
        ....ffffffffff88aaaac...
        .........facfffcaaaac...
        .........fccaffffffff...
        ..........fcaffff.......
        ...........fffff........
        `, SpriteKind.Enemy)
    Bogey.setVelocity(-100, 0)
    Bogey.setPosition(160, randint(5, 115))
    Bogey.setFlag(SpriteFlag.AutoDestroy, true)
})
