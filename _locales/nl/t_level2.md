### @hideIteration true
### @flyoutOnly true
# Missie 8 (level2-v1.3)

```template
player.onChat("jump", function() {
    CodeCosmos.start(Level.level3)
    AgentExtension.moveOne(FourDirection.Forward)
    AgentExtension.moveOne(FourDirection.Left)
    AgentExtension.moveOne(FourDirection.Right)
    AgentExtension.moveOne(FourDirection.Left)
    AgentExtension.moveOne(FourDirection.Back)
    while (CodeCosmos.isBlock(GRASS, FourDirection.Left)) {
        AgentExtension.moveOne(FourDirection.Right)
    }
    for (let index = 0; index < 6; index++) {
        AgentExtension.moveOne(FourDirection.Forward)
    }
    AgentExtension.moveOne(FourDirection.Left)
    if (CodeCosmos.isBlock(SANDSTONE, FourDirection.Forward)) {
        AgentExtension.moveOne(FourDirection.Left)
        blocks.place(SAND, AgentExtension.positionBelowAgent())
    }
    AgentExtension.moveOne(FourDirection.Left)
    for (let index = 0; index < 5; index++) {
        AgentExtension.moveOne(FourDirection.Right)
    }
    AgentExtension.moveOne(FourDirection.Right)
    for (let index = 0; index < 1; index++) {
        AgentExtension.moveOne(FourDirection.Forward)
    }
    AgentExtension.moveOne(FourDirection.Left)
    for (let index = 0; index < 7; index++) {
        AgentExtension.moveOne(FourDirection.Left)
        AgentExtension.moveOne(FourDirection.Back)
    }
    AgentExtension.moveOne(FourDirection.Back)
    AgentExtension.moveOne(FourDirection.Right)
    for (let index = 0; index < 9; index++) {
        if (CodeCosmos.isBlock(SAND, FourDirection.Right)) {
            AgentExtension.moveOne(FourDirection.Left)
            AgentExtension.moveOne(FourDirection.Left)
            blocks.place(DIORITE, AgentExtension.positionBelowAgent())
        }
    }
    CodeCosmos.checkLevel(Level.level3)
})
```
## Code debuggen
Volg de instructies op het leerplatform om de opdracht op te lossen.