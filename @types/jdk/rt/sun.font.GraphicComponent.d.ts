declare namespace sun {
    namespace font {
        class GraphicComponent implements sun.font.TextLineComponent , sun.font.Decoration$Label {
            public static readonly GRAPHIC_LEADING: float
            public constructor(arg0: java.awt.font.GraphicAttribute, arg1: sun.font.Decoration, arg2: int[], arg3: byte[], arg4: int, arg5: int, arg6: java.awt.geom.AffineTransform)
            public isSimple(): boolean
            public getPixelBounds(arg0: java.awt.font.FontRenderContext, arg1: float, arg2: float): java.awt.Rectangle
            public handleGetVisualBounds(): java.awt.geom.Rectangle2D
            public getCoreMetrics(): sun.font.CoreMetrics
            public static createCoreMetrics(arg0: java.awt.font.GraphicAttribute): sun.font.CoreMetrics
            public getItalicAngle(): float
            public getVisualBounds(): java.awt.geom.Rectangle2D
            public handleGetOutline(arg0: float, arg1: float): java.awt.Shape
            public getBaselineTransform(): java.awt.geom.AffineTransform
            public getOutline(arg0: float, arg1: float): java.awt.Shape
            public handleDraw(arg0: java.awt.Graphics2D, arg1: float, arg2: float): void
            public draw(arg0: java.awt.Graphics2D, arg1: float, arg2: float): void
            public getCharVisualBounds(arg0: int): java.awt.geom.Rectangle2D
            public getNumCharacters(): int
            public getCharX(arg0: int): float
            public getCharY(arg0: int): float
            public getCharAdvance(arg0: int): float
            public caretAtOffsetIsValid(arg0: int): boolean
            public handleGetCharVisualBounds(arg0: int): java.awt.geom.Rectangle2D
            public getLineBreakIndex(arg0: int, arg1: float): int
            public getAdvanceBetween(arg0: int, arg1: int): float
            public getLogicalBounds(): java.awt.geom.Rectangle2D
            public getAdvance(): float
            public getItalicBounds(): java.awt.geom.Rectangle2D
            public getSubset(arg0: int, arg1: int, arg2: int): sun.font.TextLineComponent
            public toString(): string
            public getNumJustificationInfos(): int
            public getJustificationInfos(arg0: java.awt.font.GlyphJustificationInfo[], arg1: int, arg2: int, arg3: int): void
            public applyJustificationDeltas(arg0: float[], arg1: int, arg2: boolean[]): sun.font.TextLineComponent
            public static class: java.lang.Class<any>
        }
    }
}