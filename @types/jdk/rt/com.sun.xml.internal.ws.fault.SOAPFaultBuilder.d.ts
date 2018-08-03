declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace fault {
                        abstract class SOAPFaultBuilder {
                            public static readonly captureStackTrace: boolean
                            public constructor()
                            public getFirstDetailEntryName(): javax.xml.namespace.QName
                            public createException(arg0: java.util.Map<javax.xml.namespace.QName, com.sun.xml.internal.ws.model.CheckedExceptionImpl>): java.lang.Throwable
                            public static createSOAPFaultMessage(arg0: com.sun.xml.internal.ws.api.SOAPVersion, arg1: javax.xml.ws.ProtocolException, arg2: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.message.Message
                            public static createSOAPFaultMessage(arg0: com.sun.xml.internal.ws.api.SOAPVersion, arg1: com.sun.xml.internal.ws.model.CheckedExceptionImpl, arg2: java.lang.Throwable): com.sun.xml.internal.ws.api.message.Message
                            public static createSOAPFaultMessage(arg0: com.sun.xml.internal.ws.api.SOAPVersion, arg1: com.sun.xml.internal.ws.model.CheckedExceptionImpl, arg2: java.lang.Throwable, arg3: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.message.Message
                            public static createSOAPFaultMessage(arg0: com.sun.xml.internal.ws.api.SOAPVersion, arg1: java.lang.String | string, arg2: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.message.Message
                            public static createSOAPFaultMessage(arg0: com.sun.xml.internal.ws.api.SOAPVersion, arg1: javax.xml.soap.SOAPFault): com.sun.xml.internal.ws.api.message.Message
                            protected abstract getProtocolException(): java.lang.Throwable
                            public static create(arg0: com.sun.xml.internal.ws.api.message.Message): com.sun.xml.internal.ws.fault.SOAPFaultBuilder
                            public static class: java.lang.Class<any>
                        }
                        interface SOAPFaultBuilder$$Lambda {
                            (): java.lang.Throwable
                        }
                    }
                }
            }
        }
    }
}