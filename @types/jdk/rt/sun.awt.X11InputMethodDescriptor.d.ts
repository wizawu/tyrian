declare namespace sun {
    namespace awt {
abstract class X11InputMethodDescriptor implements java.awt.im.spi.InputMethodDescriptor {
    public constructor()
    public getAvailableLocales(): java.util.Locale[]
    public hasDynamicLocaleList(): boolean
    public getInputMethodDisplayName(arg0: java.util.Locale, arg1: java.util.Locale): string
    public getInputMethodIcon(arg0: java.util.Locale): java.awt.Image
    public createInputMethod(): java.awt.im.spi.InputMethod
    public static class: java.lang.Class<any>
}

    }
}