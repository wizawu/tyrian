declare namespace sun {
    namespace font {
        abstract class FontStrike {
            protected disposer: sun.font.FontStrikeDisposer
            protected desc: sun.font.FontStrikeDesc
            protected strikeMetrics: sun.font.StrikeMetrics
            protected algoStyle: boolean
            protected boldness: float
            protected italic: float
            public constructor()
            public abstract getNumGlyphs(): int
            public static class: java.lang.Class<any>
        }
        interface FontStrike$$Lambda {
            (): int
        }
    }
}