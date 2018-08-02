declare namespace sun {
    namespace font {
        class NativeFont extends sun.font.PhysicalFont {
            public constructor(arg0: java.lang.String | string, arg1: boolean)
            public static fontExists(arg0: java.lang.String | string): boolean
            public getMapper(): sun.font.CharToGlyphMapper
            public getMaxCharBounds(arg0: java.awt.font.FontRenderContext): java.awt.geom.Rectangle2D
            public getGlyphOutline(arg0: long, arg1: int, arg2: float, arg3: float): java.awt.geom.GeneralPath
            public getGlyphVectorOutline(arg0: long, arg1: int[], arg2: int, arg3: float, arg4: float): java.awt.geom.GeneralPath
            public getNumGlyphs(): int
            public toString(): string
            public static class: java.lang.Class<any>
        }
    }
}