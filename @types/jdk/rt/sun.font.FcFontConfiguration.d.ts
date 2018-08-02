declare namespace sun {
    namespace font {
class FcFontConfiguration extends sun.awt.FontConfiguration {
    public constructor(arg0: sun.font.SunFontManager)
    public constructor(arg0: sun.font.SunFontManager, arg1: boolean, arg2: boolean)
    public init(): boolean
    public getFallbackFamilyName(arg0: java.lang.String | string, arg1: java.lang.String | string): string
    protected getFaceNameFromComponentFontName(arg0: java.lang.String | string): string
    protected getFileNameFromComponentFontName(arg0: java.lang.String | string): string
    public getFileNameFromPlatformName(arg0: java.lang.String | string): string
    protected getDefaultFontCharset(arg0: java.lang.String | string): java.nio.charset.Charset
    protected getEncoding(arg0: java.lang.String | string, arg1: java.lang.String | string): string
    protected initReorderMap(): void
    protected buildFontDescriptors(arg0: int, arg1: int): sun.awt.FontDescriptor[]
    public getNumberCoreFonts(): int
    public getPlatformFontNames(): java.lang.String[]
    public getExtraFontPath(): string
    public needToSearchForFile(arg0: java.lang.String | string): boolean
    public get2DCompositeFontInfo(): sun.font.CompositeFontDescriptor[]
    protected setOsNameAndVersion(): void
    public static class: java.lang.Class<any>
}

    }
}