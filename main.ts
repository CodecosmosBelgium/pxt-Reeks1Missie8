player.onChat("jump", function() {
    AgentExtension.move(FourDirection.Forward, 3)
    AgentExtension.move(FourDirection.Left, 2)
    AgentExtension.move(FourDirection.Back, 1)
    AgentExtension.move(FourDirection.Left, 1)
    AgentExtension.move(FourDirection.Back, 2)

    for (let i = 0; i < 4; i++) {
        AgentExtension.move(FourDirection.Left, 1)
    }

    AgentExtension.move(FourDirection.Forward, 1)
    AgentExtension.move(FourDirection.Forward, 1)
    
})