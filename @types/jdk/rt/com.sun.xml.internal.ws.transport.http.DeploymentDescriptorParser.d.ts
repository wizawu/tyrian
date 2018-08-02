declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace transport {
                        namespace http {
                            class DeploymentDescriptorParser<A> {
                                public static NS_RUNTIME: string
                                public static JAXWS_WSDL_DD_DIR: string
                                public static QNAME_ENDPOINTS: javax.xml.namespace.QName
                                public static QNAME_ENDPOINT: javax.xml.namespace.QName
                                public static QNAME_EXT_METADA: javax.xml.namespace.QName
                                public static ATTR_FILE: string
                                public static ATTR_RESOURCE: string
                                public static ATTR_VERSION: string
                                public static ATTR_NAME: string
                                public static ATTR_IMPLEMENTATION: string
                                public static ATTR_WSDL: string
                                public static ATTR_SERVICE: string
                                public static ATTR_PORT: string
                                public static ATTR_URL_PATTERN: string
                                public static ATTR_ENABLE_MTOM: string
                                public static ATTR_MTOM_THRESHOLD_VALUE: string
                                public static ATTR_BINDING: string
                                public static ATTR_DATABINDING: string
                                public static ATTRVALUE_SUPPORTED_VERSIONS: java.util.List<java.lang.String>
                                public constructor(arg0: java.lang.ClassLoader, arg1: com.sun.xml.internal.ws.transport.http.ResourceLoader, arg2: com.sun.xml.internal.ws.api.server.Container, arg3: com.sun.xml.internal.ws.transport.http.DeploymentDescriptorParser$AdapterFactory<A> | com.sun.xml.internal.ws.transport.http.DeploymentDescriptorParser$AdapterFactory$$Lambda<A>)
                                public parse(arg0: java.lang.String | string, arg1: java.io.InputStream): java.util.List<A>
                                public parse(arg0: java.io.File): java.util.List<A>
                                public static getBindingIdForToken(arg0: java.lang.String | string): string
                                protected getAttribute(arg0: com.sun.xml.internal.ws.streaming.Attributes, arg1: java.lang.String | string): string
                                protected getQNameAttribute(arg0: com.sun.xml.internal.ws.streaming.Attributes, arg1: java.lang.String | string): javax.xml.namespace.QName
                                protected getNonEmptyAttribute(arg0: javax.xml.stream.XMLStreamReader, arg1: com.sun.xml.internal.ws.streaming.Attributes, arg2: java.lang.String | string): string
                                protected getMandatoryAttribute(arg0: javax.xml.stream.XMLStreamReader, arg1: com.sun.xml.internal.ws.streaming.Attributes, arg2: java.lang.String | string): string
                                protected getMandatoryNonEmptyAttribute(arg0: javax.xml.stream.XMLStreamReader, arg1: com.sun.xml.internal.ws.streaming.Attributes, arg2: java.lang.String | string): string
                                protected setHandlersAndRoles(arg0: com.sun.xml.internal.ws.api.WSBinding, arg1: javax.xml.stream.XMLStreamReader, arg2: javax.xml.namespace.QName, arg3: javax.xml.namespace.QName): boolean
                                protected configureExternalMetadataReader(arg0: javax.xml.stream.XMLStreamReader): com.oracle.webservices.internal.api.databinding.ExternalMetadataFeature
                                protected static fail(arg0: java.lang.String | string, arg1: javax.xml.stream.XMLStreamReader): void
                                protected static failWithFullName(arg0: java.lang.String | string, arg1: javax.xml.stream.XMLStreamReader): void
                                protected static failWithLocalName(arg0: java.lang.String | string, arg1: javax.xml.stream.XMLStreamReader): void
                                protected static failWithLocalName(arg0: java.lang.String | string, arg1: javax.xml.stream.XMLStreamReader, arg2: java.lang.String | string): void
                                protected loadClass(arg0: java.lang.String | string): java.lang.Class
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}