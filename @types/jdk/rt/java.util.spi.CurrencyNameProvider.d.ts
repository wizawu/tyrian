declare namespace java {
    namespace util {
        namespace spi {
            abstract class CurrencyNameProvider extends java.util.spi.LocaleServiceProvider {
                protected constructor()
                public abstract getSymbol(arg0: java.lang.String | string, arg1: java.util.Locale): string
                public getDisplayName(arg0: java.lang.String | string, arg1: java.util.Locale): string
                public static class: java.lang.Class<any>
            }
            interface CurrencyNameProvider$$Lambda extends java.util.spi.LocaleServiceProvider {
                (arg0: java.lang.String | string, arg1: java.util.Locale): string
            }
        }
    }
}