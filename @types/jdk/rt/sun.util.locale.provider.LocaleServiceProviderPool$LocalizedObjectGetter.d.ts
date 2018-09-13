declare namespace sun {
    namespace util {
        namespace locale {
            namespace provider {
                interface LocaleServiceProviderPool$LocalizedObjectGetter<P extends java.util.spi.LocaleServiceProvider, S> {
                    getObject(arg0: P, arg1: java.util.Locale, arg2: java.lang.String | string, ...arg3: java.lang.Object[]): S
                }
                interface LocaleServiceProviderPool$LocalizedObjectGetter$$Lambda<P extends java.util.spi.LocaleServiceProvider, S> {
                    (arg0: P, arg1: java.util.Locale, arg2: java.lang.String | string, ...arg3: java.lang.Object[]): S
                }
            }
        }
    }
}