declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace message {
                            abstract class Headers {
                                public static create(arg0: com.sun.xml.internal.ws.api.SOAPVersion, arg1: javax.xml.bind.Marshaller, arg2: java.lang.Object): com.sun.xml.internal.ws.api.message.Header
                                public static create(arg0: javax.xml.bind.JAXBContext, arg1: java.lang.Object): com.sun.xml.internal.ws.api.message.Header
                                public static create(arg0: com.sun.xml.internal.ws.spi.db.BindingContext, arg1: java.lang.Object): com.sun.xml.internal.ws.api.message.Header
                                public static create(arg0: com.sun.xml.internal.ws.api.SOAPVersion, arg1: javax.xml.bind.Marshaller, arg2: javax.xml.namespace.QName, arg3: java.lang.Object): com.sun.xml.internal.ws.api.message.Header
                                public static create(arg0: com.sun.xml.internal.bind.api.Bridge, arg1: java.lang.Object): com.sun.xml.internal.ws.api.message.Header
                                public static create(arg0: com.sun.xml.internal.ws.spi.db.XMLBridge, arg1: java.lang.Object): com.sun.xml.internal.ws.api.message.Header
                                public static create(arg0: javax.xml.soap.SOAPHeaderElement): com.sun.xml.internal.ws.api.message.Header
                                public static create(arg0: org.w3c.dom.Element): com.sun.xml.internal.ws.api.message.Header
                                public static create(arg0: com.sun.xml.internal.ws.api.SOAPVersion, arg1: org.w3c.dom.Element): com.sun.xml.internal.ws.api.message.Header
                                public static create(arg0: com.sun.xml.internal.ws.api.SOAPVersion, arg1: javax.xml.stream.XMLStreamReader): com.sun.xml.internal.ws.api.message.Header
                                public static create(arg0: javax.xml.namespace.QName, arg1: java.lang.String | string): com.sun.xml.internal.ws.api.message.Header
                                public static createMustUnderstand(arg0: com.sun.xml.internal.ws.api.SOAPVersion, arg1: javax.xml.namespace.QName, arg2: java.lang.String | string): com.sun.xml.internal.ws.api.message.Header
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}