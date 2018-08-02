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
    public getNumGlyphs(): int
    public static class: java.lang.Class<any>
}

    }
}