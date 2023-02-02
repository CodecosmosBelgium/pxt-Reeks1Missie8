let x = 0
let y = 0
let z = 0
loops.forever(function () {
    x = agent.getPosition().getValue(Axis.Y)
    y = agent.getPosition().getValue(Axis.Y) - 1
    z = agent.getPosition().getValue(Axis.Y)
    if (blocks.testForBlock(AIR, world(x, y, z))) {
        agent.move(DOWN, 1)
    }
})
