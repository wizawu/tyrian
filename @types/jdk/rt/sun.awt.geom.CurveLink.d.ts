declare namespace sun {
    namespace awt {
        namespace geom {
class CurveLink {
    public constructor(arg0: sun.awt.geom.Curve, arg1: double, arg2: double, arg3: int)
    public absorb(arg0: sun.awt.geom.CurveLink): boolean
    public absorb(arg0: sun.awt.geom.Curve, arg1: double, arg2: double, arg3: int): boolean
    public isEmpty(): boolean
    public getCurve(): sun.awt.geom.Curve
    public getSubCurve(): sun.awt.geom.Curve
    public getMoveto(): sun.awt.geom.Curve
    public getXTop(): double
    public getYTop(): double
    public getXBot(): double
    public getYBot(): double
    public getX(): double
    public getEdgeTag(): int
    public setNext(arg0: sun.awt.geom.CurveLink): void
    public getNext(): sun.awt.geom.CurveLink
    public static class: java.lang.Class<any>
}

        }
    }
}