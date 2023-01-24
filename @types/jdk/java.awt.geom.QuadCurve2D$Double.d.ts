declare namespace java {
  namespace awt {
    namespace geom {
      class QuadCurve2D$Double extends java.awt.geom.QuadCurve2D implements java.io.Serializable {
        public x1: double
        public y1: double
        public ctrlx: double
        public ctrly: double
        public x2: double
        public y2: double
        public constructor()
        public constructor(
          arg0: number | java.lang.Double,
          arg1: number | java.lang.Double,
          arg2: number | java.lang.Double,
          arg3: number | java.lang.Double,
          arg4: number | java.lang.Double,
          arg5: number | java.lang.Double
        )
        public getX1(): number
        public getY1(): number
        public getP1(): java.awt.geom.Point2D
        public getCtrlX(): number
        public getCtrlY(): number
        public getCtrlPt(): java.awt.geom.Point2D
        public getX2(): number
        public getY2(): number
        public getP2(): java.awt.geom.Point2D
        public setCurve(
          arg0: number | java.lang.Double,
          arg1: number | java.lang.Double,
          arg2: number | java.lang.Double,
          arg3: number | java.lang.Double,
          arg4: number | java.lang.Double,
          arg5: number | java.lang.Double
        ): void
        public getBounds2D(): java.awt.geom.Rectangle2D
      }
    }
  }
}
