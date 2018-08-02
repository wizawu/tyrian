declare namespace sun {
    namespace font {
        class ExtendedTextSourceLabel extends sun.font.ExtendedTextLabel implements sun.font.Decoration$Label {
            public constructor(arg0: sun.font.TextSource, arg1: sun.font.Decoration)
            public constructor(arg0: sun.font.TextSource, arg1: sun.font.ExtendedTextSourceLabel, arg2: int)
            public getLogicalBounds(): java.awt.geom.Rectangle2D
            public getLogicalBounds(arg0: float, arg1: float): java.awt.geom.Rectangle2D
            public getAdvance(): float
            public getVisualBounds(arg0: float, arg1: float): java.awt.geom.Rectangle2D
            public getAlignBounds(arg0: float, arg1: float): java.awt.geom.Rectangle2D
            public getItalicBounds(arg0: float, arg1: float): java.awt.geom.Rectangle2D
            public getPixelBounds(arg0: java.awt.font.FontRenderContext, arg1: float, arg2: float): java.awt.Rectangle
            public isSimple(): boolean
            public getBaselineTransform(): java.awt.geom.AffineTransform
            public handleGetOutline(arg0: float, arg1: float): java.awt.Shape
            public getOutline(arg0: float, arg1: float): java.awt.Shape
            public handleDraw(arg0: java.awt.Graphics2D, arg1: float, arg2: float): void
            public draw(arg0: java.awt.Graphics2D, arg1: float, arg2: float): void
            protected createLogicalBounds(): java.awt.geom.Rectangle2D
            public handleGetVisualBounds(): java.awt.geom.Rectangle2D
            protected createAlignBounds(): java.awt.geom.Rectangle2D
            public createItalicBounds(): java.awt.geom.Rectangle2D
            protected createGV(): sun.font.StandardGlyphVector
            public getNumCharacters(): int
            public getCoreMetrics(): sun.font.CoreMetrics
            public getCharX(arg0: int): float
            public getCharY(arg0: int): float
            public getCharAdvance(arg0: int): float
            public handleGetCharVisualBounds(arg0: int): java.awt.geom.Rectangle2D
            public getCharVisualBounds(arg0: int, arg1: float, arg2: float): java.awt.geom.Rectangle2D
            public logicalToVisual(arg0: int): int
            public visualToLogical(arg0: int): int
            public getLineBreakIndex(arg0: int, arg1: float): int
            public getAdvanceBetween(arg0: int, arg1: int): float
            public caretAtOffsetIsValid(arg0: int): boolean
            protected createCharinfo(): float[]
            protected l2v(arg0: int): int
            protected v2l(arg0: int): int
            public getSubset(arg0: int, arg1: int, arg2: int): sun.font.TextLineComponent
            public toString(): string
            public getNumJustificationInfos(): int
            public getJustificationInfos(arg0: java.awt.font.GlyphJustificationInfo[], arg1: int, arg2: int, arg3: int): void
            public applyJustificationDeltas(arg0: float[], arg1: int, arg2: boolean[]): sun.font.TextLineComponent
            public static class: java.lang.Class<any>
        }
    }
}