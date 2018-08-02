declare namespace sun {
    namespace util {
        namespace locale {
            namespace provider {
                class FallbackLocaleProviderAdapter extends sun.util.locale.provider.JRELocaleProviderAdapter {
                    public constructor()
                    public getAdapterType(): sun.util.locale.provider.LocaleProviderAdapter$Type
                    public getLocaleResources(arg0: java.util.Locale): sun.util.locale.provider.LocaleResources
                    protected createLanguageTagSet(arg0: java.lang.String | string): java.util.Set<java.lang.String>
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}