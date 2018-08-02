declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace messaging {
                    namespace saaj {
                        namespace soap {
                            namespace ver1_2 {
class HeaderElement1_2Impl extends com.sun.xml.internal.messaging.saaj.soap.impl.HeaderElementImpl {
    public constructor(arg0: com.sun.xml.internal.messaging.saaj.soap.SOAPDocumentImpl, arg1: javax.xml.soap.Name)
    public constructor(arg0: com.sun.xml.internal.messaging.saaj.soap.SOAPDocumentImpl, arg1: javax.xml.namespace.QName)
    public setElementQName(arg0: javax.xml.namespace.QName): javax.xml.soap.SOAPElement
    protected getRoleAttributeName(): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
    protected getActorAttributeName(): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
    protected getMustunderstandAttributeName(): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
    protected getMustunderstandLiteralValue(arg0: boolean): string
    protected getMustunderstandAttributeValue(arg0: java.lang.String | string): boolean
    protected getRelayAttributeName(): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
    protected getRelayLiteralValue(arg0: boolean): string
    protected getRelayAttributeValue(arg0: java.lang.String | string): boolean
    protected getActorOrRole(): string
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