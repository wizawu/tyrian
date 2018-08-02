declare namespace sun {
    namespace font {
class FontDesignMetrics extends java.awt.FontMetrics {
    public static getMetrics(arg0: java.awt.Font): sun.font.FontDesignMetrics
    public static getMetrics(arg0: java.awt.Font, arg1: java.awt.font.FontRenderContext): sun.font.FontDesignMetrics
    public getFontRenderContext(): java.awt.font.FontRenderContext
    public charWidth(arg0: char): int
    public charWidth(arg0: int): int
    public stringWidth(arg0: java.lang.String | string): int
    public charsWidth(arg0: char[], arg1: int, arg2: int): int
    public getWidths(): int[]
    public getMaxAdvance(): int
    public getAscent(): int
    public getDescent(): int
    public getLeading(): int
    public getHeight(): int
    public static class: java.lang.Class<any>
}

    }
}