declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace db {
                        class DatabindingImpl implements com.sun.xml.internal.ws.api.databinding.Databinding {
                            public constructor(arg0: com.sun.xml.internal.ws.db.DatabindingProviderImpl, arg1: com.sun.xml.internal.ws.api.databinding.DatabindingConfig)
                            public freeze(arg0: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort): void
                            public getModel(): com.sun.xml.internal.ws.api.model.SEIModel
                            public deserializeRequest(arg0: com.sun.xml.internal.ws.api.message.Packet): com.oracle.webservices.internal.api.databinding.JavaCallInfo
                            public deserializeResponse(arg0: com.sun.xml.internal.ws.api.message.Packet, arg1: com.oracle.webservices.internal.api.databinding.JavaCallInfo): com.oracle.webservices.internal.api.databinding.JavaCallInfo
                            public getFeatures(): javax.xml.ws.WebServiceFeature[]
                            public serializeRequest(arg0: com.oracle.webservices.internal.api.databinding.JavaCallInfo): com.sun.xml.internal.ws.api.message.Packet
                            public serializeResponse(arg0: com.oracle.webservices.internal.api.databinding.JavaCallInfo): com.sun.xml.internal.ws.api.message.Packet
                            public getClientBridge(arg0: java.lang.reflect.Method): com.sun.xml.internal.ws.api.databinding.ClientCallBridge
                            public generateWSDL(arg0: com.sun.xml.internal.ws.api.databinding.WSDLGenInfo): void
                            public getEndpointBridge(arg0: com.sun.xml.internal.ws.api.message.Packet): com.sun.xml.internal.ws.api.databinding.EndpointCallBridge
                            public encode(arg0: com.sun.xml.internal.ws.api.message.Packet, arg1: java.io.OutputStream): com.sun.xml.internal.ws.api.pipe.ContentType
                            public decode(arg0: java.io.InputStream, arg1: java.lang.String | string, arg2: com.sun.xml.internal.ws.api.message.Packet): void
                            public createJavaCallInfo(arg0: java.lang.reflect.Method, arg1: java.lang.Object[]): com.oracle.webservices.internal.api.databinding.JavaCallInfo
                            public deserializeResponse(arg0: com.oracle.webservices.internal.api.message.MessageContext, arg1: com.oracle.webservices.internal.api.databinding.JavaCallInfo): com.oracle.webservices.internal.api.databinding.JavaCallInfo
                            public deserializeRequest(arg0: com.oracle.webservices.internal.api.message.MessageContext): com.oracle.webservices.internal.api.databinding.JavaCallInfo
                            public getMessageContextFactory(): com.sun.xml.internal.ws.api.message.MessageContextFactory
                            public serializeResponse(arg0: com.oracle.webservices.internal.api.databinding.JavaCallInfo): com.oracle.webservices.internal.api.message.MessageContext
                            public serializeRequest(arg0: com.oracle.webservices.internal.api.databinding.JavaCallInfo): com.oracle.webservices.internal.api.message.MessageContext
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}