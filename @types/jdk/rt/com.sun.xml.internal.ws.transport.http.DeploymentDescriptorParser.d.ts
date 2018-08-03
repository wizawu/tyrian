declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace transport {
                        namespace http {
                            class DeploymentDescriptorParser<A> {
                                public static readonly NS_RUNTIME: string
                                public static readonly JAXWS_WSDL_DD_DIR: string
                                public static readonly QNAME_ENDPOINTS: javax.xml.namespace.QName
                                public static readonly QNAME_ENDPOINT: javax.xml.namespace.QName
                                public static readonly QNAME_EXT_METADA: javax.xml.namespace.QName
                                public static readonly ATTR_FILE: string
                                public static readonly ATTR_RESOURCE: string
                                public static readonly ATTR_VERSION: string
                                public static readonly ATTR_NAME: string
                                public static readonly ATTR_IMPLEMENTATION: string
                                public static readonly ATTR_WSDL: string
                                public static readonly ATTR_SERVICE: string
                                public static readonly ATTR_PORT: string
                                public static readonly ATTR_URL_PATTERN: string
                                public static readonly ATTR_ENABLE_MTOM: string
                                public static readonly ATTR_MTOM_THRESHOLD_VALUE: string
                                public static readonly ATTR_BINDING: string
                                public static readonly ATTR_DATABINDING: string
                                public static readonly ATTRVALUE_SUPPORTED_VERSIONS: java.util.List<java.lang.String>
                                public constructor(arg0: java.lang.ClassLoader, arg1: com.sun.xml.internal.ws.transport.http.ResourceLoader, arg2: com.sun.xml.internal.ws.api.server.Container, arg3: com.sun.xml.internal.ws.transport.http.DeploymentDescriptorParser$AdapterFactory<A> | com.sun.xml.internal.ws.transport.http.DeploymentDescriptorParser$AdapterFactory$$Lambda<A>)
                                public parse(arg0: java.lang.String | string, arg1: java.io.InputStream | java.io.InputStream$$Lambda): java.util.List<A>
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