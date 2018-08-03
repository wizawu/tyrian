declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace client {
                        namespace sei {
                            class StubHandler implements com.sun.xml.internal.ws.api.databinding.ClientCallBridge {
                                protected soapAction: string
                                protected isOneWay: boolean
                                protected javaMethod: com.sun.xml.internal.ws.model.JavaMethodImpl
                                protected checkedExceptions: java.util.Map<javax.xml.namespace.QName, com.sun.xml.internal.ws.model.CheckedExceptionImpl>
                                protected soapVersion: com.sun.xml.internal.ws.api.SOAPVersion
                                protected responseBuilder: com.sun.xml.internal.ws.client.sei.ResponseBuilder
                                protected packetFactory: com.sun.xml.internal.ws.api.message.MessageContextFactory
                                public constructor(arg0: com.sun.xml.internal.ws.model.JavaMethodImpl, arg1: com.sun.xml.internal.ws.api.message.MessageContextFactory)
                                public createRequestPacket(arg0: com.oracle.webservices.internal.api.databinding.JavaCallInfo): com.sun.xml.internal.ws.api.message.Packet
                                public readResponse(arg0: com.sun.xml.internal.ws.api.message.Packet, arg1: com.oracle.webservices.internal.api.databinding.JavaCallInfo): com.oracle.webservices.internal.api.databinding.JavaCallInfo
                                public getOperationName(): javax.xml.namespace.QName
                                public getSoapAction(): string
                                public isOneWay(): boolean
                                protected initArgs(arg0: java.lang.Object[]): void
                                public getMethod(): java.lang.reflect.Method
                                public getOperationModel(): com.sun.xml.internal.ws.api.model.JavaMethod
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}