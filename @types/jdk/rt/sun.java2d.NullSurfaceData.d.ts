declare namespace sun {
    namespace java2d {
class NullSurfaceData extends sun.java2d.SurfaceData {
    public static theInstance: sun.java2d.SurfaceData
    public invalidate(): void
    public getReplacement(): sun.java2d.SurfaceData
    public validatePipe(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda): void
    public getDeviceConfiguration(): java.awt.GraphicsConfiguration
    public getRaster(arg0: int, arg1: int, arg2: int, arg3: int): java.awt.image.Raster
    public useTightBBoxes(): boolean
    public pixelFor(arg0: int): int
    public rgbFor(arg0: int): int
    public getBounds(): java.awt.Rectangle
    protected checkCustomComposite(): void
    public copyArea(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): boolean
    public getDestination(): java.lang.Object
    public static class: java.lang.Class<any>
}

    }
}