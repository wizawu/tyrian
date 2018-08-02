declare namespace com {
    namespace oracle {
        namespace webservices {
            namespace internal {
                namespace api {
                    namespace message {
                        abstract class MessageContextFactory {
                            public constructor()
                            protected newFactory(...arg0: javax.xml.ws.WebServiceFeature[]): com.oracle.webservices.internal.api.message.MessageContextFactory
                            public createContext(): com.oracle.webservices.internal.api.message.MessageContext
                            public createContext(arg0: javax.xml.soap.SOAPMessage): com.oracle.webservices.internal.api.message.MessageContext
                            public createContext(arg0: javax.xml.transform.Source): com.oracle.webservices.internal.api.message.MessageContext
                            public createContext(arg0: javax.xml.transform.Source, arg1: com.oracle.webservices.internal.api.EnvelopeStyle$Style): com.oracle.webservices.internal.api.message.MessageContext
                            public createContext(arg0: java.io.InputStream, arg1: java.lang.String | string): com.oracle.webservices.internal.api.message.MessageContext
                            public createContext(arg0: java.io.InputStream, arg1: javax.xml.soap.MimeHeaders): com.oracle.webservices.internal.api.message.MessageContext
                            public static createFactory(...arg0: javax.xml.ws.WebServiceFeature[]): com.oracle.webservices.internal.api.message.MessageContextFactory
                            public static createFactory(arg0: java.lang.ClassLoader, ...arg1: javax.xml.ws.WebServiceFeature[]): com.oracle.webservices.internal.api.message.MessageContextFactory
                            public doCreate(): com.oracle.webservices.internal.api.message.MessageContext
                            public doCreate(arg0: javax.xml.soap.SOAPMessage): com.oracle.webservices.internal.api.message.MessageContext
                            public doCreate(arg0: javax.xml.transform.Source, arg1: com.sun.xml.internal.ws.api.SOAPVersion): com.oracle.webservices.internal.api.message.MessageContext
                            public static create(...arg0: java.lang.ClassLoader[]): com.oracle.webservices.internal.api.message.MessageContext
                            public static create(arg0: javax.xml.soap.SOAPMessage, ...arg1: java.lang.ClassLoader[]): com.oracle.webservices.internal.api.message.MessageContext
                            public static create(arg0: javax.xml.transform.Source, arg1: com.sun.xml.internal.ws.api.SOAPVersion, ...arg2: java.lang.ClassLoader[]): com.oracle.webservices.internal.api.message.MessageContext
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}