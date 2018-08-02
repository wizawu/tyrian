declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace binding {
class SOAPBindingImpl extends com.sun.xml.internal.ws.binding.BindingImpl implements javax.xml.ws.soap.SOAPBinding {
    public static X_SOAP12HTTP_BINDING: string
    protected soapVersion: com.sun.xml.internal.ws.api.SOAPVersion
    public setPortKnownHeaders(arg0: java.util.Set<javax.xml.namespace.QName>): void
    public understandsHeader(arg0: javax.xml.namespace.QName): boolean
    public setHandlerChain(arg0: java.util.List<javax.xml.ws.handler.Handler>): void
    protected addRequiredRoles(arg0: java.util.Set<java.lang.String>): void
    public getRoles(): java.util.Set<java.lang.String>
    public setRoles(arg0: java.util.Set<java.lang.String>): void
    public isMTOMEnabled(): boolean
    public setMTOMEnabled(arg0: boolean): void
    public getSOAPFactory(): javax.xml.soap.SOAPFactory
    public getMessageFactory(): javax.xml.soap.MessageFactory
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}