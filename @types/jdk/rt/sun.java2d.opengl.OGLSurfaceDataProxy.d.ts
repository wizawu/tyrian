declare namespace sun {
    namespace java2d {
        namespace opengl {
            class OGLSurfaceDataProxy extends sun.java2d.SurfaceDataProxy {
                public static createProxy(arg0: sun.java2d.SurfaceData, arg1: sun.java2d.opengl.OGLGraphicsConfig): sun.java2d.SurfaceDataProxy
                public constructor(arg0: sun.java2d.opengl.OGLGraphicsConfig, arg1: int)
                public validateSurfaceData(arg0: sun.java2d.SurfaceData, arg1: sun.java2d.SurfaceData, arg2: int, arg3: int): sun.java2d.SurfaceData
                public isSupportedOperation(arg0: sun.java2d.SurfaceData, arg1: int, arg2: sun.java2d.loops.CompositeType, arg3: java.awt.Color): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}