declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace spi {
                        namespace db {
                            abstract class WrapperAccessor {
                                protected propertySetters: java.util.Map<java.lang.Object, com.sun.xml.internal.ws.spi.db.PropertySetter>
                                protected propertyGetters: java.util.Map<java.lang.Object, com.sun.xml.internal.ws.spi.db.PropertyGetter>
                                protected elementLocalNameCollision: boolean
                                public constructor()
                                protected getPropertySetter(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.spi.db.PropertySetter
                                protected getPropertyGetter(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.spi.db.PropertyGetter
                                public getPropertyAccessor(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.xml.internal.ws.spi.db.PropertyAccessor
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}