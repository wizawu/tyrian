declare namespace java {
  namespace awt {
    namespace geom {
      class Rectangle2D$Float extends java.awt.geom.Rectangle2D implements java.io.Serializable {
        public x: float
        public y: float
        public width: float
        public height: float
        public constructor()
        public constructor(
          arg0: number | java.lang.Float,
          arg1: number | java.lang.Float,
          arg2: number | java.lang.Float,
          arg3: number | java.lang.Float
        )
        public getX(): number
        public getY(): number
        public getWidth(): number
        public getHeight(): number
        public isEmpty(): boolean
        public setRect(
          arg0: number | java.lang.Float,
          arg1: number | java.lang.Float,
          arg2: number | java.lang.Float,
          arg3: number | java.lang.Float
        ): void
        public setRect(
          arg0: number | java.lang.Double,
          arg1: number | java.lang.Double,
          arg2: number | java.lang.Double,
          arg3: number | java.lang.Double
        ): void
        public setRect(arg0: java.awt.geom.Rectangle2D): void
        public outcode(arg0: number | java.lang.Double, arg1: number | java.lang.Double): number
        public getBounds2D(): java.awt.geom.Rectangle2D
        public createIntersection(arg0: java.awt.geom.Rectangle2D): java.awt.geom.Rectangle2D
        public createUnion(arg0: java.awt.geom.Rectangle2D): java.awt.geom.Rectangle2D
        public toString(): java.lang.String
      }
    }
  }
}
