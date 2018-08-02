declare namespace sun {
    namespace awt {
class X11GraphicsEnvironment extends sun.java2d.SunGraphicsEnvironment {
    public static isGLXAvailable(): boolean
    public static isGLXVerbose(): boolean
    public static isXRenderAvailable(): boolean
    public static isXRenderVerbose(): boolean
    public constructor()
    protected getNumScreens(): int
    protected makeScreenDevice(arg0: int): java.awt.GraphicsDevice
    protected getDefaultScreenNum(): int
    public getDefaultScreenDevice(): java.awt.GraphicsDevice
    public isDisplayLocal(): boolean
    public getDefaultFontFaceName(): string
    public getCenterPoint(): java.awt.Point
    public getMaximumWindowBounds(): java.awt.Rectangle
    public runningXinerama(): boolean
    protected getXineramaWindowBounds(): java.awt.Rectangle
    public paletteChanged(): void
    public static class: java.lang.Class<any>
}

    }
}