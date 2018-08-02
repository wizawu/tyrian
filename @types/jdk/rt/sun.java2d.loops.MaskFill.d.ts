declare namespace sun {
    namespace java2d {
        namespace loops {
class MaskFill extends sun.java2d.loops.GraphicsPrimitive {
    public static methodSignature: string
    public static fillPgramSignature: string
    public static drawPgramSignature: string
    public static primTypeID: int
    public static locate(arg0: sun.java2d.loops.SurfaceType, arg1: sun.java2d.loops.CompositeType, arg2: sun.java2d.loops.SurfaceType): sun.java2d.loops.MaskFill
    public static locatePrim(arg0: sun.java2d.loops.SurfaceType, arg1: sun.java2d.loops.CompositeType, arg2: sun.java2d.loops.SurfaceType): sun.java2d.loops.MaskFill
    public static getFromCache(arg0: sun.java2d.loops.SurfaceType, arg1: sun.java2d.loops.CompositeType, arg2: sun.java2d.loops.SurfaceType): sun.java2d.loops.MaskFill
    protected constructor(arg0: java.lang.String | string, arg1: sun.java2d.loops.SurfaceType, arg2: sun.java2d.loops.CompositeType, arg3: sun.java2d.loops.SurfaceType)
    protected constructor(arg0: sun.java2d.loops.SurfaceType, arg1: sun.java2d.loops.CompositeType, arg2: sun.java2d.loops.SurfaceType)
    public constructor(arg0: long, arg1: sun.java2d.loops.SurfaceType, arg2: sun.java2d.loops.CompositeType, arg3: sun.java2d.loops.SurfaceType)
    public MaskFill(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: sun.java2d.SurfaceData, arg2: java.awt.Composite | java.awt.Composite$$Lambda, arg3: int, arg4: int, arg5: int, arg6: int, arg7: byte[], arg8: int, arg9: int): void
    public FillAAPgram(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: sun.java2d.SurfaceData, arg2: java.awt.Composite | java.awt.Composite$$Lambda, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: double): void
    public DrawAAPgram(arg0: sun.java2d.SunGraphics2D | sun.java2d.SunGraphics2D$$Lambda, arg1: sun.java2d.SurfaceData, arg2: java.awt.Composite | java.awt.Composite$$Lambda, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: double, arg9: double, arg10: double): void
    public canDoParallelograms(): boolean
    public makePrimitive(arg0: sun.java2d.loops.SurfaceType, arg1: sun.java2d.loops.CompositeType, arg2: sun.java2d.loops.SurfaceType): sun.java2d.loops.GraphicsPrimitive
    public traceWrap(): sun.java2d.loops.GraphicsPrimitive
    public static class: java.lang.Class<any>
}

        }
    }
}