declare namespace sun {
    namespace font {
        interface TextLineComponent {
            LEFT_TO_RIGHT: int
            RIGHT_TO_LEFT: int
            UNCHANGED: int
            getCoreMetrics(): sun.font.CoreMetrics
            draw(arg0: java.awt.Graphics2D, arg1: float, arg2: float): void
            getCharVisualBounds(arg0: int): java.awt.geom.Rectangle2D
            getVisualBounds(): java.awt.geom.Rectangle2D
            getAdvance(): float
            getOutline(arg0: float, arg1: float): java.awt.Shape
            getNumCharacters(): int
            getCharX(arg0: int): float
            getCharY(arg0: int): float
            getCharAdvance(arg0: int): float
            caretAtOffsetIsValid(arg0: int): boolean
            getLineBreakIndex(arg0: int, arg1: float): int
            getAdvanceBetween(arg0: int, arg1: int): float
            getLogicalBounds(): java.awt.geom.Rectangle2D
            getItalicBounds(): java.awt.geom.Rectangle2D
            getBaselineTransform(): java.awt.geom.AffineTransform
            isSimple(): boolean
            getPixelBounds(arg0: java.awt.font.FontRenderContext, arg1: float, arg2: float): java.awt.Rectangle
            getSubset(arg0: int, arg1: int, arg2: int): sun.font.TextLineComponent
            getNumJustificationInfos(): int
            getJustificationInfos(arg0: java.awt.font.GlyphJustificationInfo[], arg1: int, arg2: int, arg3: int): void
            applyJustificationDeltas(arg0: float[], arg1: int, arg2: boolean[]): sun.font.TextLineComponent
        }
    }
}