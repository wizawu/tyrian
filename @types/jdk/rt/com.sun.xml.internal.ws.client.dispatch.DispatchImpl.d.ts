declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace client {
                        namespace dispatch {
abstract class DispatchImpl<T> extends com.sun.xml.internal.ws.client.Stub implements javax.xml.ws.Dispatch<T> {
    protected constructor(arg0: javax.xml.namespace.QName, arg1: javax.xml.ws.Service$Mode, arg2: com.sun.xml.internal.ws.client.WSServiceDelegate, arg3: com.sun.xml.internal.ws.api.pipe.Tube, arg4: com.sun.xml.internal.ws.binding.BindingImpl, arg5: com.sun.xml.internal.ws.api.addressing.WSEndpointReference | com.sun.xml.internal.ws.api.addressing.WSEndpointReference$$Lambda)
    protected constructor(arg0: com.sun.xml.internal.ws.api.client.WSPortInfo, arg1: javax.xml.ws.Service$Mode, arg2: com.sun.xml.internal.ws.binding.BindingImpl, arg3: com.sun.xml.internal.ws.api.addressing.WSEndpointReference | com.sun.xml.internal.ws.api.addressing.WSEndpointReference$$Lambda)
    protected constructor(arg0: com.sun.xml.internal.ws.api.client.WSPortInfo, arg1: javax.xml.ws.Service$Mode, arg2: com.sun.xml.internal.ws.binding.BindingImpl, arg3: com.sun.xml.internal.ws.api.addressing.WSEndpointReference | com.sun.xml.internal.ws.api.addressing.WSEndpointReference$$Lambda, arg4: boolean)
    protected constructor(arg0: com.sun.xml.internal.ws.api.client.WSPortInfo, arg1: javax.xml.ws.Service$Mode, arg2: com.sun.xml.internal.ws.binding.BindingImpl, arg3: com.sun.xml.internal.ws.api.pipe.Tube, arg4: com.sun.xml.internal.ws.api.addressing.WSEndpointReference | com.sun.xml.internal.ws.api.addressing.WSEndpointReference$$Lambda, arg5: boolean)
    protected constructor(arg0: com.sun.xml.internal.ws.api.client.WSPortInfo, arg1: javax.xml.ws.Service$Mode, arg2: com.sun.xml.internal.ws.api.pipe.Tube, arg3: com.sun.xml.internal.ws.binding.BindingImpl, arg4: com.sun.xml.internal.ws.api.addressing.WSEndpointReference | com.sun.xml.internal.ws.api.addressing.WSEndpointReference$$Lambda, arg5: boolean)
    public invokeAsync(arg0: T): javax.xml.ws.Response<T>
    public invokeAsync(arg0: T, arg1: javax.xml.ws.AsyncHandler<T> | javax.xml.ws.AsyncHandler$$Lambda<T>): java.util.concurrent.Future<any>
    public doInvoke(arg0: T, arg1: com.sun.xml.internal.ws.client.RequestContext, arg2: com.sun.xml.internal.ws.client.ResponseContextReceiver | com.sun.xml.internal.ws.client.ResponseContextReceiver$$Lambda): T
    public invoke(arg0: T): T
    public invokeOneWay(arg0: T): void
    public static checkValidSOAPMessageDispatch(arg0: com.sun.xml.internal.ws.api.WSBinding, arg1: javax.xml.ws.Service$Mode): void
    public static checkValidDataSourceDispatch(arg0: com.sun.xml.internal.ws.api.WSBinding, arg1: javax.xml.ws.Service$Mode): void
    public getPortName(): javax.xml.namespace.QName
    protected resolveURI(arg0: java.net.URI, arg1: java.lang.String | string, arg2: java.lang.String | string): string
    protected setOutboundAttachments(): com.sun.xml.internal.ws.api.message.AttachmentSet
    public setOutboundHeaders(...arg0: java.lang.Object[]): void
    public static createSourceDispatch(arg0: javax.xml.namespace.QName, arg1: javax.xml.ws.Service$Mode, arg2: com.sun.xml.internal.ws.client.WSServiceDelegate, arg3: com.sun.xml.internal.ws.api.pipe.Tube, arg4: com.sun.xml.internal.ws.binding.BindingImpl, arg5: com.sun.xml.internal.ws.api.addressing.WSEndpointReference | com.sun.xml.internal.ws.api.addressing.WSEndpointReference$$Lambda): javax.xml.ws.Dispatch<javax.xml.transform.Source>
    public static createSourceDispatch(arg0: com.sun.xml.internal.ws.api.client.WSPortInfo, arg1: javax.xml.ws.Service$Mode, arg2: com.sun.xml.internal.ws.binding.BindingImpl, arg3: com.sun.xml.internal.ws.api.addressing.WSEndpointReference | com.sun.xml.internal.ws.api.addressing.WSEndpointReference$$Lambda): javax.xml.ws.Dispatch<javax.xml.transform.Source>
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}