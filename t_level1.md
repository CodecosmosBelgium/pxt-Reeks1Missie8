### @hideIteration true
### @flyoutOnly true
# Missie 8 (v1.3)


```template
player.onChat("level1", function() {
    CodeCosmos.start(Level.level1)
    AgentExtension.move(FourDirection.Forward, 3)
    AgentExtension.move(FourDirection.Left, 2)
    AgentExtension.move(FourDirection.Back, 2)
    AgentExtension.move(FourDirection.Left, 1)
    AgentExtension.move(FourDirection.Back, 3)
    for (let index = 0; index < 5; index++) {
        AgentExtension.move(FourDirection.Left, 2)
    }
    AgentExtension.move(FourDirection.Forward, 2)
    AgentExtension.move(FourDirection.Forward, 2)
    while (CodeCosmos.isBlock(DIORITE, FourDirection.Right)) {
        AgentExtension.move(FourDirection.Left, 1)
    }
    while (CodeCosmos.isBlock(DIORITE, FourDirection.Left)) {
        AgentExtension.move(FourDirection.Right, 1)
    }
    AgentExtension.move(FourDirection.Forward, 3)
    AgentExtension.move(FourDirection.Back, 1)
    if (CodeCosmos.isBlock(SANDSTONE, FourDirection.Left)) {
        AgentExtension.move(FourDirection.Left, 1)
        blocks.place(DIORITE, AgentExtension.positionBelowAgent())
    } else {
        AgentExtension.move(FourDirection.Forward, 1)
    }
    if (CodeCosmos.isBlock(SANDSTONE, FourDirection.Right)) {
        AgentExtension.move(FourDirection.Right, 2)
        blocks.place(DIORITE, AgentExtension.positionBelowAgent())
    }
    AgentExtension.move(FourDirection.Left, 1)
    AgentExtension.move(FourDirection.Forward, 3)
    AgentExtension.move(FourDirection.Left, 2)
    AgentExtension.move(FourDirection.Back, 2)
    AgentExtension.move(FourDirection.Right, 2)
    AgentExtension.move(FourDirection.Back, 1)
    CodeCosmos.checkLevel(Level.level2)
})
```
## Code debuggen
Volg de instructies op het leerplatform om de opdracht op te lossen.