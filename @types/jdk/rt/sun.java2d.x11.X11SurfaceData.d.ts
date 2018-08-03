declare namespace sun {
    namespace java2d {
        namespace x11 {
            abstract class X11SurfaceData extends sun.java2d.x11.XSurfaceData {
                protected depth: int
                public static readonly DESC_INT_BGR_X11: string
                public static readonly DESC_INT_RGB_X11: string
                public static readonly DESC_4BYTE_ABGR_PRE_X11: string
                public static readonly DESC_INT_ARGB_PRE_X11: string
                public static readonly DESC_BYTE_IND_OPQ_X11: string
                public static readonly DESC_INT_BGR_X11_BM: string
                public static readonly DESC_INT_RGB_X11_BM: string
                public static readonly DESC_BYTE_IND_X11_BM: string
                public static readonly DESC_BYTE_GRAY_X11: string
                public static readonly DESC_INDEX8_GRAY_X11: string
                public static readonly DESC_BYTE_GRAY_X11_BM: string
                public static readonly DESC_INDEX8_GRAY_X11_BM: string
                public static readonly DESC_3BYTE_RGB_X11: string
                public static readonly DESC_3BYTE_BGR_X11: string
                public static readonly DESC_3BYTE_RGB_X11_BM: string
                public static readonly DESC_3BYTE_BGR_X11_BM: string
                public static readonly DESC_USHORT_555_RGB_X11: string
                public static readonly DESC_USHORT_565_RGB_X11: string
                public static readonly DESC_USHORT_555_RGB_X11_BM: string
                public static readonly DESC_USHORT_565_RGB_X11_BM: string
                public static readonly DESC_USHORT_INDEXED_X11: string
                public static readonly DESC_USHORT_INDEXED_X11_BM: string
                public static readonly IntBgrX11: sun.java2d.loops.SurfaceType
                public static readonly IntRgbX11: sun.java2d.loops.SurfaceType
                public static readonly FourByteAbgrPreX11: sun.java2d.loops.SurfaceType
                public static readonly IntArgbPreX11: sun.java2d.loops.SurfaceType
                public static readonly ThreeByteRgbX11: sun.java2d.loops.SurfaceType
                public static readonly ThreeByteBgrX11: sun.java2d.loops.SurfaceType
                public static readonly UShort555RgbX11: sun.java2d.loops.SurfaceType
                public static readonly UShort565RgbX11: sun.java2d.loops.SurfaceType
                public static readonly UShortIndexedX11: sun.java2d.loops.SurfaceType
                public static readonly ByteIndexedOpaqueX11: sun.java2d.loops.SurfaceType
                public static readonly ByteGrayX11: sun.java2d.loops.SurfaceType
                public static readonly Index8GrayX11: sun.java2d.loops.SurfaceType
                public static readonly IntBgrX11_BM: sun.java2d.loops.SurfaceType
                public static readonly IntRgbX11_BM: sun.java2d.loops.SurfaceType
                public static readonly ThreeByteRgbX11_BM: sun.java2d.loops.SurfaceType
                public static readonly ThreeByteBgrX11_BM: sun.java2d.loops.SurfaceType
                public static readonly UShort555RgbX11_BM: sun.java2d.loops.SurfaceType
                public static readonly UShort565RgbX11_BM: sun.java2d.loops.SurfaceType
                public static readonly UShortIndexedX11_BM: sun.java2d.loops.SurfaceType
                public static readonly ByteIndexedX11_BM: sun.java2d.loops.SurfaceType
                public static readonly ByteGrayX11_BM: sun.java2d.loops.SurfaceType
                public static readonly Index8GrayX11_BM: sun.java2d.loops.SurfaceType
                protected x11pipe: sun.java2d.x11.X11Renderer
                protected x11txpipe: sun.java2d.pipe.PixelToShapeConverter
                protected static x11textpipe: sun.java2d.pipe.TextPipe
                protected static dgaAvailable: boolean
                protected initSurface(arg0: int, arg1: int, arg2: int, arg3: long): void
                public getRaster(arg0: int, arg1: int, arg2: int, arg3: int): java.awt.image.Raster
                public static isDgaAvailable(): boolean
                public static isAccelerationEnabled(): boolean
                public makeProxyFor(arg0: sun.java2d.SurfaceData): sun.java2d.SurfaceDataProxy
                public validatePipe(arg0: sun.java2d.SunGraphics2D): void
                public getRenderLoops(arg0: sun.java2d.SunGraphics2D): sun.java2d.loops.RenderLoops
                public getDeviceConfiguration(): java.awt.GraphicsConfiguration
                public static createData(arg0: sun.awt.X11ComponentPeer): sun.java2d.x11.X11SurfaceData$X11WindowSurfaceData
                public static createData(arg0: sun.awt.X11GraphicsConfig, arg1: int, arg2: int, arg3: java.awt.image.ColorModel, arg4: java.awt.Image, arg5: long, arg6: int): sun.java2d.x11.X11SurfaceData$X11PixmapSurfaceData
                protected constructor(arg0: sun.awt.X11ComponentPeer, arg1: sun.awt.X11GraphicsConfig, arg2: sun.java2d.loops.SurfaceType, arg3: java.awt.image.ColorModel)
                public static getGC(arg0: sun.awt.X11ComponentPeer): sun.awt.X11GraphicsConfig
                public abstract canSourceSendExposures(arg0: int, arg1: int, arg2: int, arg3: int): boolean
                public copyArea(arg0: sun.java2d.SunGraphics2D, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): boolean
                public static getSurfaceType(arg0: sun.awt.X11GraphicsConfig, arg1: int): sun.java2d.loops.SurfaceType
                public static getSurfaceType(arg0: sun.awt.X11GraphicsConfig, arg1: int, arg2: boolean): sun.java2d.loops.SurfaceType
                public invalidate(): void
                public getRenderGC(arg0: sun.java2d.pipe.Region, arg1: int, arg2: java.awt.Composite | java.awt.Composite$$Lambda, arg3: int): long
                public getBlitGC(arg0: sun.java2d.pipe.Region, arg1: boolean): long
                public makePipes(): void
                public static class: java.lang.Class<any>
            }
            interface X11SurfaceData$$Lambda extends sun.java2d.x11.XSurfaceData {
                (arg0: int, arg1: int, arg2: int, arg3: int): boolean
            }
        }
    }
}