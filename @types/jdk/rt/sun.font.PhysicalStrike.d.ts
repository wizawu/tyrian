declare namespace sun {
    namespace font {
abstract class PhysicalStrike extends sun.font.FontStrike {
    protected mapper: sun.font.CharToGlyphMapper
    protected pScalerContext: long
    protected longGlyphImages: long[]
    protected intGlyphImages: int[]
    protected getImageWithAdvance: boolean
    protected static complexTX: int
    protected constructor()
    public getNumGlyphs(): int
    protected adjustPoint(arg0: java.awt.geom.Point2D$Float): void
    public static class: java.lang.Class<any>
}

    }
}