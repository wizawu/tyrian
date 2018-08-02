declare namespace sun {
    namespace java2d {
        namespace jules {
class JulesPathBuf {
    public constructor()
    public static isCairoAvailable(): boolean
    public tesselateFill(arg0: java.awt.Shape, arg1: java.awt.geom.AffineTransform, arg2: sun.java2d.pipe.Region): sun.java2d.jules.TrapezoidList
    public tesselateStroke(arg0: java.awt.Shape, arg1: java.awt.BasicStroke | java.awt.BasicStroke$$Lambda, arg2: boolean, arg3: boolean, arg4: boolean, arg5: java.awt.geom.AffineTransform, arg6: sun.java2d.pipe.Region): sun.java2d.jules.TrapezoidList
    protected floatToDoubleArray(arg0: float[]): double[]
    protected convertPathData(arg0: java.awt.Shape, arg1: java.awt.geom.AffineTransform): int
    public clear(): void
    public static class: java.lang.Class<any>
}

        }
    }
}