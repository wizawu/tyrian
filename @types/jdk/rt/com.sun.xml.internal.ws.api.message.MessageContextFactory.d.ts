declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace message {
class MessageContextFactory extends com.oracle.webservices.internal.api.message.MessageContextFactory {
    public constructor(arg0: javax.xml.ws.WebServiceFeature[])
    public constructor(arg0: com.sun.xml.internal.ws.api.WSFeatureList)
    protected newFactory(...arg0: javax.xml.ws.WebServiceFeature[]): com.oracle.webservices.internal.api.message.MessageContextFactory
    public createContext(): com.oracle.webservices.internal.api.message.MessageContext
    public createContext(arg0: javax.xml.soap.SOAPMessage): com.oracle.webservices.internal.api.message.MessageContext
    public createContext(arg0: javax.xml.transform.Source, arg1: com.oracle.webservices.internal.api.EnvelopeStyle$Style): com.oracle.webservices.internal.api.message.MessageContext
    public createContext(arg0: javax.xml.transform.Source): com.oracle.webservices.internal.api.message.MessageContext
    public createContext(arg0: java.io.InputStream, arg1: java.lang.String | string): com.oracle.webservices.internal.api.message.MessageContext
    public createContext(arg0: java.io.InputStream, arg1: javax.xml.soap.MimeHeaders): com.oracle.webservices.internal.api.message.MessageContext
    public createContext(arg0: com.sun.xml.internal.ws.api.message.Message): com.oracle.webservices.internal.api.message.MessageContext
    public doCreate(): com.oracle.webservices.internal.api.message.MessageContext
    public doCreate(arg0: javax.xml.soap.SOAPMessage): com.oracle.webservices.internal.api.message.MessageContext
    public doCreate(arg0: javax.xml.transform.Source, arg1: com.sun.xml.internal.ws.api.SOAPVersion): com.oracle.webservices.internal.api.message.MessageContext
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}