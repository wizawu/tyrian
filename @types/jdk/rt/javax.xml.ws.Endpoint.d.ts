declare namespace javax {
    namespace xml {
        namespace ws {
            abstract class Endpoint {
                public static readonly WSDL_SERVICE: string
                public static readonly WSDL_PORT: string
                public constructor()
                public static create(arg0: java.lang.Object): javax.xml.ws.Endpoint
                public static create(arg0: java.lang.Object, ...arg1: javax.xml.ws.WebServiceFeature[]): javax.xml.ws.Endpoint
                public static create(arg0: java.lang.String | string, arg1: java.lang.Object): javax.xml.ws.Endpoint
                public static create(arg0: java.lang.String | string, arg1: java.lang.Object, ...arg2: javax.xml.ws.WebServiceFeature[]): javax.xml.ws.Endpoint
                public abstract getBinding(): javax.xml.ws.Binding
                public abstract getImplementor(): java.lang.Object
                public abstract publish(arg0: java.lang.String | string): void
                public static publish(arg0: java.lang.String | string, arg1: java.lang.Object): javax.xml.ws.Endpoint
                public static publish(arg0: java.lang.String | string, arg1: java.lang.Object, ...arg2: javax.xml.ws.WebServiceFeature[]): javax.xml.ws.Endpoint
                public abstract publish(arg0: java.lang.Object): void
                public publish(arg0: javax.xml.ws.spi.http.HttpContext): void
                public abstract stop(): void
                public abstract isPublished(): boolean
                public abstract getMetadata(): java.util.List<javax.xml.transform.Source>
                public abstract setMetadata(arg0: java.util.List<javax.xml.transform.Source>): void
                public abstract getExecutor(): java.util.concurrent.Executor
                public abstract setExecutor(arg0: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): void
                public abstract getProperties(): java.util.Map<java.lang.String, java.lang.Object>
                public abstract setProperties(arg0: java.util.Map<java.lang.String, java.lang.Object>): void
                public abstract getEndpointReference(...arg0: org.w3c.dom.Element[]): javax.xml.ws.EndpointReference
                public abstract getEndpointReference<T extends javax.xml.ws.EndpointReference>(arg0: java.lang.Class<T>, ...arg1: org.w3c.dom.Element[]): T
                public setEndpointContext<T extends javax.xml.ws.EndpointReference>(arg0: javax.xml.ws.EndpointContext | javax.xml.ws.EndpointContext$$Lambda): void
                public static class: java.lang.Class<any>
            }
        }
    }
}