declare namespace javax {
    namespace xml {
        namespace ws {
            namespace spi {
                abstract class ServiceDelegate {
                    protected constructor()
                    public getPort<T>(arg0: javax.xml.namespace.QName, arg1: java.lang.Class<T>): T
                    public getPort<T>(arg0: javax.xml.namespace.QName, arg1: java.lang.Class<T>, ...arg2: javax.xml.ws.WebServiceFeature[]): T
                    public getPort<T>(arg0: javax.xml.ws.EndpointReference, arg1: java.lang.Class<T>, ...arg2: javax.xml.ws.WebServiceFeature[]): T
                    public getPort<T>(arg0: java.lang.Class<T>): T
                    public getPort<T>(arg0: java.lang.Class<T>, ...arg1: javax.xml.ws.WebServiceFeature[]): T
                    public addPort(arg0: javax.xml.namespace.QName, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                    public createDispatch<T>(arg0: javax.xml.namespace.QName, arg1: java.lang.Class<T>, arg2: javax.xml.ws.Service$Mode): javax.xml.ws.Dispatch<T>
                    public createDispatch<T>(arg0: javax.xml.namespace.QName, arg1: java.lang.Class<T>, arg2: javax.xml.ws.Service$Mode, ...arg3: javax.xml.ws.WebServiceFeature[]): javax.xml.ws.Dispatch<T>
                    public createDispatch<T>(arg0: javax.xml.ws.EndpointReference, arg1: java.lang.Class<T>, arg2: javax.xml.ws.Service$Mode, ...arg3: javax.xml.ws.WebServiceFeature[]): javax.xml.ws.Dispatch<T>
                    public createDispatch(arg0: javax.xml.namespace.QName, arg1: javax.xml.bind.JAXBContext, arg2: javax.xml.ws.Service$Mode): javax.xml.ws.Dispatch<java.lang.Object>
                    public createDispatch(arg0: javax.xml.namespace.QName, arg1: javax.xml.bind.JAXBContext, arg2: javax.xml.ws.Service$Mode, ...arg3: javax.xml.ws.WebServiceFeature[]): javax.xml.ws.Dispatch<java.lang.Object>
                    public createDispatch(arg0: javax.xml.ws.EndpointReference, arg1: javax.xml.bind.JAXBContext, arg2: javax.xml.ws.Service$Mode, ...arg3: javax.xml.ws.WebServiceFeature[]): javax.xml.ws.Dispatch<java.lang.Object>
                    public getServiceName(): javax.xml.namespace.QName
                    public getPorts(): java.util.Iterator<javax.xml.namespace.QName>
                    public getWSDLDocumentLocation(): java.net.URL
                    public getHandlerResolver(): javax.xml.ws.handler.HandlerResolver
                    public setHandlerResolver(arg0: javax.xml.ws.handler.HandlerResolver | javax.xml.ws.handler.HandlerResolver$$Lambda): void
                    public getExecutor(): java.util.concurrent.Executor
                    public setExecutor(arg0: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}