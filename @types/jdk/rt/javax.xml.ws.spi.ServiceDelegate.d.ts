declare namespace javax {
    namespace xml {
        namespace ws {
            namespace spi {
                abstract class ServiceDelegate {
                    protected constructor()
                    public abstract getPort<T>(arg0: javax.xml.namespace.QName, arg1: java.lang.Class<T>): T
                    public abstract getPort<T>(arg0: javax.xml.namespace.QName, arg1: java.lang.Class<T>, ...arg2: javax.xml.ws.WebServiceFeature[]): T
                    public abstract getPort<T>(arg0: javax.xml.ws.EndpointReference | javax.xml.ws.EndpointReference$$Lambda, arg1: java.lang.Class<T>, ...arg2: javax.xml.ws.WebServiceFeature[]): T
                    public abstract getPort<T>(arg0: java.lang.Class<T>): T
                    public abstract getPort<T>(arg0: java.lang.Class<T>, ...arg1: javax.xml.ws.WebServiceFeature[]): T
                    public abstract addPort<T>(arg0: javax.xml.namespace.QName, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                    public abstract createDispatch<T>(arg0: javax.xml.namespace.QName, arg1: java.lang.Class<T>, arg2: javax.xml.ws.Service$Mode): javax.xml.ws.Dispatch<T>
                    public abstract createDispatch<T>(arg0: javax.xml.namespace.QName, arg1: java.lang.Class<T>, arg2: javax.xml.ws.Service$Mode, ...arg3: javax.xml.ws.WebServiceFeature[]): javax.xml.ws.Dispatch<T>
                    public abstract createDispatch<T>(arg0: javax.xml.ws.EndpointReference | javax.xml.ws.EndpointReference$$Lambda, arg1: java.lang.Class<T>, arg2: javax.xml.ws.Service$Mode, ...arg3: javax.xml.ws.WebServiceFeature[]): javax.xml.ws.Dispatch<T>
                    public abstract createDispatch<T>(arg0: javax.xml.namespace.QName, arg1: javax.xml.bind.JAXBContext, arg2: javax.xml.ws.Service$Mode): javax.xml.ws.Dispatch<java.lang.Object>
                    public abstract createDispatch<T>(arg0: javax.xml.namespace.QName, arg1: javax.xml.bind.JAXBContext, arg2: javax.xml.ws.Service$Mode, ...arg3: javax.xml.ws.WebServiceFeature[]): javax.xml.ws.Dispatch<java.lang.Object>
                    public abstract createDispatch<T>(arg0: javax.xml.ws.EndpointReference | javax.xml.ws.EndpointReference$$Lambda, arg1: javax.xml.bind.JAXBContext, arg2: javax.xml.ws.Service$Mode, ...arg3: javax.xml.ws.WebServiceFeature[]): javax.xml.ws.Dispatch<java.lang.Object>
                    public abstract getServiceName<T>(): javax.xml.namespace.QName
                    public abstract getPorts<T>(): java.util.Iterator<javax.xml.namespace.QName>
                    public abstract getWSDLDocumentLocation<T>(): java.net.URL
                    public abstract getHandlerResolver<T>(): javax.xml.ws.handler.HandlerResolver
                    public abstract setHandlerResolver<T>(arg0: javax.xml.ws.handler.HandlerResolver | javax.xml.ws.handler.HandlerResolver$$Lambda): void
                    public abstract getExecutor<T>(): java.util.concurrent.Executor
                    public abstract setExecutor<T>(arg0: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}