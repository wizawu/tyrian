declare namespace java {
    namespace util {
        namespace spi {
            abstract class TimeZoneNameProvider extends java.util.spi.LocaleServiceProvider {
                protected constructor()
                public abstract getDisplayName(arg0: java.lang.String | string, arg1: boolean, arg2: int, arg3: java.util.Locale): string
                public getGenericDisplayName(arg0: java.lang.String | string, arg1: int, arg2: java.util.Locale): string
                public static class: java.lang.Class<any>
            }
            interface TimeZoneNameProvider$$Lambda extends java.util.spi.LocaleServiceProvider {
                (arg0: java.lang.String | string, arg1: boolean, arg2: int, arg3: java.util.Locale): string
            }
        }
    }
}