declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace message {
                            class AddressingUtils {
                                public constructor()
                                public static fillRequestAddressingHeaders(arg0: com.sun.xml.internal.ws.api.message.MessageHeaders, arg1: com.sun.xml.internal.ws.api.message.Packet, arg2: com.sun.xml.internal.ws.api.addressing.AddressingVersion, arg3: com.sun.xml.internal.ws.api.SOAPVersion, arg4: boolean, arg5: java.lang.String | string): void
                                public static fillRequestAddressingHeaders(arg0: com.sun.xml.internal.ws.api.message.MessageHeaders, arg1: com.sun.xml.internal.ws.api.message.Packet, arg2: com.sun.xml.internal.ws.api.addressing.AddressingVersion, arg3: com.sun.xml.internal.ws.api.SOAPVersion, arg4: boolean, arg5: java.lang.String | string, arg6: boolean): void
                                public static fillRequestAddressingHeaders(arg0: com.sun.xml.internal.ws.api.message.MessageHeaders, arg1: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort, arg2: com.sun.xml.internal.ws.api.WSBinding, arg3: com.sun.xml.internal.ws.api.message.Packet): void
                                public static getAction(arg0: com.sun.xml.internal.ws.api.message.MessageHeaders, arg1: com.sun.xml.internal.ws.api.addressing.AddressingVersion, arg2: com.sun.xml.internal.ws.api.SOAPVersion): string
                                public static getFaultTo(arg0: com.sun.xml.internal.ws.api.message.MessageHeaders, arg1: com.sun.xml.internal.ws.api.addressing.AddressingVersion, arg2: com.sun.xml.internal.ws.api.SOAPVersion): com.sun.xml.internal.ws.api.addressing.WSEndpointReference
                                public static getMessageID(arg0: com.sun.xml.internal.ws.api.message.MessageHeaders, arg1: com.sun.xml.internal.ws.api.addressing.AddressingVersion, arg2: com.sun.xml.internal.ws.api.SOAPVersion): string
                                public static getRelatesTo(arg0: com.sun.xml.internal.ws.api.message.MessageHeaders, arg1: com.sun.xml.internal.ws.api.addressing.AddressingVersion, arg2: com.sun.xml.internal.ws.api.SOAPVersion): string
                                public static getReplyTo(arg0: com.sun.xml.internal.ws.api.message.MessageHeaders, arg1: com.sun.xml.internal.ws.api.addressing.AddressingVersion, arg2: com.sun.xml.internal.ws.api.SOAPVersion): com.sun.xml.internal.ws.api.addressing.WSEndpointReference
                                public static getTo(arg0: com.sun.xml.internal.ws.api.message.MessageHeaders, arg1: com.sun.xml.internal.ws.api.addressing.AddressingVersion, arg2: com.sun.xml.internal.ws.api.SOAPVersion): string
                                public static getFirstHeader(arg0: com.sun.xml.internal.ws.api.message.MessageHeaders, arg1: javax.xml.namespace.QName, arg2: boolean, arg3: com.sun.xml.internal.ws.api.SOAPVersion): com.sun.xml.internal.ws.api.message.Header
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}