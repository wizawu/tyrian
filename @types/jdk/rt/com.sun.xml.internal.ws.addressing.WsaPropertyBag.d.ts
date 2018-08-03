declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace addressing {
                        class WsaPropertyBag extends com.oracle.webservices.internal.api.message.BasePropertySet {
                            public static WSA_REPLYTO_FROM_REQUEST: string
                            public static WSA_FAULTTO_FROM_REQUEST: string
                            public static WSA_MSGID_FROM_REQUEST: string
                            public static WSA_TO: string
                            public constructor(arg0: com.sun.xml.internal.ws.api.addressing.AddressingVersion, arg1: com.sun.xml.internal.ws.api.SOAPVersion, arg2: com.sun.xml.internal.ws.api.message.Packet)
                            public getTo(): string
                            public getToAsReference(): com.sun.xml.internal.ws.api.addressing.WSEndpointReference
                            public getFrom(): com.sun.xml.internal.ws.api.addressing.WSEndpointReference
                            public getAction(): string
                            public getMessageID(): string
                            protected getPropertyMap(): com.oracle.webservices.internal.api.message.BasePropertySet$PropertyMap
                            public getReplyToFromRequest(): com.sun.xml.internal.ws.api.addressing.WSEndpointReference
                            public setReplyToFromRequest(arg0: com.sun.xml.internal.ws.api.addressing.WSEndpointReference): void
                            public getFaultToFromRequest(): com.sun.xml.internal.ws.api.addressing.WSEndpointReference
                            public setFaultToFromRequest(arg0: com.sun.xml.internal.ws.api.addressing.WSEndpointReference): void
                            public getMessageIdFromRequest(): string
                            public setMessageIdFromRequest(arg0: java.lang.String | string): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}