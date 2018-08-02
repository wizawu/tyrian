declare namespace sun {
    namespace font {
class FontResolver {
    public getFontIndex(arg0: char): int
    public getFontIndex(arg0: int): int
    public nextFontRunIndex(arg0: sun.text.CodePointIterator): int
    public getFont(arg0: int, arg1: java.util.Map): java.awt.Font
    public static getInstance(): sun.font.FontResolver
    public static class: java.lang.Class<any>
}

    }
}