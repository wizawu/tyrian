declare namespace java {
  namespace awt {
    namespace geom {

      class AffineTransform implements java.lang.Cloneable, java.io.Serializable {
        public static readonly TYPE_IDENTITY: int
        public static readonly TYPE_TRANSLATION: int
        public static readonly TYPE_UNIFORM_SCALE: int
        public static readonly TYPE_GENERAL_SCALE: int
        public static readonly TYPE_MASK_SCALE: int
        public static readonly TYPE_FLIP: int
        public static readonly TYPE_QUADRANT_ROTATION: int
        public static readonly TYPE_GENERAL_ROTATION: int
        public static readonly TYPE_MASK_ROTATION: int
        public static readonly TYPE_GENERAL_TRANSFORM: int
        static readonly APPLY_IDENTITY: int
        static readonly APPLY_TRANSLATE: int
        static readonly APPLY_SCALE: int
        static readonly APPLY_SHEAR: int
        m00: double
        m10: double
        m01: double
        m11: double
        m02: double
        m12: double
        state: int
        public constructor()
        public constructor(arg0: java.awt.geom.AffineTransform)
        public constructor(arg0: number | java.lang.Float, arg1: number | java.lang.Float, arg2: number | java.lang.Float, arg3: number | java.lang.Float, arg4: number | java.lang.Float, arg5: number | java.lang.Float)
        public constructor(arg0: float[])
        public constructor(arg0: number | java.lang.Double, arg1: number | java.lang.Double, arg2: number | java.lang.Double, arg3: number | java.lang.Double, arg4: number | java.lang.Double, arg5: number | java.lang.Double)
        public constructor(arg0: double[])
        public static getTranslateInstance(arg0: number | java.lang.Double, arg1: number | java.lang.Double): java.awt.geom.AffineTransform
        public static getRotateInstance(arg0: number | java.lang.Double): java.awt.geom.AffineTransform
        public static getRotateInstance(arg0: number | java.lang.Double, arg1: number | java.lang.Double, arg2: number | java.lang.Double): java.awt.geom.AffineTransform
        public static getRotateInstance(arg0: number | java.lang.Double, arg1: number | java.lang.Double): java.awt.geom.AffineTransform
        public static getRotateInstance(arg0: number | java.lang.Double, arg1: number | java.lang.Double, arg2: number | java.lang.Double, arg3: number | java.lang.Double): java.awt.geom.AffineTransform
        public static getQuadrantRotateInstance(arg0: number | java.lang.Integer): java.awt.geom.AffineTransform
        public static getQuadrantRotateInstance(arg0: number | java.lang.Integer, arg1: number | java.lang.Double, arg2: number | java.lang.Double): java.awt.geom.AffineTransform
        public static getScaleInstance(arg0: number | java.lang.Double, arg1: number | java.lang.Double): java.awt.geom.AffineTransform
        public static getShearInstance(arg0: number | java.lang.Double, arg1: number | java.lang.Double): java.awt.geom.AffineTransform
        public getType(): number
        public getDeterminant(): number
        updateState(): void
        public getMatrix(arg0: double[]): void
        public getScaleX(): number
        public getScaleY(): number
        public getShearX(): number
        public getShearY(): number
        public getTranslateX(): number
        public getTranslateY(): number
        public translate(arg0: number | java.lang.Double, arg1: number | java.lang.Double): void
        public rotate(arg0: number | java.lang.Double): void
        public rotate(arg0: number | java.lang.Double, arg1: number | java.lang.Double, arg2: number | java.lang.Double): void
        public rotate(arg0: number | java.lang.Double, arg1: number | java.lang.Double): void
        public rotate(arg0: number | java.lang.Double, arg1: number | java.lang.Double, arg2: number | java.lang.Double, arg3: number | java.lang.Double): void
        public quadrantRotate(arg0: number | java.lang.Integer): void
        public quadrantRotate(arg0: number | java.lang.Integer, arg1: number | java.lang.Double, arg2: number | java.lang.Double): void
        public scale(arg0: number | java.lang.Double, arg1: number | java.lang.Double): void
        public shear(arg0: number | java.lang.Double, arg1: number | java.lang.Double): void
        public setToIdentity(): void
        public setToTranslation(arg0: number | java.lang.Double, arg1: number | java.lang.Double): void
        public setToRotation(arg0: number | java.lang.Double): void
        public setToRotation(arg0: number | java.lang.Double, arg1: number | java.lang.Double, arg2: number | java.lang.Double): void
        public setToRotation(arg0: number | java.lang.Double, arg1: number | java.lang.Double): void
        public setToRotation(arg0: number | java.lang.Double, arg1: number | java.lang.Double, arg2: number | java.lang.Double, arg3: number | java.lang.Double): void
        public setToQuadrantRotation(arg0: number | java.lang.Integer): void
        public setToQuadrantRotation(arg0: number | java.lang.Integer, arg1: number | java.lang.Double, arg2: number | java.lang.Double): void
        public setToScale(arg0: number | java.lang.Double, arg1: number | java.lang.Double): void
        public setToShear(arg0: number | java.lang.Double, arg1: number | java.lang.Double): void
        public setTransform(arg0: java.awt.geom.AffineTransform): void
        public setTransform(arg0: number | java.lang.Double, arg1: number | java.lang.Double, arg2: number | java.lang.Double, arg3: number | java.lang.Double, arg4: number | java.lang.Double, arg5: number | java.lang.Double): void
        public concatenate(arg0: java.awt.geom.AffineTransform): void
        public preConcatenate(arg0: java.awt.geom.AffineTransform): void
        public createInverse(): java.awt.geom.AffineTransform
        public invert(): void
        public transform(arg0: java.awt.geom.Point2D, arg1: java.awt.geom.Point2D): java.awt.geom.Point2D
        public transform(arg0: java.awt.geom.Point2D[], arg1: number | java.lang.Integer, arg2: java.awt.geom.Point2D[], arg3: number | java.lang.Integer, arg4: number | java.lang.Integer): void
        public transform(arg0: float[], arg1: number | java.lang.Integer, arg2: float[], arg3: number | java.lang.Integer, arg4: number | java.lang.Integer): void
        public transform(arg0: double[], arg1: number | java.lang.Integer, arg2: double[], arg3: number | java.lang.Integer, arg4: number | java.lang.Integer): void
        public transform(arg0: float[], arg1: number | java.lang.Integer, arg2: double[], arg3: number | java.lang.Integer, arg4: number | java.lang.Integer): void
        public transform(arg0: double[], arg1: number | java.lang.Integer, arg2: float[], arg3: number | java.lang.Integer, arg4: number | java.lang.Integer): void
        public inverseTransform(arg0: java.awt.geom.Point2D, arg1: java.awt.geom.Point2D): java.awt.geom.Point2D
        public inverseTransform(arg0: double[], arg1: number | java.lang.Integer, arg2: double[], arg3: number | java.lang.Integer, arg4: number | java.lang.Integer): void
        public deltaTransform(arg0: java.awt.geom.Point2D, arg1: java.awt.geom.Point2D): java.awt.geom.Point2D
        public deltaTransform(arg0: double[], arg1: number | java.lang.Integer, arg2: double[], arg3: number | java.lang.Integer, arg4: number | java.lang.Integer): void
        public createTransformedShape(arg0: java.awt.Shape): java.awt.Shape
        public toString(): java.lang.String
        public isIdentity(): boolean
        public clone(): java.lang.Object
        public hashCode(): number
        public equals(arg0: java.lang.Object | any): boolean
      }

    }
  }
}
