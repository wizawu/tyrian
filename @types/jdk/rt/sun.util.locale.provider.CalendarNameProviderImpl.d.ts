declare namespace sun {
    namespace util {
        namespace locale {
            namespace provider {
                class CalendarNameProviderImpl extends java.util.spi.CalendarNameProvider implements sun.util.locale.provider.AvailableLanguageTags {
                    public constructor(arg0: sun.util.locale.provider.LocaleProviderAdapter$Type, arg1: java.util.Set<java.lang.String>)
                    public getDisplayName(arg0: java.lang.String | string, arg1: int, arg2: int, arg3: int, arg4: java.util.Locale): string
                    public getJavaTimeDisplayName(arg0: java.lang.String | string, arg1: int, arg2: int, arg3: int, arg4: java.util.Locale): string
                    public getDisplayNameImpl(arg0: java.lang.String | string, arg1: int, arg2: int, arg3: int, arg4: java.util.Locale, arg5: boolean): string
                    public getDisplayNames(arg0: java.lang.String | string, arg1: int, arg2: int, arg3: java.util.Locale): java.util.Map<java.lang.String, java.lang.Integer>
                    public getJavaTimeDisplayNames(arg0: java.lang.String | string, arg1: int, arg2: int, arg3: java.util.Locale): java.util.Map<java.lang.String, java.lang.Integer>
                    public getAvailableLocales(): java.util.Locale[]
                    public isSupportedLocale(arg0: java.util.Locale): boolean
                    public getAvailableLanguageTags(): java.util.Set<java.lang.String>
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}