declare namespace sun {
    namespace font {
        class FontConfigManager {
            public constructor()
            public static getFontConfigAAHint(): java.lang.Object
            public static getFontConfigAAHint(arg0: java.lang.String | string): java.lang.Object
            public static getFontConfigVersion(): int
            public initFontConfigFonts(arg0: boolean): void
            public registerFromFcInfo(arg0: sun.font.FontConfigManager$FcCompFont): sun.font.PhysicalFont
            public getFontConfigFont(arg0: java.lang.String | string, arg1: int): sun.font.CompositeFont
            public getFontConfigFonts(): sun.font.FontConfigManager$FcCompFont[]
            public static class: java.lang.Class<any>
        }
    }
}