

//% color="#D83B01" weight=100 block="AgentExtension"
namespace AgentExtension {


    //% block="agent beweeg $dir met $amount"
    export function checkLevel(dir:SixDirection, amount:number) {
        let x = agent.getPosition().getValue(Axis.X)
        let y = agent.getPosition().getValue(Axis.Y) - 1
        let z = agent.getPosition().getValue(Axis.Z)
        if (!blocks.testForBlock(AIR, world(x, y, z))) {
            agent.move(dir, amount)
        } else {
            agent.move(SixDirection.Down, 5)
        }
    }

}