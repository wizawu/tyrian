declare namespace sun {
    namespace font {
class FontLineMetrics extends java.awt.font.LineMetrics implements java.lang.Cloneable {
    public numchars: int
    public cm: sun.font.CoreMetrics
    public frc: java.awt.font.FontRenderContext
    public constructor(arg0: int, arg1: sun.font.CoreMetrics, arg2: java.awt.font.FontRenderContext)
    public getNumChars(): int
    public getAscent(): float
    public getDescent(): float
    public getLeading(): float
    public getHeight(): float
    public getBaselineIndex(): int
    public getBaselineOffsets(): float[]
    public getStrikethroughOffset(): float
    public getStrikethroughThickness(): float
    public getUnderlineOffset(): float
    public getUnderlineThickness(): float
    public hashCode(): int
    public equals(arg0: java.lang.Object): boolean
    public clone(): java.lang.Object
    public static class: java.lang.Class<any>
}

    }
}