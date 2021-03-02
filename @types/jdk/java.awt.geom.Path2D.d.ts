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
        constructor(arg0: int, arg1: int)
        abstract cloneCoordsFloat(arg0: java.awt.geom.AffineTransform): float[]
        abstract cloneCoordsDouble(arg0: java.awt.geom.AffineTransform): double[]
        abstract append(arg0: float, arg1: float): void
        abstract append(arg0: double, arg1: double): void
        abstract getPoint(arg0: int): java.awt.geom.Point2D
        abstract needRoom(arg0: boolean, arg1: int): void
        abstract pointCrossings(arg0: double, arg1: double): int
        abstract rectCrossings(arg0: double, arg1: double, arg2: double, arg3: double): int
        static expandPointTypes(arg0: byte[], arg1: int): byte[]
        public abstract moveTo(arg0: double, arg1: double): void
        public abstract lineTo(arg0: double, arg1: double): void
        public abstract quadTo(arg0: double, arg1: double, arg2: double, arg3: double): void
        public abstract curveTo(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): void
        public closePath(): void
        public append(arg0: java.awt.Shape, arg1: boolean): void
        public abstract append(arg0: java.awt.geom.PathIterator, arg1: boolean): void
        public getWindingRule(): int
        public setWindingRule(arg0: int): void
        public getCurrentPoint(): java.awt.geom.Point2D
        public reset(): void
        public abstract transform(arg0: java.awt.geom.AffineTransform): void
        public createTransformedShape(arg0: java.awt.geom.AffineTransform): java.awt.Shape
        public getBounds(): java.awt.Rectangle
        public static contains(arg0: java.awt.geom.PathIterator, arg1: double, arg2: double): boolean
        public static contains(arg0: java.awt.geom.PathIterator, arg1: java.awt.geom.Point2D): boolean
        public contains(arg0: double, arg1: double): boolean
        public contains(arg0: java.awt.geom.Point2D): boolean
        public static contains(arg0: java.awt.geom.PathIterator, arg1: double, arg2: double, arg3: double, arg4: double): boolean
        public static contains(arg0: java.awt.geom.PathIterator, arg1: java.awt.geom.Rectangle2D): boolean
        public contains(arg0: double, arg1: double, arg2: double, arg3: double): boolean
        public contains(arg0: java.awt.geom.Rectangle2D): boolean
        public static intersects(arg0: java.awt.geom.PathIterator, arg1: double, arg2: double, arg3: double, arg4: double): boolean
        public static intersects(arg0: java.awt.geom.PathIterator, arg1: java.awt.geom.Rectangle2D): boolean
        public intersects(arg0: double, arg1: double, arg2: double, arg3: double): boolean
        public intersects(arg0: java.awt.geom.Rectangle2D): boolean
        public getPathIterator(arg0: java.awt.geom.AffineTransform, arg1: double): java.awt.geom.PathIterator
        public abstract clone(): java.lang.Object
        public abstract trimToSize(): void
        writeObject(arg0: java.io.ObjectOutputStream, arg1: boolean): void
        readObject(arg0: java.io.ObjectInputStream, arg1: boolean): void
      }

    }
  }
}
