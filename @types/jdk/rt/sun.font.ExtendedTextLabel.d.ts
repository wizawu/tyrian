declare namespace sun {
    namespace font {
abstract class ExtendedTextLabel extends sun.font.TextLabel implements sun.font.TextLineComponent {
    public constructor()
    public getNumCharacters(): int
    public getCoreMetrics(): sun.font.CoreMetrics
    public getCharX(arg0: int): float
    public getCharY(arg0: int): float
    public getCharAdvance(arg0: int): float
    public getCharVisualBounds(arg0: int, arg1: float, arg2: float): java.awt.geom.Rectangle2D
    public logicalToVisual(arg0: int): int
    public visualToLogical(arg0: int): int
    public getLineBreakIndex(arg0: int, arg1: float): int
    public getAdvanceBetween(arg0: int, arg1: int): float
    public caretAtOffsetIsValid(arg0: int): boolean
    public getCharVisualBounds(arg0: int): java.awt.geom.Rectangle2D
    public getSubset(arg0: int, arg1: int, arg2: int): sun.font.TextLineComponent
    public getNumJustificationInfos(): int
    public getJustificationInfos(arg0: java.awt.font.GlyphJustificationInfo[], arg1: int, arg2: int, arg3: int): void
    public applyJustificationDeltas(arg0: float[], arg1: int, arg2: boolean[]): sun.font.TextLineComponent
    public static class: java.lang.Class<any>
}

    }
}