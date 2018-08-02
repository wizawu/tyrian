declare namespace sun {
    namespace awt {
        namespace motif {
class MFontConfiguration extends sun.awt.FontConfiguration {
    public constructor(arg0: sun.font.SunFontManager)
    public constructor(arg0: sun.font.SunFontManager, arg1: boolean, arg2: boolean)
    protected initReorderMap(): void
    protected setOsNameAndVersion(): void
    protected mapFileName(arg0: java.lang.String | string): string
    public getFallbackFamilyName(arg0: java.lang.String | string, arg1: java.lang.String | string): string
    protected getEncoding(arg0: java.lang.String | string, arg1: java.lang.String | string): string
    protected getDefaultFontCharset(arg0: java.lang.String | string): java.nio.charset.Charset
    protected getFaceNameFromComponentFontName(arg0: java.lang.String | string): string
    protected getFileNameFromComponentFontName(arg0: java.lang.String | string): string
    public getAWTFontPathSet(): java.util.HashSet<java.lang.String>
    public static class: java.lang.Class<any>
}

        }
    }
}