declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace message {
abstract class Messages {
    public static create(arg0: javax.xml.bind.JAXBContext, arg1: java.lang.Object, arg2: com.sun.xml.internal.ws.api.SOAPVersion): com.sun.xml.internal.ws.api.message.Message
    public static createRaw(arg0: javax.xml.bind.JAXBContext, arg1: java.lang.Object, arg2: com.sun.xml.internal.ws.api.SOAPVersion): com.sun.xml.internal.ws.api.message.Message
    public static create(arg0: javax.xml.bind.Marshaller, arg1: java.lang.Object, arg2: com.sun.xml.internal.ws.api.SOAPVersion): com.sun.xml.internal.ws.api.message.Message
    public static create(arg0: javax.xml.soap.SOAPMessage): com.sun.xml.internal.ws.api.message.Message
    public static createUsingPayload(arg0: javax.xml.transform.Source, arg1: com.sun.xml.internal.ws.api.SOAPVersion): com.sun.xml.internal.ws.api.message.Message
    public static createUsingPayload(arg0: javax.xml.stream.XMLStreamReader, arg1: com.sun.xml.internal.ws.api.SOAPVersion): com.sun.xml.internal.ws.api.message.Message
    public static createUsingPayload(arg0: org.w3c.dom.Element, arg1: com.sun.xml.internal.ws.api.SOAPVersion): com.sun.xml.internal.ws.api.message.Message
    public static create(arg0: org.w3c.dom.Element): com.sun.xml.internal.ws.api.message.Message
    public static create(arg0: javax.xml.transform.Source, arg1: com.sun.xml.internal.ws.api.SOAPVersion): com.sun.xml.internal.ws.api.message.Message
    public static createEmpty(arg0: com.sun.xml.internal.ws.api.SOAPVersion): com.sun.xml.internal.ws.api.message.Message
    public static create(arg0: javax.xml.stream.XMLStreamReader): com.sun.xml.internal.ws.api.message.Message
    public static create(arg0: com.sun.xml.internal.stream.buffer.XMLStreamBuffer): com.sun.xml.internal.ws.api.message.Message
    public static create(arg0: java.lang.Throwable, arg1: com.sun.xml.internal.ws.api.SOAPVersion): com.sun.xml.internal.ws.api.message.Message
    public static create(arg0: javax.xml.soap.SOAPFault): com.sun.xml.internal.ws.api.message.Message
    public static createAddressingFaultMessage(arg0: com.sun.xml.internal.ws.api.WSBinding, arg1: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.message.Message
    public static createAddressingFaultMessage(arg0: com.sun.xml.internal.ws.api.WSBinding, arg1: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda, arg2: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.message.Message
    public static create(arg0: java.lang.String | string, arg1: com.sun.xml.internal.ws.api.addressing.AddressingVersion, arg2: com.sun.xml.internal.ws.api.SOAPVersion): com.sun.xml.internal.ws.api.message.Message
    public static create(arg0: com.sun.xml.internal.ws.api.SOAPVersion, arg1: javax.xml.ws.ProtocolException, arg2: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.message.Message
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}