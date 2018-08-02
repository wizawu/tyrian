declare namespace sun {
    namespace font {
class TextLabelFactory {
    public constructor(arg0: java.awt.font.FontRenderContext, arg1: char[], arg2: java.text.Bidi, arg3: int)
    public getFontRenderContext(): java.awt.font.FontRenderContext
    public getLineBidi(): java.text.Bidi
    public setLineContext(arg0: int, arg1: int): void
    public createExtended(arg0: java.awt.Font, arg1: sun.font.CoreMetrics, arg2: sun.font.Decoration, arg3: int, arg4: int): sun.font.ExtendedTextLabel
    public createSimple(arg0: java.awt.Font, arg1: sun.font.CoreMetrics, arg2: int, arg3: int): sun.font.TextLabel
    public static class: java.lang.Class<any>
}

    }
}