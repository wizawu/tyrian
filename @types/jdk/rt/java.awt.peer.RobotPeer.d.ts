declare namespace java {
    namespace awt {
        namespace peer {
interface RobotPeer {
    mouseMove(arg0: int, arg1: int): void
    mousePress(arg0: int): void
    mouseRelease(arg0: int): void
    mouseWheel(arg0: int): void
    keyPress(arg0: int): void
    keyRelease(arg0: int): void
    getRGBPixel(arg0: int, arg1: int): int
    getRGBPixels(arg0: java.awt.Rectangle): int[]
    dispose(): void
}

        }
    }
}