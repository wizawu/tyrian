declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace server {
class ServiceDefinitionImpl implements com.sun.xml.internal.ws.api.server.ServiceDefinition , com.sun.xml.internal.ws.wsdl.SDDocumentResolver {
    public constructor(arg0: java.util.List<com.sun.xml.internal.ws.server.SDDocumentImpl>, arg1: com.sun.xml.internal.ws.server.SDDocumentImpl)
    public getPrimary(): com.sun.xml.internal.ws.api.server.SDDocument
    public addFilter(arg0: com.sun.xml.internal.ws.api.server.SDDocumentFilter | com.sun.xml.internal.ws.api.server.SDDocumentFilter$$Lambda): void
    public iterator(): java.util.Iterator<com.sun.xml.internal.ws.api.server.SDDocument>
    public resolve(arg0: java.lang.String | string): com.sun.xml.internal.ws.api.server.SDDocument
    public static class: java.lang.Class<any>
}

class ServiceDefinitionImpl$$Lambda implements com.sun.xml.internal.ws.api.server.ServiceDefinition , com.sun.xml.internal.ws.wsdl.SDDocumentResolver {
    public constructor(arg0: java.util.List<com.sun.xml.internal.ws.server.SDDocumentImpl>, arg1: com.sun.xml.internal.ws.server.SDDocumentImpl)
}

                    }
                }
            }
        }
    }
}