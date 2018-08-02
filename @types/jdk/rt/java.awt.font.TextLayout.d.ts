declare namespace java {
    namespace awt {
        namespace font {
            class TextLayout implements java.lang.Cloneable {
                public static DEFAULT_CARET_POLICY: java.awt.font.TextLayout$CaretPolicy
                public constructor(arg0: java.lang.String | string, arg1: java.awt.Font, arg2: java.awt.font.FontRenderContext)
                public constructor(arg0: java.lang.String | string, arg1: java.util.Map<java.text.AttributedCharacterIterator$Attribute, any>, arg2: java.awt.font.FontRenderContext)
                public constructor(arg0: java.text.AttributedCharacterIterator, arg1: java.awt.font.FontRenderContext)
                protected clone(): java.lang.Object
                public getJustifiedLayout(arg0: float): java.awt.font.TextLayout
                protected handleJustify(arg0: float): void
                public getBaseline(): byte
                public getBaselineOffsets(): float[]
                public getAdvance(): float
                public getVisibleAdvance(): float
                public getAscent(): float
                public getDescent(): float
                public getLeading(): float
                public getBounds(): java.awt.geom.Rectangle2D
                public getPixelBounds(arg0: java.awt.font.FontRenderContext, arg1: float, arg2: float): java.awt.Rectangle
                public isLeftToRight(): boolean
                public isVertical(): boolean
                public getCharacterCount(): int
                public getCaretInfo(arg0: java.awt.font.TextHitInfo, arg1: java.awt.geom.Rectangle2D): float[]
                public getCaretInfo(arg0: java.awt.font.TextHitInfo): float[]
                public getNextRightHit(arg0: java.awt.font.TextHitInfo): java.awt.font.TextHitInfo
                public getNextRightHit(arg0: int, arg1: java.awt.font.TextLayout$CaretPolicy): java.awt.font.TextHitInfo
                public getNextRightHit(arg0: int): java.awt.font.TextHitInfo
                public getNextLeftHit(arg0: java.awt.font.TextHitInfo): java.awt.font.TextHitInfo
                public getNextLeftHit(arg0: int, arg1: java.awt.font.TextLayout$CaretPolicy): java.awt.font.TextHitInfo
                public getNextLeftHit(arg0: int): java.awt.font.TextHitInfo
                public getVisualOtherHit(arg0: java.awt.font.TextHitInfo): java.awt.font.TextHitInfo
                public getCaretShape(arg0: java.awt.font.TextHitInfo, arg1: java.awt.geom.Rectangle2D): java.awt.Shape
                public getCaretShape(arg0: java.awt.font.TextHitInfo): java.awt.Shape
                public getCharacterLevel(arg0: int): byte
                public getCaretShapes(arg0: int, arg1: java.awt.geom.Rectangle2D, arg2: java.awt.font.TextLayout$CaretPolicy): java.awt.Shape[]
                public getCaretShapes(arg0: int, arg1: java.awt.geom.Rectangle2D): java.awt.Shape[]
                public getCaretShapes(arg0: int): java.awt.Shape[]
                public getLogicalRangesForVisualSelection(arg0: java.awt.font.TextHitInfo, arg1: java.awt.font.TextHitInfo): int[]
                public getVisualHighlightShape(arg0: java.awt.font.TextHitInfo, arg1: java.awt.font.TextHitInfo, arg2: java.awt.geom.Rectangle2D): java.awt.Shape
                public getVisualHighlightShape(arg0: java.awt.font.TextHitInfo, arg1: java.awt.font.TextHitInfo): java.awt.Shape
                public getLogicalHighlightShape(arg0: int, arg1: int, arg2: java.awt.geom.Rectangle2D): java.awt.Shape
                public getLogicalHighlightShape(arg0: int, arg1: int): java.awt.Shape
                public getBlackBoxBounds(arg0: int, arg1: int): java.awt.Shape
                public hitTestChar(arg0: float, arg1: float, arg2: java.awt.geom.Rectangle2D): java.awt.font.TextHitInfo
                public hitTestChar(arg0: float, arg1: float): java.awt.font.TextHitInfo
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
                public equals(arg0: java.awt.font.TextLayout): boolean
                public toString(): string
                public draw(arg0: java.awt.Graphics2D, arg1: float, arg2: float): void
                public getOutline(arg0: java.awt.geom.AffineTransform): java.awt.Shape
                public getLayoutPath(): java.awt.font.LayoutPath
                public hitToPoint(arg0: java.awt.font.TextHitInfo, arg1: java.awt.geom.Point2D): void
                public static class: java.lang.Class<any>
            }
        }
    }
}