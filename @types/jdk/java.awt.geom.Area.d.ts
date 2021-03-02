declare namespace java {
  namespace awt {
    namespace geom {

      class Area implements java.awt.Shape, java.lang.Cloneable {
        public constructor()
        public constructor(arg0: java.awt.Shape)
        public add(arg0: java.awt.geom.Area): void
        public subtract(arg0: java.awt.geom.Area): void
        public intersect(arg0: java.awt.geom.Area): void
        public exclusiveOr(arg0: java.awt.geom.Area): void
        public reset(): void
        public isEmpty(): boolean
        public isPolygonal(): boolean
        public isRectangular(): boolean
        public isSingular(): boolean
        public getBounds2D(): java.awt.geom.Rectangle2D
        public getBounds(): java.awt.Rectangle
        public clone(): java.lang.Object
        public equals(arg0: java.awt.geom.Area): boolean
        public transform(arg0: java.awt.geom.AffineTransform): void
        public createTransformedArea(arg0: java.awt.geom.AffineTransform): java.awt.geom.Area
        public contains(arg0: number | java.lang.Double, arg1: number | java.lang.Double): boolean
        public contains(arg0: java.awt.geom.Point2D): boolean
        public contains(arg0: number | java.lang.Double, arg1: number | java.lang.Double, arg2: number | java.lang.Double, arg3: number | java.lang.Double): boolean
        public contains(arg0: java.awt.geom.Rectangle2D): boolean
        public intersects(arg0: number | java.lang.Double, arg1: number | java.lang.Double, arg2: number | java.lang.Double, arg3: number | java.lang.Double): boolean
        public intersects(arg0: java.awt.geom.Rectangle2D): boolean
        public getPathIterator(arg0: java.awt.geom.AffineTransform): java.awt.geom.PathIterator
        public getPathIterator(arg0: java.awt.geom.AffineTransform, arg1: number | java.lang.Double): java.awt.geom.PathIterator
      }

    }
  }
}
