### @hideIteration true
### @flyoutOnly true
# Missie 8 (v1.3)

```blocks
player.onChat("level1", function() {
CodeCosmos.start(Level.level1)
    AgentExtension.move(FourDirection.Forward, 3)
    AgentExtension.move(FourDirection.Left, 2)
    AgentExtension.move(FourDirection.Back, 1)
    AgentExtension.move(FourDirection.Left, 1)
    AgentExtension.move(FourDirection.Back, 2)
    for (let index = 0; index < 4; index++) {
        AgentExtension.move(FourDirection.Left, 1)
    }
    AgentExtension.move(FourDirection.Forward, 1)
    AgentExtension.move(FourDirection.Forward, 1)
    while (CodeCosmos.isBlock(DIORITE, FourDirection.Left)) {
        AgentExtension.move(FourDirection.Left, 1)
    }
    while (CodeCosmos.isBlock(DIORITE, FourDirection.Forward)) {
        AgentExtension.move(FourDirection.Forward, 1)
    }
    AgentExtension.move(FourDirection.Right, 3)
    AgentExtension.move(FourDirection.Back, 2)
    if (CodeCosmos.isBlock(SANDSTONE, FourDirection.Right)) {
        agent.move(RIGHT, 1)
        blocks.place(DIORITE, AgentExtension.positionBelowAgent())
    } else {
    }
    if (CodeCosmos.isBlock(SANDSTONE, FourDirection.Right)) {
        agent.move(RIGHT, 1)
        blocks.place(DIORITE, AgentExtension.positionBelowAgent())
    }
    agent.move(RIGHT, 1)
    agent.move(FORWARD, 2)
    agent.move(RIGHT, 2)
    agent.move(BACK, 1)
    agent.move(RIGHT, 2)
    agent.move(FORWARD, 1)
    CodeCosmos.checkLevel(Level.level1)
})
```
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
        agent.move(LEFT, 1)
        blocks.place(DIORITE, AgentExtension.positionBelowAgent())
    } else {
        agent.move(FORWARD, 1)
    }
    if (CodeCosmos.isBlock(SANDSTONE, FourDirection.Right)) {
        agent.move(RIGHT, 2)
        blocks.place(DIORITE, AgentExtension.positionBelowAgent())
    }
    agent.move(LEFT, 1)
    agent.move(FORWARD, 3)
    agent.move(LEFT, 2)
    agent.move(BACK, 2)
    agent.move(RIGHT, 2)
    agent.move(BACK, 1)
    CodeCosmos.checkLevel(Level.level2)
})
```
## Code debuggen
Volg de instructies op het leerplatform om de opdracht op te lossen.