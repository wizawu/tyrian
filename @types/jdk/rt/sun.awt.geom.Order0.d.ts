declare namespace sun {
    namespace awt {
        namespace geom {
            class Order0 extends sun.awt.geom.Curve {
                public constructor(arg0: double, arg1: double)
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
                public getSubCurve(arg0: double, arg1: double, arg2: int): sun.awt.geom.Curve
                public getReversedCurve(): sun.awt.geom.Curve
                public getSegment(arg0: double[]): int
                public static class: java.lang.Class<any>
            }
        }
    }
}