declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace handler {
                        class SOAPMessageContextImpl extends com.sun.xml.internal.ws.handler.MessageUpdatableContext implements javax.xml.ws.handler.soap.SOAPMessageContext {
                            public constructor(arg0: com.sun.xml.internal.ws.api.WSBinding, arg1: com.sun.xml.internal.ws.api.message.Packet, arg2: java.util.Set<java.lang.String>)
                            public getMessage(): javax.xml.soap.SOAPMessage
                            public setMessage(arg0: javax.xml.soap.SOAPMessage): void
                            protected updateMessage(): void
                            public getHeaders(arg0: javax.xml.namespace.QName, arg1: javax.xml.bind.JAXBContext, arg2: boolean): java.lang.Object[]
                            public getRoles(): java.util.Set<java.lang.String>
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}