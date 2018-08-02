declare namespace sun {
    namespace font {
class FontFamily {
    protected familyName: string
    protected plain: sun.font.Font2D
    protected bold: sun.font.Font2D
    protected italic: sun.font.Font2D
    protected bolditalic: sun.font.Font2D
    protected logicalFont: boolean
    protected familyRank: int
    public static getFamily(arg0: java.lang.String | string): sun.font.FontFamily
    public static getAllFamilyNames(): java.lang.String[]
    public constructor(arg0: java.lang.String | string, arg1: boolean, arg2: int)
    public getFamilyName(): string
    public getRank(): int
    public setFont(arg0: sun.font.Font2D, arg1: int): void
    public getFontWithExactStyleMatch(arg0: int): sun.font.Font2D
    public getFont(arg0: int): sun.font.Font2D
    public static getLocaleFamily(arg0: java.lang.String | string): sun.font.FontFamily
    public static getAllFontFamilies(): sun.font.FontFamily[]
    public toString(): string
    public static class: java.lang.Class<any>
}

    }
}