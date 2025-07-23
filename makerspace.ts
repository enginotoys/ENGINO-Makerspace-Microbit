/**
 * Custom blocks for my extension
 */
//% weight=100 color=#0fbc11 icon="" block="ENGINO Makerspace"
namespace enginoMakerspace {
    
    /**
     * Say hello to someone
     * @param name the name to say hello to
     */
    //% block="say hello to %name"
    //% name.defl="World"
    export function sayHello(name: string): void {
        basic.showString("Hello " + name);
    }
    
    /**
     * Add two numbers together
     * @param a first number
     * @param b second number
     */
    //% block="add %a and %b"
    //% a.defl=0 b.defl=0
    export function addNumbers(a: number, b: number): number {
        return a + b;
    }
}
