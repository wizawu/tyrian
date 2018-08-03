declare namespace sun {
    namespace java2d {
        namespace loops {
            class MaskBlit extends sun.java2d.loops.GraphicsPrimitive {
                public static readonly methodSignature: string
                public static readonly primTypeID: int
                public static locate(arg0: sun.java2d.loops.SurfaceType, arg1: sun.java2d.loops.CompositeType, arg2: sun.java2d.loops.SurfaceType): sun.java2d.loops.MaskBlit
                public static getFromCache(arg0: sun.java2d.loops.SurfaceType, arg1: sun.java2d.loops.CompositeType, arg2: sun.java2d.loops.SurfaceType): sun.java2d.loops.MaskBlit
                protected constructor(arg0: sun.java2d.loops.SurfaceType, arg1: sun.java2d.loops.CompositeType, arg2: sun.java2d.loops.SurfaceType)
                public constructor(arg0: long, arg1: sun.java2d.loops.SurfaceType, arg2: sun.java2d.loops.CompositeType, arg3: sun.java2d.loops.SurfaceType)
                public MaskBlit(arg0: sun.java2d.SurfaceData, arg1: sun.java2d.SurfaceData, arg2: java.awt.Composite | java.awt.Composite$$Lambda, arg3: sun.java2d.pipe.Region, arg4: int, arg5: int, arg6: int, arg7: int, arg8: int, arg9: int, arg10: byte[], arg11: int, arg12: int): void
                public makePrimitive(arg0: sun.java2d.loops.SurfaceType, arg1: sun.java2d.loops.CompositeType, arg2: sun.java2d.loops.SurfaceType): sun.java2d.loops.GraphicsPrimitive
                public traceWrap(): sun.java2d.loops.GraphicsPrimitive
                public static class: java.lang.Class<any>
            }
        }
    }
}