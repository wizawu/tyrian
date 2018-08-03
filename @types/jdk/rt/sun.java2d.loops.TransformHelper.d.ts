declare namespace sun {
    namespace java2d {
        namespace loops {
            class TransformHelper extends sun.java2d.loops.GraphicsPrimitive {
                public static readonly methodSignature: string
                public static readonly primTypeID: int
                public static locate(arg0: sun.java2d.loops.SurfaceType): sun.java2d.loops.TransformHelper
                public static getFromCache(arg0: sun.java2d.loops.SurfaceType): sun.java2d.loops.TransformHelper
                protected constructor(arg0: sun.java2d.loops.SurfaceType)
                public constructor(arg0: long, arg1: sun.java2d.loops.SurfaceType, arg2: sun.java2d.loops.CompositeType, arg3: sun.java2d.loops.SurfaceType)
                public Transform(arg0: sun.java2d.loops.MaskBlit, arg1: sun.java2d.SurfaceData, arg2: sun.java2d.SurfaceData, arg3: java.awt.Composite | java.awt.Composite$$Lambda, arg4: sun.java2d.pipe.Region, arg5: java.awt.geom.AffineTransform, arg6: int, arg7: int, arg8: int, arg9: int, arg10: int, arg11: int, arg12: int, arg13: int, arg14: int, arg15: int[], arg16: int, arg17: int): void
                public makePrimitive(arg0: sun.java2d.loops.SurfaceType, arg1: sun.java2d.loops.CompositeType, arg2: sun.java2d.loops.SurfaceType): sun.java2d.loops.GraphicsPrimitive
                public traceWrap(): sun.java2d.loops.GraphicsPrimitive
                public static class: java.lang.Class<any>
            }
        }
    }
}