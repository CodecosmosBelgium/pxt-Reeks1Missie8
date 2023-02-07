# Missie 8 (v1.2)

```template
player.onChat("level1", function() {
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
        agent.move(BACK, 1)
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
})
```
## Code debuggen
Volg de instructies op het leerplatform om de opdracht op te lossen.