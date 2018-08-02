declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace db {
                        namespace glassfish {
                            class JAXBRIContextWrapper implements com.sun.xml.internal.ws.spi.db.BindingContext {
                                public createMarshaller(): javax.xml.bind.Marshaller
                                public createUnmarshaller(): javax.xml.bind.Unmarshaller
                                public generateSchema(arg0: javax.xml.bind.SchemaOutputResolver): void
                                public getBuildId(): string
                                public getElementName(arg0: java.lang.Class): javax.xml.namespace.QName
                                public getElementName(arg0: java.lang.Object): javax.xml.namespace.QName
                                public getElementPropertyAccessor<B, V>(arg0: java.lang.Class<B>, arg1: java.lang.String | string, arg2: java.lang.String | string): com.sun.xml.internal.ws.spi.db.PropertyAccessor<B, V>
                                public getKnownNamespaceURIs<B, V>(): java.util.List<java.lang.String>
                                public getRuntimeTypeInfoSet<B, V>(): com.sun.xml.internal.bind.v2.model.runtime.RuntimeTypeInfoSet
                                public getTypeName<B, V>(arg0: com.sun.xml.internal.bind.api.TypeReference): javax.xml.namespace.QName
                                public hashCode<B, V>(): int
                                public equals<B, V>(arg0: java.lang.Object): boolean
                                public hasSwaRef<B, V>(): boolean
                                public toString<B, V>(): string
                                public createBridge<B, V>(arg0: com.sun.xml.internal.ws.spi.db.TypeInfo): com.sun.xml.internal.ws.spi.db.XMLBridge
                                public getJAXBContext<B, V>(): javax.xml.bind.JAXBContext
                                public getTypeName<B, V>(arg0: com.sun.xml.internal.ws.spi.db.TypeInfo): javax.xml.namespace.QName
                                public createFragmentBridge<B, V>(): com.sun.xml.internal.ws.spi.db.XMLBridge
                                public newWrapperInstace<B, V>(arg0: java.lang.Class<any>): java.lang.Object
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}