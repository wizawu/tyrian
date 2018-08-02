declare namespace sun {
    namespace font {
        class GlyphLayout$GVData {
            public _count: int
            public _flags: int
            public _glyphs: int[]
            public _positions: float[]
            public _indices: int[]
            public constructor()
            public init(arg0: int): void
            public grow(): void
            public grow(arg0: int): void
            public adjustPositions(arg0: java.awt.geom.AffineTransform): void
            public createGlyphVector(arg0: java.awt.Font, arg1: java.awt.font.FontRenderContext, arg2: sun.font.StandardGlyphVector): sun.font.StandardGlyphVector
            public static class: java.lang.Class<any>
        }
    }
}