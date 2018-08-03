declare namespace sun {
    namespace font {
        abstract class ExtendedTextLabel extends sun.font.TextLabel implements sun.font.TextLineComponent {
            public constructor()
            public abstract getNumCharacters(): int
            public abstract getCoreMetrics(): sun.font.CoreMetrics
            public abstract getCharX(arg0: int): float
            public abstract getCharY(arg0: int): float
            public abstract getCharAdvance(arg0: int): float
            public abstract getCharVisualBounds(arg0: int, arg1: float, arg2: float): java.awt.geom.Rectangle2D
            public abstract logicalToVisual(arg0: int): int
            public abstract visualToLogical(arg0: int): int
            public abstract getLineBreakIndex(arg0: int, arg1: float): int
            public abstract getAdvanceBetween(arg0: int, arg1: int): float
            public abstract caretAtOffsetIsValid(arg0: int): boolean
            public getCharVisualBounds(arg0: int): java.awt.geom.Rectangle2D
            public abstract getSubset(arg0: int, arg1: int, arg2: int): sun.font.TextLineComponent
            public abstract getNumJustificationInfos(): int
            public abstract getJustificationInfos(arg0: java.awt.font.GlyphJustificationInfo[], arg1: int, arg2: int, arg3: int): void
            public abstract applyJustificationDeltas(arg0: float[], arg1: int, arg2: boolean[]): sun.font.TextLineComponent
            public static class: java.lang.Class<any>
        }
    }
}