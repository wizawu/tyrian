declare namespace java {
  namespace awt {
    namespace geom {

      class Rectangle2D$Double extends java.awt.geom.Rectangle2D implements java.io.Serializable {
        public x: double
        public y: double
        public width: double
        public height: double
        public constructor()
        public constructor(arg0: number | java.lang.Double, arg1: number | java.lang.Double, arg2: number | java.lang.Double, arg3: number | java.lang.Double)
        public getX(): number
        public getY(): number
        public getWidth(): number
        public getHeight(): number
        public isEmpty(): boolean
        public setRect(arg0: number | java.lang.Double, arg1: number | java.lang.Double, arg2: number | java.lang.Double, arg3: number | java.lang.Double): void
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
