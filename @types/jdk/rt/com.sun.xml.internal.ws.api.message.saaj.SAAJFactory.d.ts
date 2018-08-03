declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace message {
                            namespace saaj {
                                class SAAJFactory {
                                    public constructor()
                                    public static getMessageFactory(arg0: java.lang.String | string): javax.xml.soap.MessageFactory
                                    public static getSOAPFactory(arg0: java.lang.String | string): javax.xml.soap.SOAPFactory
                                    public static create(arg0: javax.xml.soap.SOAPMessage): com.sun.xml.internal.ws.api.message.Message
                                    public static read(arg0: com.sun.xml.internal.ws.api.SOAPVersion, arg1: com.sun.xml.internal.ws.api.message.Message): javax.xml.soap.SOAPMessage
                                    public static read(arg0: com.sun.xml.internal.ws.api.SOAPVersion, arg1: com.sun.xml.internal.ws.api.message.Message, arg2: com.sun.xml.internal.ws.api.message.Packet): javax.xml.soap.SOAPMessage
                                    public static read(arg0: com.sun.xml.internal.ws.api.message.Packet): com.sun.xml.internal.ws.message.saaj.SAAJMessage
                                    public readAsSAAJ(arg0: com.sun.xml.internal.ws.api.message.Packet): com.sun.xml.internal.ws.message.saaj.SAAJMessage
                                    public createMessageFactory(arg0: java.lang.String | string): javax.xml.soap.MessageFactory
                                    public createSOAPFactory(arg0: java.lang.String | string): javax.xml.soap.SOAPFactory
                                    public createMessage(arg0: javax.xml.soap.SOAPMessage): com.sun.xml.internal.ws.api.message.Message
                                    public readAsSOAPMessage(arg0: com.sun.xml.internal.ws.api.SOAPVersion, arg1: com.sun.xml.internal.ws.api.message.Message): javax.xml.soap.SOAPMessage
                                    public readAsSOAPMessageSax2Dom(arg0: com.sun.xml.internal.ws.api.SOAPVersion, arg1: com.sun.xml.internal.ws.api.message.Message): javax.xml.soap.SOAPMessage
                                    protected static addAttachmentsToSOAPMessage(arg0: javax.xml.soap.SOAPMessage, arg1: com.sun.xml.internal.ws.api.message.Message): void
                                    public readAsSOAPMessage(arg0: com.sun.xml.internal.ws.api.SOAPVersion, arg1: com.sun.xml.internal.ws.api.message.Message, arg2: com.sun.xml.internal.ws.api.message.Packet): javax.xml.soap.SOAPMessage
                                    public static class: java.lang.Class<any>
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}