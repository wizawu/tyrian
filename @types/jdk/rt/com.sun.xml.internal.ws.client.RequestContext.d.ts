declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace client {
                        class RequestContext extends com.oracle.webservices.internal.api.message.BaseDistributedPropertySet {
                            public contentNegotiation: com.sun.xml.internal.ws.client.ContentNegotiation
                            public addSatellite(arg0: com.sun.xml.internal.ws.api.PropertySet): void
                            public getEndPointAddressString(): string
                            public setEndPointAddressString(arg0: java.lang.String | string): void
                            public setEndpointAddress(arg0: com.sun.xml.internal.ws.api.EndpointAddress): void
                            public getEndpointAddress(): com.sun.xml.internal.ws.api.EndpointAddress
                            public getContentNegotiationString(): string
                            public setContentNegotiationString(arg0: java.lang.String | string): void
                            public getSoapAction(): string
                            public setSoapAction(arg0: java.lang.String | string): void
                            public getSoapActionUse(): boolean
                            public setSoapActionUse(arg0: java.lang.Boolean | boolean): void
                            public get(arg0: java.lang.Object): java.lang.Object
                            public put(arg0: java.lang.String | string, arg1: java.lang.Object): java.lang.Object
                            public fill(arg0: com.sun.xml.internal.ws.api.message.Packet, arg1: boolean): void
                            public copy(): com.sun.xml.internal.ws.client.RequestContext
                            protected getPropertyMap(): com.oracle.webservices.internal.api.message.BasePropertySet$PropertyMap
                            protected mapAllowsAdditionalProperties(): boolean
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}