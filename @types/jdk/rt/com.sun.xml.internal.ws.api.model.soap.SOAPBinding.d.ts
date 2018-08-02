declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace model {
                            namespace soap {
abstract class SOAPBinding {
    protected use: javax.jws.soap.SOAPBinding$Use
    protected style: javax.jws.soap.SOAPBinding$Style
    protected soapVersion: com.sun.xml.internal.ws.api.SOAPVersion
    protected soapAction: string
    public constructor()
    public getUse(): javax.jws.soap.SOAPBinding$Use
    public getStyle(): javax.jws.soap.SOAPBinding$Style
    public getSOAPVersion(): com.sun.xml.internal.ws.api.SOAPVersion
    public isDocLit(): boolean
    public isRpcLit(): boolean
    public getSOAPAction(): string
    public static class: java.lang.Class<any>
}

                            }
                        }
                    }
                }
            }
        }
    }
}