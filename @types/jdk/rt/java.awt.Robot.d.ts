declare namespace java {
    namespace awt {
class Robot {
    public constructor()
    public constructor(arg0: java.awt.GraphicsDevice)
    public mouseMove(arg0: int, arg1: int): void
    public mousePress(arg0: int): void
    public mouseRelease(arg0: int): void
    public mouseWheel(arg0: int): void
    public keyPress(arg0: int): void
    public keyRelease(arg0: int): void
    public getPixelColor(arg0: int, arg1: int): java.awt.Color
    public createScreenCapture(arg0: java.awt.Rectangle): java.awt.image.BufferedImage
    public isAutoWaitForIdle(): boolean
    public setAutoWaitForIdle(arg0: boolean): void
    public getAutoDelay(): int
    public setAutoDelay(arg0: int): void
    public delay(arg0: int): void
    public waitForIdle(): void
    public toString(): string
    public static class: java.lang.Class<any>
}

    }
}