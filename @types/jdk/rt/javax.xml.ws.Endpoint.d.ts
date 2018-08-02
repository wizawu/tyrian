declare namespace javax {
    namespace xml {
        namespace ws {
abstract class Endpoint {
    public static WSDL_SERVICE: string
    public static WSDL_PORT: string
    public constructor()
    public static create(arg0: java.lang.Object): javax.xml.ws.Endpoint
    public static create(arg0: java.lang.Object, ...arg1: javax.xml.ws.WebServiceFeature[]): javax.xml.ws.Endpoint
    public static create(arg0: java.lang.String | string, arg1: java.lang.Object): javax.xml.ws.Endpoint
    public static create(arg0: java.lang.String | string, arg1: java.lang.Object, ...arg2: javax.xml.ws.WebServiceFeature[]): javax.xml.ws.Endpoint
    public getBinding(): javax.xml.ws.Binding
    public getImplementor(): java.lang.Object
    public publish(arg0: java.lang.String | string): void
    public static publish(arg0: java.lang.String | string, arg1: java.lang.Object): javax.xml.ws.Endpoint
    public static publish(arg0: java.lang.String | string, arg1: java.lang.Object, ...arg2: javax.xml.ws.WebServiceFeature[]): javax.xml.ws.Endpoint
    public publish(arg0: java.lang.Object): void
    public publish(arg0: javax.xml.ws.spi.http.HttpContext): void
    public stop(): void
    public isPublished(): boolean
    public getMetadata(): java.util.List<javax.xml.transform.Source>
    public setMetadata(arg0: java.util.List<javax.xml.transform.Source>): void
    public getExecutor(): java.util.concurrent.Executor
    public setExecutor(arg0: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): void
    public getProperties(): java.util.Map<java.lang.String, java.lang.Object>
    public setProperties(arg0: java.util.Map<java.lang.String, java.lang.Object>): void
    public getEndpointReference(...arg0: org.w3c.dom.Element[]): javax.xml.ws.EndpointReference
    public getEndpointReference<T extends javax.xml.ws.EndpointReference>(arg0: java.lang.Class<T>, ...arg1: org.w3c.dom.Element[]): T
    public setEndpointContext(arg0: javax.xml.ws.EndpointContext): void
    public static class: java.lang.Class<any>
}

        }
    }
}