declare namespace sun {
    namespace util {
        namespace locale {
class InternalLocaleBuilder {
    public constructor()
    public setLanguage(arg0: java.lang.String | string): sun.util.locale.InternalLocaleBuilder
    public setScript(arg0: java.lang.String | string): sun.util.locale.InternalLocaleBuilder
    public setRegion(arg0: java.lang.String | string): sun.util.locale.InternalLocaleBuilder
    public setVariant(arg0: java.lang.String | string): sun.util.locale.InternalLocaleBuilder
    public addUnicodeLocaleAttribute(arg0: java.lang.String | string): sun.util.locale.InternalLocaleBuilder
    public removeUnicodeLocaleAttribute(arg0: java.lang.String | string): sun.util.locale.InternalLocaleBuilder
    public setUnicodeLocaleKeyword(arg0: java.lang.String | string, arg1: java.lang.String | string): sun.util.locale.InternalLocaleBuilder
    public setExtension(arg0: char, arg1: java.lang.String | string): sun.util.locale.InternalLocaleBuilder
    public setExtensions(arg0: java.lang.String | string): sun.util.locale.InternalLocaleBuilder
    public setLanguageTag(arg0: sun.util.locale.LanguageTag): sun.util.locale.InternalLocaleBuilder
    public setLocale(arg0: sun.util.locale.BaseLocale, arg1: sun.util.locale.LocaleExtensions): sun.util.locale.InternalLocaleBuilder
    public clear(): sun.util.locale.InternalLocaleBuilder
    public clearExtensions(): sun.util.locale.InternalLocaleBuilder
    public getBaseLocale(): sun.util.locale.BaseLocale
    public getLocaleExtensions(): sun.util.locale.LocaleExtensions
    public static class: java.lang.Class<any>
}

        }
    }
}