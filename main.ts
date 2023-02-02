loops.forever(function () {
    if (blocks.testForBlock(AIR, positions.add(
    agent.getPosition(),
    world(0, -1, 0)
    ))) {
        agent.move(DOWN, 1)
    }
})
