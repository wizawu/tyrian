declare namespace sun {
    namespace font {
abstract class TextSource {
    public static WITHOUT_CONTEXT: boolean
    public static WITH_CONTEXT: boolean
    public constructor()
    public getChars(): char[]
    public getStart(): int
    public getLength(): int
    public getContextStart(): int
    public getContextLength(): int
    public getLayoutFlags(): int
    public getBidiLevel(): int
    public getFont(): java.awt.Font
    public getFRC(): java.awt.font.FontRenderContext
    public getCoreMetrics(): sun.font.CoreMetrics
    public getSubSource(arg0: int, arg1: int, arg2: int): sun.font.TextSource
    public toString(arg0: boolean): string
    public static class: java.lang.Class<any>
}

    }
}