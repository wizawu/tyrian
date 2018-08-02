declare namespace javax {
    namespace xml {
        namespace ws {
class Service {
    protected constructor(arg0: java.net.URL, arg1: javax.xml.namespace.QName)
    protected constructor(arg0: java.net.URL, arg1: javax.xml.namespace.QName, ...arg2: javax.xml.ws.WebServiceFeature[])
    public getPort<T>(arg0: javax.xml.namespace.QName, arg1: java.lang.Class<T>): T
    public getPort<T>(arg0: javax.xml.namespace.QName, arg1: java.lang.Class<T>, ...arg2: javax.xml.ws.WebServiceFeature[]): T
    public getPort<T>(arg0: java.lang.Class<T>): T
    public getPort<T>(arg0: java.lang.Class<T>, ...arg1: javax.xml.ws.WebServiceFeature[]): T
    public getPort<T>(arg0: javax.xml.ws.EndpointReference, arg1: java.lang.Class<T>, ...arg2: javax.xml.ws.WebServiceFeature[]): T
    public addPort<T>(arg0: javax.xml.namespace.QName, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public createDispatch<T>(arg0: javax.xml.namespace.QName, arg1: java.lang.Class<T>, arg2: javax.xml.ws.Service$Mode): javax.xml.ws.Dispatch<T>
    public createDispatch<T>(arg0: javax.xml.namespace.QName, arg1: java.lang.Class<T>, arg2: javax.xml.ws.Service$Mode, ...arg3: javax.xml.ws.WebServiceFeature[]): javax.xml.ws.Dispatch<T>
    public createDispatch<T>(arg0: javax.xml.ws.EndpointReference, arg1: java.lang.Class<T>, arg2: javax.xml.ws.Service$Mode, ...arg3: javax.xml.ws.WebServiceFeature[]): javax.xml.ws.Dispatch<T>
    public createDispatch<T>(arg0: javax.xml.namespace.QName, arg1: javax.xml.bind.JAXBContext, arg2: javax.xml.ws.Service$Mode): javax.xml.ws.Dispatch<java.lang.Object>
    public createDispatch<T>(arg0: javax.xml.namespace.QName, arg1: javax.xml.bind.JAXBContext, arg2: javax.xml.ws.Service$Mode, ...arg3: javax.xml.ws.WebServiceFeature[]): javax.xml.ws.Dispatch<java.lang.Object>
    public createDispatch<T>(arg0: javax.xml.ws.EndpointReference, arg1: javax.xml.bind.JAXBContext, arg2: javax.xml.ws.Service$Mode, ...arg3: javax.xml.ws.WebServiceFeature[]): javax.xml.ws.Dispatch<java.lang.Object>
    public getServiceName<T>(): javax.xml.namespace.QName
    public getPorts<T>(): java.util.Iterator<javax.xml.namespace.QName>
    public getWSDLDocumentLocation<T>(): java.net.URL
    public getHandlerResolver<T>(): javax.xml.ws.handler.HandlerResolver
    public setHandlerResolver<T>(arg0: javax.xml.ws.handler.HandlerResolver | javax.xml.ws.handler.HandlerResolver$$Lambda): void
    public getExecutor<T>(): java.util.concurrent.Executor
    public setExecutor<T>(arg0: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): void
    public static create<T>(arg0: java.net.URL, arg1: javax.xml.namespace.QName): javax.xml.ws.Service
    public static create<T>(arg0: java.net.URL, arg1: javax.xml.namespace.QName, ...arg2: javax.xml.ws.WebServiceFeature[]): javax.xml.ws.Service
    public static create<T>(arg0: javax.xml.namespace.QName): javax.xml.ws.Service
    public static create<T>(arg0: javax.xml.namespace.QName, ...arg1: javax.xml.ws.WebServiceFeature[]): javax.xml.ws.Service
    public static class: java.lang.Class<any>
}

        }
    }
}