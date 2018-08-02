declare namespace java {
    namespace awt {
        namespace geom {
class AffineTransform implements java.lang.Cloneable , java.io.Serializable {
    public static TYPE_IDENTITY: int
    public static TYPE_TRANSLATION: int
    public static TYPE_UNIFORM_SCALE: int
    public static TYPE_GENERAL_SCALE: int
    public static TYPE_MASK_SCALE: int
    public static TYPE_FLIP: int
    public static TYPE_QUADRANT_ROTATION: int
    public static TYPE_GENERAL_ROTATION: int
    public static TYPE_MASK_ROTATION: int
    public static TYPE_GENERAL_TRANSFORM: int
    public constructor()
    public constructor(arg0: java.awt.geom.AffineTransform)
    public constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float)
    public constructor(arg0: float[])
    public constructor(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double)
    public constructor(arg0: double[])
    public static getTranslateInstance(arg0: double, arg1: double): java.awt.geom.AffineTransform
    public static getRotateInstance(arg0: double): java.awt.geom.AffineTransform
    public static getRotateInstance(arg0: double, arg1: double, arg2: double): java.awt.geom.AffineTransform
    public static getRotateInstance(arg0: double, arg1: double): java.awt.geom.AffineTransform
    public static getRotateInstance(arg0: double, arg1: double, arg2: double, arg3: double): java.awt.geom.AffineTransform
    public static getQuadrantRotateInstance(arg0: int): java.awt.geom.AffineTransform
    public static getQuadrantRotateInstance(arg0: int, arg1: double, arg2: double): java.awt.geom.AffineTransform
    public static getScaleInstance(arg0: double, arg1: double): java.awt.geom.AffineTransform
    public static getShearInstance(arg0: double, arg1: double): java.awt.geom.AffineTransform
    public getType(): int
    public getDeterminant(): double
    public getMatrix(arg0: double[]): void
    public getScaleX(): double
    public getScaleY(): double
    public getShearX(): double
    public getShearY(): double
    public getTranslateX(): double
    public getTranslateY(): double
    public translate(arg0: double, arg1: double): void
    public rotate(arg0: double): void
    public rotate(arg0: double, arg1: double, arg2: double): void
    public rotate(arg0: double, arg1: double): void
    public rotate(arg0: double, arg1: double, arg2: double, arg3: double): void
    public quadrantRotate(arg0: int): void
    public quadrantRotate(arg0: int, arg1: double, arg2: double): void
    public scale(arg0: double, arg1: double): void
    public shear(arg0: double, arg1: double): void
    public setToIdentity(): void
    public setToTranslation(arg0: double, arg1: double): void
    public setToRotation(arg0: double): void
    public setToRotation(arg0: double, arg1: double, arg2: double): void
    public setToRotation(arg0: double, arg1: double): void
    public setToRotation(arg0: double, arg1: double, arg2: double, arg3: double): void
    public setToQuadrantRotation(arg0: int): void
    public setToQuadrantRotation(arg0: int, arg1: double, arg2: double): void
    public setToScale(arg0: double, arg1: double): void
    public setToShear(arg0: double, arg1: double): void
    public setTransform(arg0: java.awt.geom.AffineTransform): void
    public setTransform(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): void
    public concatenate(arg0: java.awt.geom.AffineTransform): void
    public preConcatenate(arg0: java.awt.geom.AffineTransform): void
    public createInverse(): java.awt.geom.AffineTransform
    public invert(): void
    public transform(arg0: java.awt.geom.Point2D, arg1: java.awt.geom.Point2D): java.awt.geom.Point2D
    public transform(arg0: java.awt.geom.Point2D[], arg1: int, arg2: java.awt.geom.Point2D[], arg3: int, arg4: int): void
    public transform(arg0: float[], arg1: int, arg2: float[], arg3: int, arg4: int): void
    public transform(arg0: double[], arg1: int, arg2: double[], arg3: int, arg4: int): void
    public transform(arg0: float[], arg1: int, arg2: double[], arg3: int, arg4: int): void
    public transform(arg0: double[], arg1: int, arg2: float[], arg3: int, arg4: int): void
    public inverseTransform(arg0: java.awt.geom.Point2D, arg1: java.awt.geom.Point2D): java.awt.geom.Point2D
    public inverseTransform(arg0: double[], arg1: int, arg2: double[], arg3: int, arg4: int): void
    public deltaTransform(arg0: java.awt.geom.Point2D, arg1: java.awt.geom.Point2D): java.awt.geom.Point2D
    public deltaTransform(arg0: double[], arg1: int, arg2: double[], arg3: int, arg4: int): void
    public createTransformedShape(arg0: java.awt.Shape): java.awt.Shape
    public toString(): string
    public isIdentity(): boolean
    public clone(): java.lang.Object
    public hashCode(): int
    public equals(arg0: java.lang.Object): boolean
    public static class: java.lang.Class<any>
}

        }
    }
}