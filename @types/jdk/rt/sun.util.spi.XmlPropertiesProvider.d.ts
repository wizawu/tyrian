declare namespace sun {
    namespace util {
        namespace spi {
            abstract class XmlPropertiesProvider {
                protected constructor()
                public load(arg0: java.util.Properties, arg1: java.io.InputStream): void
                public store(arg0: java.util.Properties, arg1: java.io.OutputStream, arg2: java.lang.String | string, arg3: java.lang.String | string): void
                public static class: java.lang.Class<any>
            }
        }
    }
}