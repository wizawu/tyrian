declare namespace sun {
    namespace java2d {
        namespace xr {
            abstract class XRSurfaceData extends sun.java2d.x11.XSurfaceData {
                protected depth: int
                public static DESC_BYTE_A8_X11: string
                public static DESC_INT_RGB_X11: string
                public static DESC_INT_ARGB_X11: string
                public static ByteA8X11: sun.java2d.loops.SurfaceType
                public static IntRgbX11: sun.java2d.loops.SurfaceType
                public static IntArgbPreX11: sun.java2d.loops.SurfaceType
                protected xrpipe: sun.java2d.xr.XRRenderer
                protected xrtxpipe: sun.java2d.pipe.PixelToShapeConverter
                protected xrtextpipe: sun.java2d.pipe.TextPipe
                protected xrDrawImage: sun.java2d.xr.XRDrawImage
                protected aaShapePipe: sun.java2d.pipe.ShapeDrawPipe
                protected aaPixelToShapeConv: sun.java2d.pipe.PixelToShapeConverter
                public picture: int
                public maskBuffer: sun.java2d.xr.XRCompositeManager
                protected XRInitSurface(arg0: int, arg1: int, arg2: int, arg3: long, arg4: int): void
                public getRaster(arg0: int, arg1: int, arg2: int, arg3: int): java.awt.image.Raster
                public static initXRSurfaceData(): void
                protected isXRDrawableValid(): boolean
                public makeProxyFor(arg0: sun.java2d.SurfaceData): sun.java2d.SurfaceDataProxy
                public validatePipe(arg0: sun.java2d.SunGraphics2D): void
                protected getTextPipe(arg0: sun.java2d.SunGraphics2D): sun.java2d.pipe.TextPipe
                protected getMaskFill(arg0: sun.java2d.SunGraphics2D): sun.java2d.loops.MaskFill
                public getRenderLoops(arg0: sun.java2d.SunGraphics2D): sun.java2d.loops.RenderLoops
                public getDeviceConfiguration(): java.awt.GraphicsConfiguration
                public static createData(arg0: sun.awt.X11ComponentPeer): sun.java2d.xr.XRSurfaceData$XRWindowSurfaceData
                public static createData(arg0: sun.java2d.xr.XRGraphicsConfig, arg1: int, arg2: int, arg3: java.awt.image.ColorModel, arg4: java.awt.Image, arg5: long, arg6: int): sun.java2d.xr.XRSurfaceData$XRPixmapSurfaceData
                protected constructor(arg0: sun.awt.X11ComponentPeer, arg1: sun.java2d.xr.XRGraphicsConfig, arg2: sun.java2d.loops.SurfaceType, arg3: java.awt.image.ColorModel, arg4: int, arg5: int)
                protected constructor(arg0: sun.java2d.xr.XRBackend)
                public initXRender(arg0: int): void
                public static getGC(arg0: sun.awt.X11ComponentPeer): sun.java2d.xr.XRGraphicsConfig
                public canSourceSendExposures(arg0: int, arg1: int, arg2: int, arg3: int): boolean
                public validateCopyAreaGC(arg0: sun.java2d.pipe.Region, arg1: boolean): void
                public copyArea(arg0: sun.java2d.SunGraphics2D, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): boolean
                public static getSurfaceType(arg0: sun.java2d.xr.XRGraphicsConfig, arg1: int): sun.java2d.loops.SurfaceType
                public invalidate(): void
                public validateAsDestination(arg0: sun.java2d.SunGraphics2D, arg1: sun.java2d.pipe.Region): void
                public makePipes(): void
                public getGC(): long
                public getPicture(): int
                public getXid(): int
                public getGraphicsConfig(): sun.java2d.xr.XRGraphicsConfig
                public setStaticSrcTx(arg0: java.awt.geom.AffineTransform): void
                public static class: java.lang.Class<any>
            }
        }
    }
}