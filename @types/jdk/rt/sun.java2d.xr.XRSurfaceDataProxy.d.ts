declare namespace sun {
    namespace java2d {
        namespace xr {
            class XRSurfaceDataProxy extends sun.java2d.SurfaceDataProxy implements java.awt.Transparency {
                public static createProxy(arg0: sun.java2d.SurfaceData, arg1: sun.java2d.xr.XRGraphicsConfig): sun.java2d.SurfaceDataProxy
                public constructor(arg0: sun.java2d.xr.XRGraphicsConfig)
                public validateSurfaceData(arg0: sun.java2d.SurfaceData, arg1: sun.java2d.SurfaceData, arg2: int, arg3: int): sun.java2d.SurfaceData
                public constructor(arg0: sun.java2d.xr.XRGraphicsConfig, arg1: int)
                public isSupportedOperation(arg0: sun.java2d.SurfaceData, arg1: int, arg2: sun.java2d.loops.CompositeType, arg3: java.awt.Color): boolean
                public getTransparency(): int
                public static class: java.lang.Class<any>
            }
        }
    }
}