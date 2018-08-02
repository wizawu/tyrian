declare namespace java {
    namespace awt {
        namespace font {
class TextLine {
    public constructor(arg0: java.awt.font.FontRenderContext, arg1: sun.font.TextLineComponent[], arg2: float[], arg3: char[], arg4: int, arg5: int, arg6: int[], arg7: byte[], arg8: boolean)
    public getPixelBounds(arg0: java.awt.font.FontRenderContext, arg1: float, arg2: float): java.awt.Rectangle
    public characterCount(): int
    public isDirectionLTR(): boolean
    public getMetrics(): java.awt.font.TextLine$TextLineMetrics
    public visualToLogical(arg0: int): int
    public logicalToVisual(arg0: int): int
    public getCharLevel(arg0: int): byte
    public isCharLTR(arg0: int): boolean
    public getCharType(arg0: int): int
    public isCharSpace(arg0: int): boolean
    public isCharWhitespace(arg0: int): boolean
    public getCharAngle(arg0: int): float
    public getCoreMetricsAt(arg0: int): sun.font.CoreMetrics
    public getCharAscent(arg0: int): float
    public getCharDescent(arg0: int): float
    public getCharShift(arg0: int): float
    public getCharAdvance(arg0: int): float
    public getCharXPosition(arg0: int): float
    public getCharYPosition(arg0: int): float
    public getCharLinePosition(arg0: int): float
    public getCharLinePosition(arg0: int, arg1: boolean): float
    public caretAtOffsetIsValid(arg0: int): boolean
    public getCharBounds(arg0: int): java.awt.geom.Rectangle2D
    public draw(arg0: java.awt.Graphics2D, arg1: float, arg2: float): void
    public getVisualBounds(): java.awt.geom.Rectangle2D
    public getItalicBounds(): java.awt.geom.Rectangle2D
    public getOutline(arg0: java.awt.geom.AffineTransform): java.awt.Shape
    public hashCode(): int
    public toString(): string
    public static fastCreateTextLine(arg0: java.awt.font.FontRenderContext, arg1: char[], arg2: java.awt.Font, arg3: sun.font.CoreMetrics, arg4: java.util.Map<java.text.AttributedCharacterIterator$Attribute, any>): java.awt.font.TextLine
    public static createComponentsOnRun(arg0: int, arg1: int, arg2: char[], arg3: int[], arg4: byte[], arg5: sun.font.TextLabelFactory, arg6: java.awt.Font, arg7: sun.font.CoreMetrics, arg8: java.awt.font.FontRenderContext, arg9: sun.font.Decoration, arg10: sun.font.TextLineComponent[], arg11: int): sun.font.TextLineComponent[]
    public static getComponents(arg0: java.awt.font.StyledParagraph, arg1: char[], arg2: int, arg3: int, arg4: int[], arg5: byte[], arg6: sun.font.TextLabelFactory): sun.font.TextLineComponent[]
    public static createLineFromText(arg0: char[], arg1: java.awt.font.StyledParagraph, arg2: sun.font.TextLabelFactory, arg3: boolean, arg4: float[]): java.awt.font.TextLine
    public static standardCreateTextLine(arg0: java.awt.font.FontRenderContext, arg1: java.text.AttributedCharacterIterator, arg2: char[], arg3: float[]): java.awt.font.TextLine
    public getJustifiedLine(arg0: float, arg1: float, arg2: int, arg3: int): java.awt.font.TextLine
    public static getAdvanceBetween(arg0: sun.font.TextLineComponent[], arg1: int, arg2: int): float
    public static class: java.lang.Class<any>
}

        }
    }
}