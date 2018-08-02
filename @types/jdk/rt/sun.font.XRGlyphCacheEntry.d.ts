declare namespace sun {
    namespace font {
class XRGlyphCacheEntry {
    public constructor(arg0: long, arg1: sun.font.GlyphList)
    public getXOff(): int
    public getYOff(): int
    public setGlyphSet(arg0: int): void
    public getGlyphSet(): int
    public static getGlyphID(arg0: long): int
    public static setGlyphID(arg0: long, arg1: int): void
    public getGlyphID(): int
    public setGlyphID(arg0: int): void
    public getXAdvance(): float
    public getYAdvance(): float
    public getSourceRowBytes(): int
    public getWidth(): int
    public getHeight(): int
    public writePixelData(arg0: java.io.ByteArrayOutputStream, arg1: boolean): void
    public getTopLeftXOffset(): float
    public getTopLeftYOffset(): float
    public getGlyphInfoPtr(): long
    public isGrayscale(arg0: boolean): boolean
    public getPaddedWidth(arg0: boolean): int
    public getDestinationRowBytes(arg0: boolean): int
    public getGlyphDataLenth(arg0: boolean): int
    public setPinned(): void
    public setUnpinned(): void
    public getLastUsed(): int
    public setLastUsed(arg0: int): void
    public getPixelCnt(): int
    public isPinned(): boolean
    public static class: java.lang.Class<any>
}

    }
}