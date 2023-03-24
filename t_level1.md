### @hideIteration true
### @flyoutOnly true
# Missie 8 (v1.3)


```template
player.onChat("level1", function() {
    CodeCosmosEN.start(LevelEN.level1)
    AgentExtensionEN.move(FourDirection.Forward, 3)
    AgentExtensionEN.move(FourDirection.Left, 2)
    AgentExtensionEN.move(FourDirection.Back, 2)
    AgentExtensionEN.move(FourDirection.Left, 1)
    AgentExtensionEN.move(FourDirection.Back, 3)
    for (let index = 0; index < 5; index++) {
        AgentExtensionEN.move(FourDirection.Left, 2)
    }
    AgentExtensionEN.move(FourDirection.Forward, 2)
    AgentExtensionEN.move(FourDirection.Forward, 2)
    while (CodeCosmosEN.isBlock(DIORITE, FourDirection.Right)) {
        AgentExtensionEN.move(FourDirection.Left, 1)
    }
    while (CodeCosmosEN.isBlock(DIORITE, FourDirection.Left)) {
        AgentExtensionEN.move(FourDirection.Right, 1)
    }
    AgentExtensionEN.move(FourDirection.Forward, 3)
    AgentExtensionEN.move(FourDirection.Back, 1)
    if (CodeCosmosEN.isBlock(SANDSTONE, FourDirection.Left)) {
        AgentExtensionEN.move(FourDirection.Left, 1)
        blocks.place(DIORITE, AgentExtensionEN.positionBelowAgent())
    } else {
        AgentExtensionEN.move(FourDirection.Forward, 1)
    }
    if (CodeCosmosEN.isBlock(SANDSTONE, FourDirection.Right)) {
        AgentExtensionEN.move(FourDirection.Right, 2)
        blocks.place(DIORITE, AgentExtensionEN.positionBelowAgent())
    }
    AgentExtensionEN.move(FourDirection.Left, 1)
    AgentExtensionEN.move(FourDirection.Forward, 3)
    AgentExtensionEN.move(FourDirection.Left, 2)
    AgentExtensionEN.move(FourDirection.Back, 2)
    AgentExtensionEN.move(FourDirection.Right, 2)
    AgentExtensionEN.move(FourDirection.Back, 1)
    CodeCosmosEN.checkLevel(LevelEN.level2)
})
```
## Code debuggen
Use the learning platform to solve the exercise.