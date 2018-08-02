declare namespace com {
    namespace oracle {
        namespace xmlns {
            namespace internal {
                namespace webservices {
                    namespace jaxws_databinding {
class XmlWebServiceProvider implements javax.xml.ws.WebServiceProvider {
    protected targetNamespace: string
    protected serviceName: string
    protected portName: string
    protected wsdlLocation: string
    public constructor()
    public getTargetNamespace(): string
    public setTargetNamespace(arg0: java.lang.String | string): void
    public getServiceName(): string
    public setServiceName(arg0: java.lang.String | string): void
    public getPortName(): string
    public setPortName(arg0: java.lang.String | string): void
    public getWsdlLocation(): string
    public setWsdlLocation(arg0: java.lang.String | string): void
    public wsdlLocation(): string
    public serviceName(): string
    public targetNamespace(): string
    public portName(): string
    public annotationType(): java.lang.Class<java.lang.annotation.Annotation>
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}