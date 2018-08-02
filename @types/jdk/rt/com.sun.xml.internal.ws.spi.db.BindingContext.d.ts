declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace spi {
                        namespace db {
interface BindingContext {
    DEFAULT_NAMESPACE_REMAP: string
    TYPE_REFERENCES: string
    CANONICALIZATION_SUPPORT: string
    TREAT_EVERYTHING_NILLABLE: string
    ENABLE_XOP: string
    SUBCLASS_REPLACEMENTS: string
    XMLACCESSORFACTORY_SUPPORT: string
    RETAIN_REFERENCE_TO_INFO: string
    createMarshaller(): javax.xml.bind.Marshaller
    createUnmarshaller(): javax.xml.bind.Unmarshaller
    getJAXBContext(): javax.xml.bind.JAXBContext
    newWrapperInstace(arg0: java.lang.Class<any>): java.lang.Object
    hasSwaRef(): boolean
    getElementName(arg0: java.lang.Object): javax.xml.namespace.QName
    getElementName(arg0: java.lang.Class): javax.xml.namespace.QName
    createBridge(arg0: com.sun.xml.internal.ws.spi.db.TypeInfo): com.sun.xml.internal.ws.spi.db.XMLBridge
    createFragmentBridge(): com.sun.xml.internal.ws.spi.db.XMLBridge
    getElementPropertyAccessor<B, V>(arg0: java.lang.Class<B>, arg1: java.lang.String | string, arg2: java.lang.String | string): com.sun.xml.internal.ws.spi.db.PropertyAccessor<B, V>
    getKnownNamespaceURIs(): java.util.List<java.lang.String>
    generateSchema(arg0: javax.xml.bind.SchemaOutputResolver): void
    getTypeName(arg0: com.sun.xml.internal.ws.spi.db.TypeInfo): javax.xml.namespace.QName
    getBuildId(): string
}

                        }
                    }
                }
            }
        }
    }
}