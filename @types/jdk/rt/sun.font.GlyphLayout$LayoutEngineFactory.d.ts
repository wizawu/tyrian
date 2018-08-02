declare namespace sun {
    namespace font {
        interface GlyphLayout$LayoutEngineFactory {
            getEngine(arg0: sun.font.Font2D, arg1: int, arg2: int): sun.font.GlyphLayout$LayoutEngine
            getEngine(arg0: sun.font.GlyphLayout$LayoutEngineKey): sun.font.GlyphLayout$LayoutEngine
        }
    }
}