declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace server {
class WSDLGenResolver implements com.oracle.webservices.internal.api.databinding.WSDLResolver {
    public constructor(arg0: java.util.List<com.sun.xml.internal.ws.server.SDDocumentImpl>, arg1: javax.xml.namespace.QName, arg2: javax.xml.namespace.QName)
    public getWSDL(arg0: java.lang.String | string): javax.xml.transform.Result
    public getAbstractWSDL(arg0: javax.xml.ws.Holder<java.lang.String>): javax.xml.transform.Result
    public getSchemaOutput(arg0: java.lang.String | string, arg1: javax.xml.ws.Holder<java.lang.String>): javax.xml.transform.Result
    public updateDocs(): com.sun.xml.internal.ws.server.SDDocumentImpl
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}