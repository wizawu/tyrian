declare namespace sun {
    namespace java2d {
        namespace xr {
            class XRSurfaceData$XRPixmapSurfaceData extends sun.java2d.xr.XRSurfaceData {
                public constructor(arg0: sun.java2d.xr.XRGraphicsConfig | sun.java2d.xr.XRGraphicsConfig$$Lambda, arg1: int, arg2: int, arg3: java.awt.Image, arg4: sun.java2d.loops.SurfaceType, arg5: java.awt.image.ColorModel, arg6: long, arg7: int, arg8: int, arg9: int)
                public initSurface(arg0: int, arg1: int, arg2: int, arg3: long, arg4: int): void
                public getReplacement(): sun.java2d.SurfaceData
                public getTransparency(): int
                public getBounds(): java.awt.Rectangle
                public canSourceSendExposures(arg0: int, arg1: int, arg2: int, arg3: int): boolean
                public flush(): void
                public getDestination(): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}