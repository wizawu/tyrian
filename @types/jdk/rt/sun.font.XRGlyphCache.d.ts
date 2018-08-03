declare namespace sun {
    namespace font {
        class XRGlyphCache implements sun.font.GlyphDisposedListener {
            public constructor(arg0: sun.java2d.xr.XRCompositeManager)
            public glyphDisposed(arg0: java.util.ArrayList<java.lang.Long>): void
            protected getFreeGlyphID(): int
            protected getEntryForPointer(arg0: long): sun.font.XRGlyphCacheEntry
            public cacheGlyphs(arg0: sun.font.GlyphList): sun.font.XRGlyphCacheEntry[]
            protected uploadGlyphs(arg0: sun.font.XRGlyphCacheEntry[], arg1: java.util.ArrayList<sun.font.XRGlyphCacheEntry>, arg2: sun.font.GlyphList, arg3: int[]): void
            protected seperateGlyphTypes(arg0: java.util.List<sun.font.XRGlyphCacheEntry>, arg1: boolean): java.util.List<sun.font.XRGlyphCacheEntry>[]
            protected generateGlyphImageStream(arg0: java.util.List<sun.font.XRGlyphCacheEntry>): byte[]
            protected containsLCDGlyphs(arg0: java.util.List<sun.font.XRGlyphCacheEntry>): boolean
            protected clearCache(arg0: sun.font.XRGlyphCacheEntry[]): void
            public static class: java.lang.Class<any>
        }
    }
}