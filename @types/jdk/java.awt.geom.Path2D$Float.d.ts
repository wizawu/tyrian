declare namespace java {
  namespace awt {
    namespace geom {

      class Path2D$Float extends java.awt.geom.Path2D implements java.io.Serializable {

        floatCoords: float[]
        static readonly $assertionsDisabled: boolean
        public constructor()
        public constructor(arg0: int)
        public constructor(arg0: int, arg1: int)
        public constructor(arg0: java.awt.Shape)
        public constructor(arg0: java.awt.Shape, arg1: java.awt.geom.AffineTransform)
        public readonly trimToSize(): void
        cloneCoordsFloat(arg0: java.awt.geom.AffineTransform): float[]
        cloneCoordsDouble(arg0: java.awt.geom.AffineTransform): double[]
        append(arg0: float, arg1: float): void
        append(arg0: double, arg1: double): void
        getPoint(arg0: int): java.awt.geom.Point2D
        needRoom(arg0: boolean, arg1: int): void
        static expandCoords(arg0: float[], arg1: int): float[]
        public readonly moveTo(arg0: double, arg1: double): void
        public readonly moveTo(arg0: float, arg1: float): void
        public readonly lineTo(arg0: double, arg1: double): void
        public readonly lineTo(arg0: float, arg1: float): void
        public readonly quadTo(arg0: double, arg1: double, arg2: double, arg3: double): void
        public readonly quadTo(arg0: float, arg1: float, arg2: float, arg3: float): void
        public readonly curveTo(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): void
        public readonly curveTo(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): void
        pointCrossings(arg0: double, arg1: double): int
        rectCrossings(arg0: double, arg1: double, arg2: double, arg3: double): int
        public readonly append(arg0: java.awt.geom.PathIterator, arg1: boolean): void
        public readonly transform(arg0: java.awt.geom.AffineTransform): void
        public readonly getBounds2D(): java.awt.geom.Rectangle2D
        public readonly getPathIterator(arg0: java.awt.geom.AffineTransform): java.awt.geom.PathIterator
        public readonly clone(): java.lang.Object
      }

    }
  }
}
