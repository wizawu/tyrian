declare namespace sun {
    namespace java2d {
class HeadlessGraphicsEnvironment extends java.awt.GraphicsEnvironment {
    public constructor(arg0: java.awt.GraphicsEnvironment)
    public getScreenDevices(): java.awt.GraphicsDevice[]
    public getDefaultScreenDevice(): java.awt.GraphicsDevice
    public getCenterPoint(): java.awt.Point
    public getMaximumWindowBounds(): java.awt.Rectangle
    public createGraphics(arg0: java.awt.image.BufferedImage): java.awt.Graphics2D
    public getAllFonts(): java.awt.Font[]
    public getAvailableFontFamilyNames(): java.lang.String[]
    public getAvailableFontFamilyNames(arg0: java.util.Locale): java.lang.String[]
    public getSunGraphicsEnvironment(): java.awt.GraphicsEnvironment
    public static class: java.lang.Class<any>
}

    }
}