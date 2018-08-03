declare namespace java {
    namespace text {
        namespace spi {
            abstract class CollatorProvider extends java.util.spi.LocaleServiceProvider {
                protected constructor()
                public abstract getInstance(arg0: java.util.Locale): java.text.Collator
                public static class: java.lang.Class<any>
            }
            interface CollatorProvider$$Lambda extends java.util.spi.LocaleServiceProvider {
                (arg0: java.util.Locale): java.text.Collator
            }
        }
    }
}