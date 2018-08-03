declare namespace java {
    namespace text {
        namespace spi {
            abstract class DateFormatProvider extends java.util.spi.LocaleServiceProvider {
                protected constructor()
                public abstract getTimeInstance(arg0: int, arg1: java.util.Locale): java.text.DateFormat
                public abstract getDateInstance(arg0: int, arg1: java.util.Locale): java.text.DateFormat
                public abstract getDateTimeInstance(arg0: int, arg1: int, arg2: java.util.Locale): java.text.DateFormat
                public static class: java.lang.Class<any>
            }
        }
    }
}