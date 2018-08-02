declare namespace sun {
    namespace util {
        namespace locale {
            namespace provider {
interface SPILocaleProviderAdapter$Delegate<P extends java.util.spi.LocaleServiceProvider> {
    addImpl(arg0: P): void
    getImpl(arg0: java.util.Locale): P
}

            }
        }
    }
}