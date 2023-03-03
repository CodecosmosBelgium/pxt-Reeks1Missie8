### @hideIteration true
### @flyoutOnly true
# Missie 8 (level2-v1.3)

```template
player.onChat("jump", function() {
    CodeCosmosEN.start(Level.level3)
    AgentExtensionEN.moveOne(FourDirection.Forward)
    AgentExtensionEN.moveOne(FourDirection.Left)
    AgentExtensionEN.moveOne(FourDirection.Right)
    AgentExtensionEN.moveOne(FourDirection.Left)
    AgentExtensionEN.moveOne(FourDirection.Back)
    while (CodeCosmosEN.isBlock(GRASS, FourDirection.Left)) {
        AgentExtensionEN.moveOne(FourDirection.Right)
    }
    for (let index = 0; index < 6; index++) {
        AgentExtensionEN.moveOne(FourDirection.Forward)
    }
    AgentExtensionEN.moveOne(FourDirection.Left)
    if (CodeCosmosEN.isBlock(SANDSTONE, FourDirection.Forward)) {
        AgentExtensionEN.moveOne(FourDirection.Left)
        blocks.place(SAND, AgentExtensionEN.positionBelowAgent())
    }
    AgentExtensionEN.moveOne(FourDirection.Left)
    for (let index = 0; index < 5; index++) {
        AgentExtensionEN.moveOne(FourDirection.Right)
    }
    AgentExtensionEN.moveOne(FourDirection.Right)
    for (let index = 0; index < 1; index++) {
        AgentExtensionEN.moveOne(FourDirection.Forward)
    }
    AgentExtensionEN.moveOne(FourDirection.Left)
    for (let index = 0; index < 7; index++) {
        AgentExtensionEN.moveOne(FourDirection.Left)
        AgentExtensionEN.moveOne(FourDirection.Back)
    }
    AgentExtensionEN.moveOne(FourDirection.Back)
    AgentExtensionEN.moveOne(FourDirection.Right)
    for (let index = 0; index < 9; index++) {
        if (CodeCosmosEN.isBlock(SAND, FourDirection.Right)) {
            AgentExtensionEN.moveOne(FourDirection.Left)
            AgentExtensionEN.moveOne(FourDirection.Left)
            blocks.place(DIORITE, AgentExtensionEN.positionBelowAgent())
        }
    }
    CodeCosmosEN.checkLevel(Level.level3)
})
```
## Code debuggen
Use the learning platform to solve the exercise.