declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace message {
                            class Packet extends com.oracle.webservices.internal.api.message.BaseDistributedPropertySet implements com.oracle.webservices.internal.api.message.MessageContext , com.sun.xml.internal.ws.api.message.MessageMetadata {
                                public wasTransportSecure: boolean
                                public static INBOUND_TRANSPORT_HEADERS: string
                                public static OUTBOUND_TRANSPORT_HEADERS: string
                                public static HA_INFO: string
                                public handlerConfig: com.sun.xml.internal.ws.client.HandlerConfiguration
                                public proxy: javax.xml.ws.BindingProvider
                                public isAdapterDeliversNonAnonymousResponse: boolean
                                public packetTakesPriorityOverRequestContext: boolean
                                public endpointAddress: com.sun.xml.internal.ws.api.EndpointAddress
                                public contentNegotiation: com.sun.xml.internal.ws.client.ContentNegotiation
                                public acceptableMimeTypes: string
                                public webServiceContextDelegate: com.sun.xml.internal.ws.api.server.WebServiceContextDelegate
                                public transportBackChannel: com.sun.xml.internal.ws.api.server.TransportBackChannel
                                public component: com.sun.xml.internal.ws.api.Component
                                public endpoint: com.sun.xml.internal.ws.api.server.WSEndpoint
                                public soapAction: string
                                public expectReply: boolean
                                public isOneWay: boolean
                                public isSynchronousMEP: boolean
                                public nonNullAsyncHandlerGiven: boolean
                                public invocationProperties: java.util.Map<java.lang.String, java.lang.Object>
                                public codec: com.sun.xml.internal.ws.api.pipe.Codec
                                public constructor(arg0: com.sun.xml.internal.ws.api.message.Message)
                                public constructor()
                                public copy(arg0: boolean): com.sun.xml.internal.ws.api.message.Packet
                                public getMessage(): com.sun.xml.internal.ws.api.message.Message
                                public getInternalMessage(): com.sun.xml.internal.ws.api.message.Message
                                public getBinding(): com.sun.xml.internal.ws.api.WSBinding
                                public setMessage(arg0: com.sun.xml.internal.ws.api.message.Message): void
                                public getWSDLOperation(): javax.xml.namespace.QName
                                public getWSDLOperationMapping(): com.sun.xml.internal.ws.api.model.WSDLOperationMapping
                                public setWSDLOperation(arg0: javax.xml.namespace.QName): void
                                public getEndPointAddressString(): string
                                public setEndPointAddressString(arg0: java.lang.String | string): void
                                public getContentNegotiationString(): string
                                public setContentNegotiationString(arg0: java.lang.String | string): void
                                public getReferenceParameters(): java.util.List<org.w3c.dom.Element>
                                public keepTransportBackChannelOpen(): com.sun.xml.internal.ws.api.server.TransportBackChannel
                                public isRequestReplyMEP(): boolean
                                public setRequestReplyMEP(arg0: java.lang.Boolean | boolean): void
                                public getHandlerScopePropertyNames(arg0: boolean): java.util.Set<java.lang.String>
                                public getApplicationScopePropertyNames(arg0: boolean): java.util.Set<java.lang.String>
                                public createResponse(arg0: com.sun.xml.internal.ws.api.message.Message): com.sun.xml.internal.ws.api.message.Packet
                                public createClientResponse(arg0: com.sun.xml.internal.ws.api.message.Message): com.sun.xml.internal.ws.api.message.Packet
                                public relateClientResponse(arg0: com.sun.xml.internal.ws.api.message.Packet): com.sun.xml.internal.ws.api.message.Packet
                                public createServerResponse(arg0: com.sun.xml.internal.ws.api.message.Message, arg1: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort, arg2: com.sun.xml.internal.ws.api.model.SEIModel, arg3: com.sun.xml.internal.ws.api.WSBinding): com.sun.xml.internal.ws.api.message.Packet
                                public copyPropertiesTo(arg0: com.sun.xml.internal.ws.api.message.Packet): void
                                public relateServerResponse(arg0: com.sun.xml.internal.ws.api.message.Packet, arg1: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort, arg2: com.sun.xml.internal.ws.api.model.SEIModel, arg3: com.sun.xml.internal.ws.api.WSBinding): com.sun.xml.internal.ws.api.message.Packet
                                public createServerResponse(arg0: com.sun.xml.internal.ws.api.message.Message, arg1: com.sun.xml.internal.ws.api.addressing.AddressingVersion, arg2: com.sun.xml.internal.ws.api.SOAPVersion, arg3: java.lang.String | string): com.sun.xml.internal.ws.api.message.Packet
                                public setResponseMessage(arg0: com.sun.xml.internal.ws.api.message.Packet, arg1: com.sun.xml.internal.ws.api.message.Message, arg2: com.sun.xml.internal.ws.api.addressing.AddressingVersion, arg3: com.sun.xml.internal.ws.api.SOAPVersion, arg4: java.lang.String | string): void
                                public toShortString(): string
                                public toString(): string
                                protected getPropertyMap(): com.oracle.webservices.internal.api.message.BasePropertySet$PropertyMap
                                public asMapIncludingInvocationProperties(): java.util.Map<java.lang.String, java.lang.Object>
                                public getSOAPMessage(): javax.xml.soap.SOAPMessage
                                public getAsSOAPMessage(): javax.xml.soap.SOAPMessage
                                public getCodec(): com.sun.xml.internal.ws.api.pipe.Codec
                                public writeTo(arg0: java.io.OutputStream): com.oracle.webservices.internal.api.message.ContentType
                                public writeTo(arg0: java.nio.channels.WritableByteChannel | java.nio.channels.WritableByteChannel$$Lambda): com.oracle.webservices.internal.api.message.ContentType
                                public getMtomRequest(): boolean
                                public setMtomRequest(arg0: java.lang.Boolean | boolean): void
                                public getMtomAcceptable(): boolean
                                public checkMtomAcceptable(): void
                                public getFastInfosetAcceptable(arg0: java.lang.String | string): boolean
                                public setMtomFeature(arg0: javax.xml.ws.soap.MTOMFeature): void
                                public getMtomFeature(): javax.xml.ws.soap.MTOMFeature
                                public getContentType(): com.oracle.webservices.internal.api.message.ContentType
                                public getInternalContentType(): com.oracle.webservices.internal.api.message.ContentType
                                public setContentType(arg0: com.oracle.webservices.internal.api.message.ContentType): void
                                public getState(): com.sun.xml.internal.ws.api.message.Packet$State
                                public setState(arg0: com.sun.xml.internal.ws.api.message.Packet$State): void
                                public shouldUseMtom(): boolean
                                public addSatellite(arg0: com.sun.xml.internal.ws.api.PropertySet): void
                                public addSatellite(arg0: java.lang.Class, arg1: com.sun.xml.internal.ws.api.PropertySet): void
                                public copySatelliteInto(arg0: com.sun.xml.internal.ws.api.DistributedPropertySet): void
                                public removeSatellite(arg0: com.sun.xml.internal.ws.api.PropertySet): void
                                public setFastInfosetDisabled(arg0: boolean): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}