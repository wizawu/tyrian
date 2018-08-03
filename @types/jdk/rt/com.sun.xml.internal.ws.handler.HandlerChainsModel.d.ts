declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace handler {
                        class HandlerChainsModel {
                            public static readonly PROTOCOL_SOAP11_TOKEN: string
                            public static readonly PROTOCOL_SOAP12_TOKEN: string
                            public static readonly PROTOCOL_XML_TOKEN: string
                            public static readonly NS_109: string
                            public static readonly QNAME_CHAIN_PORT_PATTERN: javax.xml.namespace.QName
                            public static readonly QNAME_CHAIN_PROTOCOL_BINDING: javax.xml.namespace.QName
                            public static readonly QNAME_CHAIN_SERVICE_PATTERN: javax.xml.namespace.QName
                            public static readonly QNAME_HANDLER_CHAIN: javax.xml.namespace.QName
                            public static readonly QNAME_HANDLER_CHAINS: javax.xml.namespace.QName
                            public static readonly QNAME_HANDLER: javax.xml.namespace.QName
                            public static readonly QNAME_HANDLER_NAME: javax.xml.namespace.QName
                            public static readonly QNAME_HANDLER_CLASS: javax.xml.namespace.QName
                            public static readonly QNAME_HANDLER_PARAM: javax.xml.namespace.QName
                            public static readonly QNAME_HANDLER_PARAM_NAME: javax.xml.namespace.QName
                            public static readonly QNAME_HANDLER_PARAM_VALUE: javax.xml.namespace.QName
                            public static readonly QNAME_HANDLER_HEADER: javax.xml.namespace.QName
                            public static readonly QNAME_HANDLER_ROLE: javax.xml.namespace.QName
                            public getId(): string
                            public setId(arg0: java.lang.String | string): void
                            public static parseHandlerConfigFile(arg0: java.lang.Class, arg1: javax.xml.stream.XMLStreamReader): com.sun.xml.internal.ws.handler.HandlerChainsModel
                            public static parseHandlerFile(arg0: javax.xml.stream.XMLStreamReader, arg1: java.lang.ClassLoader, arg2: javax.xml.namespace.QName, arg3: javax.xml.namespace.QName, arg4: com.sun.xml.internal.ws.api.WSBinding): com.sun.xml.internal.ws.util.HandlerAnnotationInfo
                            public getHandlersForPortInfo(arg0: javax.xml.ws.handler.PortInfo): com.sun.xml.internal.ws.util.HandlerAnnotationInfo
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}