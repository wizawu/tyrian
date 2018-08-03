declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace spi {
                        namespace db {
                            abstract class BindingContextFactory {
                                public static readonly DefaultDatabindingMode: string
                                public static readonly JAXB_CONTEXT_FACTORY_PROPERTY: string
                                public static readonly LOGGER: java.util.logging.Logger
                                public constructor()
                                public static serviceIterator(): java.util.Iterator<com.sun.xml.internal.ws.spi.db.BindingContextFactory>
                                protected abstract newContext(arg0: javax.xml.bind.JAXBContext): com.sun.xml.internal.ws.spi.db.BindingContext
                                protected abstract newContext(arg0: com.sun.xml.internal.ws.spi.db.BindingInfo): com.sun.xml.internal.ws.spi.db.BindingContext
                                protected abstract isFor(arg0: java.lang.String | string): boolean
                                protected abstract getContext(arg0: javax.xml.bind.Marshaller): com.sun.xml.internal.ws.spi.db.BindingContext
                                public static create(arg0: javax.xml.bind.JAXBContext): com.sun.xml.internal.ws.spi.db.BindingContext
                                public static create(arg0: com.sun.xml.internal.ws.spi.db.BindingInfo): com.sun.xml.internal.ws.spi.db.BindingContext
                                public static isContextSupported(arg0: java.lang.Object): boolean
                                public static getBindingContext(arg0: javax.xml.bind.Marshaller): com.sun.xml.internal.ws.spi.db.BindingContext
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}