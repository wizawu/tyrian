declare namespace sun {
    namespace awt {
class X11FontManager extends sun.awt.FcFontManager {
    public constructor()
    public static getInstance(): sun.awt.X11FontManager
    public getFileNameFromPlatformName(arg0: java.lang.String | string): string
    protected getNativeNames(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.String[]
    protected registerFontDir(arg0: java.lang.String | string): void
    public loadFonts(): void
    public getFileNameFromXLFD(arg0: java.lang.String | string): string
    protected registerFontDirs(arg0: java.lang.String | string): void
    protected addFontToPlatformFontPath(arg0: java.lang.String | string): void
    protected registerPlatformFontsUsedByFontConfiguration(): void
    protected createFontConfiguration(): sun.awt.FontConfiguration
    public createFontConfiguration(arg0: boolean, arg1: boolean): sun.awt.FontConfiguration
    protected getFontPath(arg0: boolean): string
    protected getFontConfigFUIR(arg0: java.lang.String | string, arg1: int, arg2: int): javax.swing.plaf.FontUIResource
    public static class: java.lang.Class<any>
}

    }
}