### @hideIteration true
### @flyoutOnly true
# Missie 8 (v1.2)

```template
player.onChat("jump", function() {
    CodeCosmos.start(Level.level2)
    AgentExtension.moveOne(FourDirection.Left)
    AgentExtension.moveOne(FourDirection.Forward)
    AgentExtension.moveOne(FourDirection.Left)
    AgentExtension.moveOne(FourDirection.Left)
    AgentExtension.moveOne(FourDirection.Back)
    while (CodeCosmos.isBlock(SANDSTONE, FourDirection.Left)) {
        AgentExtension.moveOne(FourDirection.Left)
    }
    for (let index = 0; index < 7; index++) {
        AgentExtension.moveOne(FourDirection.Forward)
    }
    AgentExtension.moveOne(FourDirection.Right)
    if (CodeCosmos.isBlock(SANDSTONE, FourDirection.Right)) {
        AgentExtension.moveOne(FourDirection.Right)
        blocks.place(DIORITE, AgentExtension.positionBelowAgent())
    }
    AgentExtension.moveOne(FourDirection.Right)
    for (let index = 0; index < 2; index++) {
        AgentExtension.moveOne(FourDirection.Right)
    }
    AgentExtension.moveOne(FourDirection.Left)
    for (let index = 0; index < 3; index++) {
        AgentExtension.moveOne(FourDirection.Back)
    }
    AgentExtension.moveOne(FourDirection.Right)
    for (let index = 0; index < 6; index++) {
        AgentExtension.moveOne(FourDirection.Right)
        AgentExtension.moveOne(FourDirection.Forward)
    }
    AgentExtension.moveOne(FourDirection.Forward)
    AgentExtension.moveOne(FourDirection.Forward)
    for (let index = 0; index < 8; index++) {
        if (CodeCosmos.isBlock(SANDSTONE, FourDirection.Right)) {
            AgentExtension.moveOne(FourDirection.Right)
            blocks.place(DIORITE, AgentExtension.positionBelowAgent())
        }
    }
})
```
## Code debuggen
Volg de instructies op het leerplatform om de opdracht op te lossen.