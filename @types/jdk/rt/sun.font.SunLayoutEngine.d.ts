declare namespace sun {
    namespace font {
class SunLayoutEngine implements sun.font.GlyphLayout$LayoutEngine , sun.font.GlyphLayout$LayoutEngineFactory {
    public static instance(): sun.font.GlyphLayout$LayoutEngineFactory
    public getEngine(arg0: sun.font.Font2D, arg1: int, arg2: int): sun.font.GlyphLayout$LayoutEngine
    public getEngine(arg0: sun.font.GlyphLayout$LayoutEngineKey): sun.font.GlyphLayout$LayoutEngine
    public layout(arg0: sun.font.FontStrikeDesc, arg1: float[], arg2: int, arg3: int, arg4: sun.font.TextRecord, arg5: int, arg6: java.awt.geom.Point2D$Float, arg7: sun.font.GlyphLayout$GVData): void
    public static class: java.lang.Class<any>
}

    }
}