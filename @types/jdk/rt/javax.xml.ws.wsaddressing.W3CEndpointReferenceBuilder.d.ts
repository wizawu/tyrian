declare namespace javax {
    namespace xml {
        namespace ws {
            namespace wsaddressing {
class W3CEndpointReferenceBuilder {
    public constructor()
    public address(arg0: java.lang.String | string): javax.xml.ws.wsaddressing.W3CEndpointReferenceBuilder
    public interfaceName(arg0: javax.xml.namespace.QName): javax.xml.ws.wsaddressing.W3CEndpointReferenceBuilder
    public serviceName(arg0: javax.xml.namespace.QName): javax.xml.ws.wsaddressing.W3CEndpointReferenceBuilder
    public endpointName(arg0: javax.xml.namespace.QName): javax.xml.ws.wsaddressing.W3CEndpointReferenceBuilder
    public wsdlDocumentLocation(arg0: java.lang.String | string): javax.xml.ws.wsaddressing.W3CEndpointReferenceBuilder
    public referenceParameter(arg0: org.w3c.dom.Element): javax.xml.ws.wsaddressing.W3CEndpointReferenceBuilder
    public metadata(arg0: org.w3c.dom.Element): javax.xml.ws.wsaddressing.W3CEndpointReferenceBuilder
    public element(arg0: org.w3c.dom.Element): javax.xml.ws.wsaddressing.W3CEndpointReferenceBuilder
    public attribute(arg0: javax.xml.namespace.QName, arg1: java.lang.String | string): javax.xml.ws.wsaddressing.W3CEndpointReferenceBuilder
    public build(): javax.xml.ws.wsaddressing.W3CEndpointReference
    public static class: java.lang.Class<any>
}

            }
        }
    }
}