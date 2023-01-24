declare namespace java {
  namespace awt {
    namespace geom {
      abstract class Path2D implements java.awt.Shape, java.lang.Cloneable {
        public static readonly WIND_EVEN_ODD: int
        public static readonly WIND_NON_ZERO: int
        pointTypes: byte[]
        numTypes: int
        numCoords: int
        windingRule: int
        static readonly INIT_SIZE: int
        static readonly EXPAND_MAX: int
        static readonly EXPAND_MAX_COORDS: int
        static readonly EXPAND_MIN: int
        static readonly $assertionsDisabled: boolean
        constructor()
        constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer)
        abstract cloneCoordsFloat(arg0: java.awt.geom.AffineTransform): number[]
        abstract cloneCoordsDouble(arg0: java.awt.geom.AffineTransform): number[]
        abstract append(arg0: number | java.lang.Float, arg1: number | java.lang.Float): void
        abstract append(arg0: number | java.lang.Double, arg1: number | java.lang.Double): void
        abstract getPoint(arg0: number | java.lang.Integer): java.awt.geom.Point2D
        abstract needRoom(arg0: boolean | java.lang.Boolean, arg1: number | java.lang.Integer): void
        abstract pointCrossings(arg0: number | java.lang.Double, arg1: number | java.lang.Double): number
        abstract rectCrossings(
          arg0: number | java.lang.Double,
          arg1: number | java.lang.Double,
          arg2: number | java.lang.Double,
          arg3: number | java.lang.Double
        ): number
        static expandPointTypes(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer): number[]
        public abstract moveTo(arg0: number | java.lang.Double, arg1: number | java.lang.Double): void
        public abstract lineTo(arg0: number | java.lang.Double, arg1: number | java.lang.Double): void
        public abstract quadTo(
          arg0: number | java.lang.Double,
          arg1: number | java.lang.Double,
          arg2: number | java.lang.Double,
          arg3: number | java.lang.Double
        ): void
        public abstract curveTo(
          arg0: number | java.lang.Double,
          arg1: number | java.lang.Double,
          arg2: number | java.lang.Double,
          arg3: number | java.lang.Double,
          arg4: number | java.lang.Double,
          arg5: number | java.lang.Double
        ): void
        public closePath(): void
        public append(arg0: java.awt.Shape, arg1: boolean | java.lang.Boolean): void
        public abstract append(arg0: java.awt.geom.PathIterator, arg1: boolean | java.lang.Boolean): void
        public getWindingRule(): number
        public setWindingRule(arg0: number | java.lang.Integer): void
        public getCurrentPoint(): java.awt.geom.Point2D
        public reset(): void
        public abstract transform(arg0: java.awt.geom.AffineTransform): void
        public createTransformedShape(arg0: java.awt.geom.AffineTransform): java.awt.Shape
        public getBounds(): java.awt.Rectangle
        public static contains(
          arg0: java.awt.geom.PathIterator,
          arg1: number | java.lang.Double,
          arg2: number | java.lang.Double
        ): boolean
        public static contains(arg0: java.awt.geom.PathIterator, arg1: java.awt.geom.Point2D): boolean
        public contains(arg0: number | java.lang.Double, arg1: number | java.lang.Double): boolean
        public contains(arg0: java.awt.geom.Point2D): boolean
        public static contains(
          arg0: java.awt.geom.PathIterator,
          arg1: number | java.lang.Double,
          arg2: number | java.lang.Double,
          arg3: number | java.lang.Double,
          arg4: number | java.lang.Double
        ): boolean
        public static contains(arg0: java.awt.geom.PathIterator, arg1: java.awt.geom.Rectangle2D): boolean
        public contains(
          arg0: number | java.lang.Double,
          arg1: number | java.lang.Double,
          arg2: number | java.lang.Double,
          arg3: number | java.lang.Double
        ): boolean
        public contains(arg0: java.awt.geom.Rectangle2D): boolean
        public static intersects(
          arg0: java.awt.geom.PathIterator,
          arg1: number | java.lang.Double,
          arg2: number | java.lang.Double,
          arg3: number | java.lang.Double,
          arg4: number | java.lang.Double
        ): boolean
        public static intersects(arg0: java.awt.geom.PathIterator, arg1: java.awt.geom.Rectangle2D): boolean
        public intersects(
          arg0: number | java.lang.Double,
          arg1: number | java.lang.Double,
          arg2: number | java.lang.Double,
          arg3: number | java.lang.Double
        ): boolean
        public intersects(arg0: java.awt.geom.Rectangle2D): boolean
        public getPathIterator(
          arg0: java.awt.geom.AffineTransform,
          arg1: number | java.lang.Double
        ): java.awt.geom.PathIterator
        public abstract clone(): java.lang.Object
        public abstract trimToSize(): void
        writeObject(arg0: java.io.ObjectOutputStream, arg1: boolean | java.lang.Boolean): void
        readObject(arg0: java.io.ObjectInputStream, arg1: boolean | java.lang.Boolean): void
      }
    }
  }
}
