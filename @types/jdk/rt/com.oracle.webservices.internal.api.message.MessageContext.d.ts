declare namespace com {
    namespace oracle {
        namespace webservices {
            namespace internal {
                namespace api {
                    namespace message {
interface MessageContext extends com.oracle.webservices.internal.api.message.DistributedPropertySet {
    getAsSOAPMessage(): javax.xml.soap.SOAPMessage
    getSOAPMessage(): javax.xml.soap.SOAPMessage
    writeTo(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): com.oracle.webservices.internal.api.message.ContentType
    getContentType(): com.oracle.webservices.internal.api.message.ContentType
}

                    }
                }
            }
        }
    }
}