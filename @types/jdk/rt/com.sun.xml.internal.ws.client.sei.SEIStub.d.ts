declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace client {
                        namespace sei {
                            class SEIStub extends com.sun.xml.internal.ws.client.Stub implements java.lang.reflect.InvocationHandler {
                                public seiModel: com.sun.xml.internal.ws.model.SOAPSEIModel
                                public soapVersion: com.sun.xml.internal.ws.api.SOAPVersion
                                public constructor(arg0: com.sun.xml.internal.ws.client.WSServiceDelegate, arg1: com.sun.xml.internal.ws.binding.BindingImpl, arg2: com.sun.xml.internal.ws.model.SOAPSEIModel, arg3: com.sun.xml.internal.ws.api.pipe.Tube, arg4: com.sun.xml.internal.ws.api.addressing.WSEndpointReference | com.sun.xml.internal.ws.api.addressing.WSEndpointReference$$Lambda)
                                public constructor(arg0: com.sun.xml.internal.ws.api.client.WSPortInfo, arg1: com.sun.xml.internal.ws.binding.BindingImpl, arg2: com.sun.xml.internal.ws.model.SOAPSEIModel, arg3: com.sun.xml.internal.ws.api.addressing.WSEndpointReference | com.sun.xml.internal.ws.api.addressing.WSEndpointReference$$Lambda)
                                public getOperationDispatcher(): com.sun.xml.internal.ws.wsdl.OperationDispatcher
                                public invoke(arg0: java.lang.Object, arg1: java.lang.reflect.Method, arg2: java.lang.Object[]): java.lang.Object
                                public doProcess(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda, arg1: com.sun.xml.internal.ws.client.RequestContext, arg2: com.sun.xml.internal.ws.client.ResponseContextReceiver | com.sun.xml.internal.ws.client.ResponseContextReceiver$$Lambda): com.sun.xml.internal.ws.api.message.Packet
                                public doProcessAsync(arg0: com.sun.xml.internal.ws.client.AsyncResponseImpl<any> | com.sun.xml.internal.ws.client.AsyncResponseImpl$$Lambda<any>, arg1: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda, arg2: com.sun.xml.internal.ws.client.RequestContext, arg3: com.sun.xml.internal.ws.api.pipe.Fiber$CompletionCallback): void
                                protected getPortName(): javax.xml.namespace.QName
                                public setOutboundHeaders(...arg0: java.lang.Object[]): void
                                public static class: java.lang.Class<any>
                            }
                            class SEIStub$$Lambda extends com.sun.xml.internal.ws.client.Stub implements java.lang.reflect.InvocationHandler {
                                public seiModel: com.sun.xml.internal.ws.model.SOAPSEIModel
                            }
                        }
                    }
                }
            }
        }
    }
}