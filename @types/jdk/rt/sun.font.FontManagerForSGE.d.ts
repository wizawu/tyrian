declare namespace sun {
    namespace font {
interface FontManagerForSGE extends sun.font.FontManager {
    getCreatedFonts(): java.awt.Font[]
    getCreatedFontFamilyNames(): java.util.TreeMap<java.lang.String, java.lang.String>
    getAllInstalledFonts(): java.awt.Font[]
    getInstalledFontFamilyNames(arg0: java.util.Locale): java.lang.String[]
    useAlternateFontforJALocales(): void
}

    }
}