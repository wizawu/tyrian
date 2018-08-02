declare namespace sun {
    namespace awt {
        namespace geom {
            class Order2 extends sun.awt.geom.Curve {
                public static insert(arg0: java.util.Vector, arg1: double[], arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: int): void
                public static addInstance(arg0: java.util.Vector, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: int): void
                public static getHorizontalParams(arg0: double, arg1: double, arg2: double, arg3: double[]): int
                public static split(arg0: double[], arg1: int, arg2: double): void
                public constructor(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: int)
                public getOrder(): int
                public getXTop(): double
                public getYTop(): double
                public getXBot(): double
                public getYBot(): double
                public getXMin(): double
                public getXMax(): double
                public getX0(): double
                public getY0(): double
                public getCX0(): double
                public getCY0(): double
                public getX1(): double
                public getY1(): double
                public XforY(arg0: double): double
                public TforY(arg0: double): double
                public static TforY(arg0: double, arg1: double, arg2: double, arg3: double): double
                public XforT(arg0: double): double
                public YforT(arg0: double): double
                public dXforT(arg0: double, arg1: int): double
                public dYforT(arg0: double, arg1: int): double
                public nextVertical(arg0: double, arg1: double): double
                public enlarge(arg0: java.awt.geom.Rectangle2D): void
                public getSubCurve(arg0: double, arg1: double, arg2: int): sun.awt.geom.Curve
                public getReversedCurve(): sun.awt.geom.Curve
                public getSegment(arg0: double[]): int
                public controlPointString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}