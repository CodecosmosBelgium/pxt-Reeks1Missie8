//% color="#D83B01" weight=100 block="AgentExtension"
namespace AgentExtension {
    //% block="agent beweeg $dir met $amount" block.loc.nl="jowkens $dir $amount"
    export function move(dir:FourDirection, amount:number) {
        for (let i = 0; i < amount; i++) {
            let x = agent.getPosition().getValue(Axis.X)
            let y = agent.getPosition().getValue(Axis.Y) - 1
            let z = agent.getPosition().getValue(Axis.Z)
            if (!blocks.testForBlock(AIR, world(x, y, z))) {
                agent.move(dir, 1)
            } else {
                agent.move(SixDirection.Down, 5)
                player.execute("function levels/fall")
            }
        }
    }
}

//% color=190 weight=100 block="CodeCosmos"
namespace CodeCosmos {
    //% block="zetKlaar"
    //% block.loc.nl="zetKlaar NL"
    export function start() {
        agent.teleport(world(153,112,327), CompassDirection.South)
    }
    //% block="controleerLevel"
    export function checkLevel() {
        if(agent.getPosition().toString()===world(161,112,347).toString()) {
            player.execute("function levels/done")
        } else {
            player.execute("function levels/wrong")
        }
    }

    //% block="is er een $block $dir van de agent"
    export function isBlock(block:Block,dir:FourDirection) {
        let x = agent.getPosition().getValue(Axis.X)
        let y = agent.getPosition().getValue(Axis.Y) - 1
        let z = agent.getPosition().getValue(Axis.Z)

        switch (dir) {
            case FourDirection.Forward: return blocks.testForBlock(block, world(x, y, z + 1))
            case FourDirection.Back: return blocks.testForBlock(block, world(x, y, z - 1))
            case FourDirection.Left: return blocks.testForBlock(block, world(x + 1, y, z))
            case FourDirection.Right: return blocks.testForBlock(block, world(x - 1, y, z))
            default: return false;
        }
    }
}