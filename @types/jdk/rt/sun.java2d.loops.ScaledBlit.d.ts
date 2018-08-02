declare namespace sun {
    namespace java2d {
        namespace loops {
            class ScaledBlit extends sun.java2d.loops.GraphicsPrimitive {
                public static methodSignature: string
                public static primTypeID: int
                public static locate(arg0: sun.java2d.loops.SurfaceType, arg1: sun.java2d.loops.CompositeType, arg2: sun.java2d.loops.SurfaceType): sun.java2d.loops.ScaledBlit
                public static getFromCache(arg0: sun.java2d.loops.SurfaceType, arg1: sun.java2d.loops.CompositeType, arg2: sun.java2d.loops.SurfaceType): sun.java2d.loops.ScaledBlit
                protected constructor(arg0: sun.java2d.loops.SurfaceType, arg1: sun.java2d.loops.CompositeType, arg2: sun.java2d.loops.SurfaceType)
                public constructor(arg0: long, arg1: sun.java2d.loops.SurfaceType, arg2: sun.java2d.loops.CompositeType, arg3: sun.java2d.loops.SurfaceType)
                public Scale(arg0: sun.java2d.SurfaceData, arg1: sun.java2d.SurfaceData, arg2: java.awt.Composite | java.awt.Composite$$Lambda, arg3: sun.java2d.pipe.Region, arg4: int, arg5: int, arg6: int, arg7: int, arg8: double, arg9: double, arg10: double, arg11: double): void
                public makePrimitive(arg0: sun.java2d.loops.SurfaceType, arg1: sun.java2d.loops.CompositeType, arg2: sun.java2d.loops.SurfaceType): sun.java2d.loops.GraphicsPrimitive
                public traceWrap(): sun.java2d.loops.GraphicsPrimitive
                public static class: java.lang.Class<any>
            }
        }
    }
}