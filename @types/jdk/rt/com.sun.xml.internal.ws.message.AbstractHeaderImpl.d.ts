declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace message {
                        abstract class AbstractHeaderImpl implements com.sun.xml.internal.ws.api.message.Header {
                            protected static EMPTY_ATTS: org.xml.sax.helpers.AttributesImpl
                            protected constructor()
                            public readAsJAXB<T>(arg0: com.sun.xml.internal.bind.api.Bridge<T>, arg1: com.sun.xml.internal.bind.api.BridgeContext): T
                            public readAsJAXB<T>(arg0: javax.xml.bind.Unmarshaller): T
                            public readAsJAXB<T>(arg0: com.sun.xml.internal.bind.api.Bridge<T>): T
                            public readAsJAXB<T>(arg0: com.sun.xml.internal.ws.spi.db.XMLBridge<T>): T
                            public readAsEPR<T>(arg0: com.sun.xml.internal.ws.api.addressing.AddressingVersion): com.sun.xml.internal.ws.api.addressing.WSEndpointReference
                            public isIgnorable<T>(arg0: com.sun.xml.internal.ws.api.SOAPVersion, arg1: java.util.Set<java.lang.String>): boolean
                            public getRole<T>(arg0: com.sun.xml.internal.ws.api.SOAPVersion): string
                            public isRelay<T>(): boolean
                            public getAttribute<T>(arg0: javax.xml.namespace.QName): string
                            protected parseBool<T>(arg0: java.lang.String | string): boolean
                            public getStringContent<T>(): string
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}