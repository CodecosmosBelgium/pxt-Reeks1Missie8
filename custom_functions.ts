//% color="#D83B01" weight=100 block="AgentExtension"
namespace AgentExtension {
    //% block="agent beweeg $dir met $amount"
    export function move(dir:SixDirection, amount:number) {
        let x = agent.getPosition().getValue(Axis.X)
        let y = agent.getPosition().getValue(Axis.Y) - 1
        let z = agent.getPosition().getValue(Axis.Z)
        for (let i = 0; i < amount; i++) {
            if (!blocks.testForBlock(AIR, world(x, y, z))) {
                agent.move(dir, 1)
            } else {
                player.execute("function levels/fall")
                agent.move(SixDirection.Down, 5)
            }
        }

    }
}

//% color=190 weight=100 block="CodeCosmos"
namespace CodeCosmos {
    //% block="controleerLevel"
    export function checkLevel() {
        if(agent.getPosition().toString()===world(161,112,347).toString()) {
            player.execute("function levels/done")
        } else {
            player.execute("function levels/wrong")
        }
    }

}