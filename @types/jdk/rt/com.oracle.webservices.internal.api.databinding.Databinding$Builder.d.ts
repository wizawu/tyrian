declare namespace com {
    namespace oracle {
        namespace webservices {
            namespace internal {
                namespace api {
                    namespace databinding {
interface Databinding$Builder {
    targetNamespace(arg0: java.lang.String | string): com.oracle.webservices.internal.api.databinding.Databinding$Builder
    serviceName(arg0: javax.xml.namespace.QName): com.oracle.webservices.internal.api.databinding.Databinding$Builder
    portName(arg0: javax.xml.namespace.QName): com.oracle.webservices.internal.api.databinding.Databinding$Builder
    wsdlURL(arg0: java.net.URL): com.oracle.webservices.internal.api.databinding.Databinding$Builder
    wsdlSource(arg0: javax.xml.transform.Source): com.oracle.webservices.internal.api.databinding.Databinding$Builder
    entityResolver(arg0: org.xml.sax.EntityResolver | org.xml.sax.EntityResolver$$Lambda): com.oracle.webservices.internal.api.databinding.Databinding$Builder
    classLoader(arg0: java.lang.ClassLoader): com.oracle.webservices.internal.api.databinding.Databinding$Builder
    feature(...arg0: javax.xml.ws.WebServiceFeature[]): com.oracle.webservices.internal.api.databinding.Databinding$Builder
    property(arg0: java.lang.String | string, arg1: java.lang.Object): com.oracle.webservices.internal.api.databinding.Databinding$Builder
    build(): com.oracle.webservices.internal.api.databinding.Databinding
    createWSDLGenerator(): com.oracle.webservices.internal.api.databinding.WSDLGenerator
}

                    }
                }
            }
        }
    }
}