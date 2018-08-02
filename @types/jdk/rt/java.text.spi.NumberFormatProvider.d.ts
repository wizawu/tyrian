declare namespace java {
    namespace text {
        namespace spi {
abstract class NumberFormatProvider extends java.util.spi.LocaleServiceProvider {
    protected constructor()
    public getCurrencyInstance(arg0: java.util.Locale): java.text.NumberFormat
    public getIntegerInstance(arg0: java.util.Locale): java.text.NumberFormat
    public getNumberInstance(arg0: java.util.Locale): java.text.NumberFormat
    public getPercentInstance(arg0: java.util.Locale): java.text.NumberFormat
    public static class: java.lang.Class<any>
}

        }
    }
}