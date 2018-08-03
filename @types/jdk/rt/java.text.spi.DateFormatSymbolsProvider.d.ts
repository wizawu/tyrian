declare namespace java {
    namespace text {
        namespace spi {
            abstract class DateFormatSymbolsProvider extends java.util.spi.LocaleServiceProvider {
                protected constructor()
                public abstract getInstance(arg0: java.util.Locale): java.text.DateFormatSymbols
                public static class: java.lang.Class<any>
            }
            interface DateFormatSymbolsProvider$$Lambda extends java.util.spi.LocaleServiceProvider {
                (arg0: java.util.Locale): java.text.DateFormatSymbols
            }
        }
    }
}