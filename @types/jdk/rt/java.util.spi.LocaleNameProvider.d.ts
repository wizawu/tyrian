declare namespace java {
    namespace util {
        namespace spi {
            abstract class LocaleNameProvider extends java.util.spi.LocaleServiceProvider {
                protected constructor()
                public abstract getDisplayLanguage(arg0: java.lang.String | string, arg1: java.util.Locale): string
                public getDisplayScript(arg0: java.lang.String | string, arg1: java.util.Locale): string
                public abstract getDisplayCountry(arg0: java.lang.String | string, arg1: java.util.Locale): string
                public abstract getDisplayVariant(arg0: java.lang.String | string, arg1: java.util.Locale): string
                public static class: java.lang.Class<any>
            }
        }
    }
}