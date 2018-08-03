declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace addressing {
                            class OneWayFeature extends javax.xml.ws.WebServiceFeature {
                                public static readonly ID: string
                                public constructor()
                                public constructor(arg0: boolean)
                                public constructor(arg0: boolean, arg1: com.sun.xml.internal.ws.api.addressing.WSEndpointReference)
                                public constructor(arg0: boolean, arg1: com.sun.xml.internal.ws.api.addressing.WSEndpointReference, arg2: com.sun.xml.internal.ws.api.addressing.WSEndpointReference, arg3: java.lang.String | string)
                                public constructor(arg0: com.sun.xml.internal.ws.api.addressing.AddressingPropertySet, arg1: com.sun.xml.internal.ws.api.addressing.AddressingVersion)
                                public getMessageId(): string
                                public getID(): string
                                public hasSslEprs(): boolean
                                public getReplyTo(): com.sun.xml.internal.ws.api.addressing.WSEndpointReference
                                public getReplyTo(arg0: boolean): com.sun.xml.internal.ws.api.addressing.WSEndpointReference
                                public setReplyTo(arg0: com.sun.xml.internal.ws.api.addressing.WSEndpointReference): void
                                public getSslReplyTo(): com.sun.xml.internal.ws.api.addressing.WSEndpointReference
                                public setSslReplyTo(arg0: com.sun.xml.internal.ws.api.addressing.WSEndpointReference): void
                                public getFrom(): com.sun.xml.internal.ws.api.addressing.WSEndpointReference
                                public setFrom(arg0: com.sun.xml.internal.ws.api.addressing.WSEndpointReference): void
                                public getRelatesToID(): string
                                public setRelatesToID(arg0: java.lang.String | string): void
                                public getFaultTo(): com.sun.xml.internal.ws.api.addressing.WSEndpointReference
                                public getFaultTo(arg0: boolean): com.sun.xml.internal.ws.api.addressing.WSEndpointReference
                                public setFaultTo(arg0: com.sun.xml.internal.ws.api.addressing.WSEndpointReference): void
                                public getSslFaultTo(): com.sun.xml.internal.ws.api.addressing.WSEndpointReference
                                public setSslFaultTo(arg0: com.sun.xml.internal.ws.api.addressing.WSEndpointReference): void
                                public isUseAsyncWithSyncInvoke(): boolean
                                public setUseAsyncWithSyncInvoke(arg0: boolean): void
                                public static enableSslForEpr(arg0: com.sun.xml.internal.ws.api.addressing.WSEndpointReference, arg1: java.lang.String | string, arg2: int): com.sun.xml.internal.ws.api.addressing.WSEndpointReference
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}