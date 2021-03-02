declare namespace java {
  namespace awt {
    namespace font {

      class TextLayout implements java.lang.Cloneable {
        public static readonly DEFAULT_CARET_POLICY: java.awt.font.TextLayout$CaretPolicy
        public constructor(arg0: java.lang.String | string, arg1: java.awt.Font, arg2: java.awt.font.FontRenderContext)
        public constructor(arg0: java.lang.String | string, arg1: java.util.Map<java.text.AttributedCharacterIterator$Attribute,unknown>, arg2: java.awt.font.FontRenderContext)
        public constructor(arg0: java.text.AttributedCharacterIterator, arg1: java.awt.font.FontRenderContext)
        constructor(arg0: java.awt.font.TextLine, arg1: number | java.lang.Byte, arg2: float[], arg3: number | java.lang.Float)
        protected clone(): java.lang.Object
        public getJustifiedLayout(arg0: number | java.lang.Float): java.awt.font.TextLayout
        protected handleJustify(arg0: number | java.lang.Float): void
        public getBaseline(): number
        public getBaselineOffsets(): number[]
        public getAdvance(): number
        public getVisibleAdvance(): number
        public getAscent(): number
        public getDescent(): number
        public getLeading(): number
        public getBounds(): java.awt.geom.Rectangle2D
        public getPixelBounds(arg0: java.awt.font.FontRenderContext, arg1: number | java.lang.Float, arg2: number | java.lang.Float): java.awt.Rectangle
        public isLeftToRight(): boolean
        public isVertical(): boolean
        public getCharacterCount(): number
        public getCaretInfo(arg0: java.awt.font.TextHitInfo, arg1: java.awt.geom.Rectangle2D): number[]
        public getCaretInfo(arg0: java.awt.font.TextHitInfo): number[]
        public getNextRightHit(arg0: java.awt.font.TextHitInfo): java.awt.font.TextHitInfo
        public getNextRightHit(arg0: number | java.lang.Integer, arg1: java.awt.font.TextLayout$CaretPolicy): java.awt.font.TextHitInfo
        public getNextRightHit(arg0: number | java.lang.Integer): java.awt.font.TextHitInfo
        public getNextLeftHit(arg0: java.awt.font.TextHitInfo): java.awt.font.TextHitInfo
        public getNextLeftHit(arg0: number | java.lang.Integer, arg1: java.awt.font.TextLayout$CaretPolicy): java.awt.font.TextHitInfo
        public getNextLeftHit(arg0: number | java.lang.Integer): java.awt.font.TextHitInfo
        public getVisualOtherHit(arg0: java.awt.font.TextHitInfo): java.awt.font.TextHitInfo
        public getCaretShape(arg0: java.awt.font.TextHitInfo, arg1: java.awt.geom.Rectangle2D): java.awt.Shape
        public getCaretShape(arg0: java.awt.font.TextHitInfo): java.awt.Shape
        public getCharacterLevel(arg0: number | java.lang.Integer): number
        public getCaretShapes(arg0: number | java.lang.Integer, arg1: java.awt.geom.Rectangle2D, arg2: java.awt.font.TextLayout$CaretPolicy): java.awt.Shape[]
        public getCaretShapes(arg0: number | java.lang.Integer, arg1: java.awt.geom.Rectangle2D): java.awt.Shape[]
        public getCaretShapes(arg0: number | java.lang.Integer): java.awt.Shape[]
        public getLogicalRangesForVisualSelection(arg0: java.awt.font.TextHitInfo, arg1: java.awt.font.TextHitInfo): number[]
        public getVisualHighlightShape(arg0: java.awt.font.TextHitInfo, arg1: java.awt.font.TextHitInfo, arg2: java.awt.geom.Rectangle2D): java.awt.Shape
        public getVisualHighlightShape(arg0: java.awt.font.TextHitInfo, arg1: java.awt.font.TextHitInfo): java.awt.Shape
        public getLogicalHighlightShape(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: java.awt.geom.Rectangle2D): java.awt.Shape
        public getLogicalHighlightShape(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.awt.Shape
        public getBlackBoxBounds(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.awt.Shape
        public hitTestChar(arg0: number | java.lang.Float, arg1: number | java.lang.Float, arg2: java.awt.geom.Rectangle2D): java.awt.font.TextHitInfo
        public hitTestChar(arg0: number | java.lang.Float, arg1: number | java.lang.Float): java.awt.font.TextHitInfo
        public equals(arg0: java.awt.font.TextLayout): boolean
        public toString(): java.lang.String
        public draw(arg0: java.awt.Graphics2D, arg1: number | java.lang.Float, arg2: number | java.lang.Float): void
        getTextLineForTesting(): java.awt.font.TextLine
        static getBaselineFromGraphic(arg0: java.awt.font.GraphicAttribute): number
        public getOutline(arg0: java.awt.geom.AffineTransform): java.awt.Shape
        public getLayoutPath(): java.awt.font.LayoutPath
        public hitToPoint(arg0: java.awt.font.TextHitInfo, arg1: java.awt.geom.Point2D): void
      }

    }
  }
}
