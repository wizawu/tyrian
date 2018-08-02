declare namespace sun {
    namespace awt {
class FcFontManager extends sun.font.SunFontManager {
    public constructor()
    public getFontConfigManager(): sun.font.FontConfigManager
    protected createFontConfiguration(): sun.awt.FontConfiguration
    public createFontConfiguration(arg0: boolean, arg1: boolean): sun.awt.FontConfiguration
    protected getDefaultPlatformFont(): java.lang.String[]
    protected getFontPathNative(arg0: boolean, arg1: boolean): string
    protected getFontPath(arg0: boolean): string
    public static class: java.lang.Class<any>
}

    }
}