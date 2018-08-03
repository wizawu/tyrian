declare namespace java {
    namespace text {
        namespace spi {
            abstract class NumberFormatProvider extends java.util.spi.LocaleServiceProvider {
                protected constructor()
                public abstract getCurrencyInstance(arg0: java.util.Locale): java.text.NumberFormat
                public abstract getIntegerInstance(arg0: java.util.Locale): java.text.NumberFormat
                public abstract getNumberInstance(arg0: java.util.Locale): java.text.NumberFormat
                public abstract getPercentInstance(arg0: java.util.Locale): java.text.NumberFormat
                public static class: java.lang.Class<any>
            }
        }
    }
}