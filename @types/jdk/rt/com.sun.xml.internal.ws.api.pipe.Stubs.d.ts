declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace pipe {
abstract class Stubs {
    public static createSAAJDispatch(arg0: javax.xml.namespace.QName, arg1: com.sun.xml.internal.ws.api.WSService, arg2: com.sun.xml.internal.ws.api.WSBinding, arg3: javax.xml.ws.Service$Mode, arg4: com.sun.xml.internal.ws.api.pipe.Tube, arg5: com.sun.xml.internal.ws.api.addressing.WSEndpointReference | com.sun.xml.internal.ws.api.addressing.WSEndpointReference$$Lambda): javax.xml.ws.Dispatch<javax.xml.soap.SOAPMessage>
    public static createSAAJDispatch(arg0: com.sun.xml.internal.ws.api.client.WSPortInfo, arg1: com.sun.xml.internal.ws.api.WSBinding, arg2: javax.xml.ws.Service$Mode, arg3: com.sun.xml.internal.ws.api.addressing.WSEndpointReference | com.sun.xml.internal.ws.api.addressing.WSEndpointReference$$Lambda): javax.xml.ws.Dispatch<javax.xml.soap.SOAPMessage>
    public static createDataSourceDispatch(arg0: javax.xml.namespace.QName, arg1: com.sun.xml.internal.ws.api.WSService, arg2: com.sun.xml.internal.ws.api.WSBinding, arg3: javax.xml.ws.Service$Mode, arg4: com.sun.xml.internal.ws.api.pipe.Tube, arg5: com.sun.xml.internal.ws.api.addressing.WSEndpointReference | com.sun.xml.internal.ws.api.addressing.WSEndpointReference$$Lambda): javax.xml.ws.Dispatch<javax.activation.DataSource>
    public static createDataSourceDispatch(arg0: com.sun.xml.internal.ws.api.client.WSPortInfo, arg1: com.sun.xml.internal.ws.api.WSBinding, arg2: javax.xml.ws.Service$Mode, arg3: com.sun.xml.internal.ws.api.addressing.WSEndpointReference | com.sun.xml.internal.ws.api.addressing.WSEndpointReference$$Lambda): javax.xml.ws.Dispatch<javax.activation.DataSource>
    public static createSourceDispatch(arg0: javax.xml.namespace.QName, arg1: com.sun.xml.internal.ws.api.WSService, arg2: com.sun.xml.internal.ws.api.WSBinding, arg3: javax.xml.ws.Service$Mode, arg4: com.sun.xml.internal.ws.api.pipe.Tube, arg5: com.sun.xml.internal.ws.api.addressing.WSEndpointReference | com.sun.xml.internal.ws.api.addressing.WSEndpointReference$$Lambda): javax.xml.ws.Dispatch<javax.xml.transform.Source>
    public static createSourceDispatch(arg0: com.sun.xml.internal.ws.api.client.WSPortInfo, arg1: com.sun.xml.internal.ws.api.WSBinding, arg2: javax.xml.ws.Service$Mode, arg3: com.sun.xml.internal.ws.api.addressing.WSEndpointReference | com.sun.xml.internal.ws.api.addressing.WSEndpointReference$$Lambda): javax.xml.ws.Dispatch<javax.xml.transform.Source>
    public static createDispatch<T>(arg0: javax.xml.namespace.QName, arg1: com.sun.xml.internal.ws.api.WSService, arg2: com.sun.xml.internal.ws.api.WSBinding, arg3: java.lang.Class<T>, arg4: javax.xml.ws.Service$Mode, arg5: com.sun.xml.internal.ws.api.pipe.Tube, arg6: com.sun.xml.internal.ws.api.addressing.WSEndpointReference | com.sun.xml.internal.ws.api.addressing.WSEndpointReference$$Lambda): javax.xml.ws.Dispatch<T>
    public static createDispatch<T>(arg0: com.sun.xml.internal.ws.api.client.WSPortInfo, arg1: com.sun.xml.internal.ws.api.WSService, arg2: com.sun.xml.internal.ws.api.WSBinding, arg3: java.lang.Class<T>, arg4: javax.xml.ws.Service$Mode, arg5: com.sun.xml.internal.ws.api.addressing.WSEndpointReference | com.sun.xml.internal.ws.api.addressing.WSEndpointReference$$Lambda): javax.xml.ws.Dispatch<T>
    public static createJAXBDispatch(arg0: javax.xml.namespace.QName, arg1: com.sun.xml.internal.ws.api.WSService, arg2: com.sun.xml.internal.ws.api.WSBinding, arg3: javax.xml.bind.JAXBContext, arg4: javax.xml.ws.Service$Mode, arg5: com.sun.xml.internal.ws.api.pipe.Tube, arg6: com.sun.xml.internal.ws.api.addressing.WSEndpointReference | com.sun.xml.internal.ws.api.addressing.WSEndpointReference$$Lambda): javax.xml.ws.Dispatch<java.lang.Object>
    public static createJAXBDispatch(arg0: com.sun.xml.internal.ws.api.client.WSPortInfo, arg1: com.sun.xml.internal.ws.api.WSBinding, arg2: javax.xml.bind.JAXBContext, arg3: javax.xml.ws.Service$Mode, arg4: com.sun.xml.internal.ws.api.addressing.WSEndpointReference | com.sun.xml.internal.ws.api.addressing.WSEndpointReference$$Lambda): javax.xml.ws.Dispatch<java.lang.Object>
    public static createMessageDispatch(arg0: javax.xml.namespace.QName, arg1: com.sun.xml.internal.ws.api.WSService, arg2: com.sun.xml.internal.ws.api.WSBinding, arg3: com.sun.xml.internal.ws.api.pipe.Tube, arg4: com.sun.xml.internal.ws.api.addressing.WSEndpointReference | com.sun.xml.internal.ws.api.addressing.WSEndpointReference$$Lambda): javax.xml.ws.Dispatch<com.sun.xml.internal.ws.api.message.Message>
    public static createMessageDispatch(arg0: com.sun.xml.internal.ws.api.client.WSPortInfo, arg1: com.sun.xml.internal.ws.api.WSBinding, arg2: com.sun.xml.internal.ws.api.addressing.WSEndpointReference | com.sun.xml.internal.ws.api.addressing.WSEndpointReference$$Lambda): javax.xml.ws.Dispatch<com.sun.xml.internal.ws.api.message.Message>
    public static createPacketDispatch(arg0: javax.xml.namespace.QName, arg1: com.sun.xml.internal.ws.api.WSService, arg2: com.sun.xml.internal.ws.api.WSBinding, arg3: com.sun.xml.internal.ws.api.pipe.Tube, arg4: com.sun.xml.internal.ws.api.addressing.WSEndpointReference | com.sun.xml.internal.ws.api.addressing.WSEndpointReference$$Lambda): javax.xml.ws.Dispatch<com.sun.xml.internal.ws.api.message.Packet>
    public static createPacketDispatch(arg0: com.sun.xml.internal.ws.api.client.WSPortInfo, arg1: com.sun.xml.internal.ws.api.WSBinding, arg2: com.sun.xml.internal.ws.api.addressing.WSEndpointReference | com.sun.xml.internal.ws.api.addressing.WSEndpointReference$$Lambda): javax.xml.ws.Dispatch<com.sun.xml.internal.ws.api.message.Packet>
    public createPortProxy<T>(arg0: com.sun.xml.internal.ws.api.WSService, arg1: com.sun.xml.internal.ws.api.WSBinding, arg2: com.sun.xml.internal.ws.api.model.SEIModel, arg3: java.lang.Class<T>, arg4: com.sun.xml.internal.ws.api.pipe.Tube, arg5: com.sun.xml.internal.ws.api.addressing.WSEndpointReference | com.sun.xml.internal.ws.api.addressing.WSEndpointReference$$Lambda): T
    public createPortProxy<T>(arg0: com.sun.xml.internal.ws.api.client.WSPortInfo, arg1: com.sun.xml.internal.ws.api.WSBinding, arg2: com.sun.xml.internal.ws.api.model.SEIModel, arg3: java.lang.Class<T>, arg4: com.sun.xml.internal.ws.api.addressing.WSEndpointReference | com.sun.xml.internal.ws.api.addressing.WSEndpointReference$$Lambda): T
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}