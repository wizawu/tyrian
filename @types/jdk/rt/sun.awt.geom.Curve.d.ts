declare namespace sun {
    namespace awt {
        namespace geom {
abstract class Curve {
    public static INCREASING: int
    public static DECREASING: int
    protected direction: int
    public static RECT_INTERSECTS: int
    public static TMIN: double
    public static insertMove(arg0: java.util.Vector, arg1: double, arg2: double): void
    public static insertLine(arg0: java.util.Vector, arg1: double, arg2: double, arg3: double, arg4: double): void
    public static insertQuad(arg0: java.util.Vector, arg1: double, arg2: double, arg3: double[]): void
    public static insertCubic(arg0: java.util.Vector, arg1: double, arg2: double, arg3: double[]): void
    public static pointCrossingsForPath(arg0: java.awt.geom.PathIterator, arg1: double, arg2: double): int
    public static pointCrossingsForLine(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): int
    public static pointCrossingsForQuad(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: int): int
    public static pointCrossingsForCubic(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: double, arg9: double, arg10: int): int
    public static rectCrossingsForPath(arg0: java.awt.geom.PathIterator, arg1: double, arg2: double, arg3: double, arg4: double): int
    public static rectCrossingsForLine(arg0: int, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: double): int
    public static rectCrossingsForQuad(arg0: int, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: double, arg9: double, arg10: double, arg11: int): int
    public static rectCrossingsForCubic(arg0: int, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: double, arg9: double, arg10: double, arg11: double, arg12: double, arg13: int): int
    public constructor(arg0: int)
    public getDirection(): int
    public getWithDirection(arg0: int): sun.awt.geom.Curve
    public static round(arg0: double): double
    public static orderof(arg0: double, arg1: double): int
    public static signeddiffbits(arg0: double, arg1: double): long
    public static diffbits(arg0: double, arg1: double): long
    public static prev(arg0: double): double
    public static next(arg0: double): double
    public toString(): string
    public controlPointString(): string
    public getOrder(): int
    public getXTop(): double
    public getYTop(): double
    public getXBot(): double
    public getYBot(): double
    public getXMin(): double
    public getXMax(): double
    public getX0(): double
    public getY0(): double
    public getX1(): double
    public getY1(): double
    public XforY(arg0: double): double
    public TforY(arg0: double): double
    public XforT(arg0: double): double
    public YforT(arg0: double): double
    public dXforT(arg0: double, arg1: int): double
    public dYforT(arg0: double, arg1: int): double
    public nextVertical(arg0: double, arg1: double): double
    public crossingsFor(arg0: double, arg1: double): int
    public accumulateCrossings(arg0: sun.awt.geom.Crossings): boolean
    public enlarge(arg0: java.awt.geom.Rectangle2D): void
    public getSubCurve(arg0: double, arg1: double): sun.awt.geom.Curve
    public getReversedCurve(): sun.awt.geom.Curve
    public getSubCurve(arg0: double, arg1: double, arg2: int): sun.awt.geom.Curve
    public compareTo(arg0: sun.awt.geom.Curve, arg1: double[]): int
    public findIntersect(arg0: sun.awt.geom.Curve, arg1: double[], arg2: double, arg3: int, arg4: int, arg5: double, arg6: double, arg7: double, arg8: double, arg9: double, arg10: double, arg11: double, arg12: double, arg13: double, arg14: double, arg15: double, arg16: double): boolean
    public refineTforY(arg0: double, arg1: double, arg2: double): double
    public fairlyClose(arg0: double, arg1: double): boolean
    public getSegment(arg0: double[]): int
    public static class: java.lang.Class<any>
}

        }
    }
}