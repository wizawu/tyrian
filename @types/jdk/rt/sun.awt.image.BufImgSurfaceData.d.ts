declare namespace sun {
    namespace awt {
        namespace image {
class BufImgSurfaceData extends sun.java2d.SurfaceData {
    public static createData(arg0: java.awt.image.BufferedImage): sun.java2d.SurfaceData
    public static createData(arg0: java.awt.image.Raster, arg1: java.awt.image.ColorModel): sun.java2d.SurfaceData
    public static createDataIC(arg0: java.awt.image.BufferedImage, arg1: sun.java2d.loops.SurfaceType): sun.java2d.SurfaceData
    public static createDataSC(arg0: java.awt.image.BufferedImage, arg1: sun.java2d.loops.SurfaceType, arg2: java.awt.image.IndexColorModel): sun.java2d.SurfaceData
    public static createDataBC(arg0: java.awt.image.BufferedImage, arg1: sun.java2d.loops.SurfaceType, arg2: int): sun.java2d.SurfaceData
    public static createDataBP(arg0: java.awt.image.BufferedImage, arg1: sun.java2d.loops.SurfaceType): sun.java2d.SurfaceData
    public getRenderLoops(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda): sun.java2d.loops.RenderLoops
    public getRaster(arg0: int, arg1: int, arg2: int, arg3: int): java.awt.image.Raster
    protected initRaster(arg0: java.lang.Object, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: java.awt.image.IndexColorModel): void
    public constructor(arg0: java.awt.image.DataBuffer, arg1: java.awt.image.BufferedImage, arg2: sun.java2d.loops.SurfaceType)
    protected constructor(arg0: sun.java2d.loops.SurfaceType, arg1: java.awt.image.ColorModel)
    public initSolidLoops(): void
    public static getSolidLoops(arg0: sun.java2d.loops.SurfaceType): sun.java2d.loops.RenderLoops
    public getReplacement(): sun.java2d.SurfaceData
    public getDeviceConfiguration(): java.awt.GraphicsConfiguration
    public getBounds(): java.awt.Rectangle
    protected checkCustomComposite(): void
    public getDestination(): java.lang.Object
    public static class: java.lang.Class<any>
}

        }
    }
}