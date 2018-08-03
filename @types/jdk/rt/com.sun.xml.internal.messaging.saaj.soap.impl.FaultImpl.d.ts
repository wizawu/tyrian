declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace messaging {
                    namespace saaj {
                        namespace soap {
                            namespace impl {
                                abstract class FaultImpl extends com.sun.xml.internal.messaging.saaj.soap.impl.ElementImpl implements javax.xml.soap.SOAPFault {
                                    protected faultStringElement: javax.xml.soap.SOAPFaultElement
                                    protected faultActorElement: javax.xml.soap.SOAPFaultElement
                                    protected faultCodeElement: javax.xml.soap.SOAPFaultElement
                                    protected detail: javax.xml.soap.Detail
                                    protected constructor(arg0: com.sun.xml.internal.messaging.saaj.soap.SOAPDocumentImpl, arg1: com.sun.xml.internal.messaging.saaj.soap.name.NameImpl)
                                    protected abstract getDetailName(): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
                                    protected abstract getFaultCodeName(): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
                                    protected abstract getFaultStringName(): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
                                    protected abstract getFaultActorName(): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
                                    protected abstract createDetail(): com.sun.xml.internal.messaging.saaj.soap.impl.DetailImpl
                                    protected abstract createSOAPFaultElement(arg0: java.lang.String | string): com.sun.xml.internal.messaging.saaj.soap.impl.FaultElementImpl
                                    protected abstract createSOAPFaultElement(arg0: javax.xml.namespace.QName): com.sun.xml.internal.messaging.saaj.soap.impl.FaultElementImpl
                                    protected abstract createSOAPFaultElement(arg0: javax.xml.soap.Name): com.sun.xml.internal.messaging.saaj.soap.impl.FaultElementImpl
                                    protected abstract checkIfStandardFaultCode(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    protected abstract finallySetFaultCode(arg0: java.lang.String | string): void
                                    protected abstract isStandardFaultElement(arg0: java.lang.String | string): boolean
                                    protected abstract getDefaultFaultCode(): javax.xml.namespace.QName
                                    protected findFaultCodeElement(): void
                                    protected findFaultActorElement(): void
                                    protected findFaultStringElement(): void
                                    public setFaultCode(arg0: java.lang.String | string): void
                                    public setFaultCode(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                    public setFaultCode(arg0: javax.xml.soap.Name): void
                                    public setFaultCode(arg0: javax.xml.namespace.QName): void
                                    protected static convertCodeToQName(arg0: java.lang.String | string, arg1: javax.xml.soap.SOAPElement): javax.xml.namespace.QName
                                    protected initializeDetail(): void
                                    public getDetail(): javax.xml.soap.Detail
                                    public addDetail(): javax.xml.soap.Detail
                                    public hasDetail(): boolean
                                    public abstract setFaultActor(arg0: java.lang.String | string): void
                                    public getFaultActor(): string
                                    public setElementQName(arg0: javax.xml.namespace.QName): javax.xml.soap.SOAPElement
                                    protected convertToSoapElement(arg0: org.w3c.dom.Element): javax.xml.soap.SOAPElement
                                    protected addFaultCodeElement(): javax.xml.soap.SOAPFaultElement
                                    protected addElement(arg0: javax.xml.soap.Name): javax.xml.soap.SOAPElement
                                    protected addElement(arg0: javax.xml.namespace.QName): javax.xml.soap.SOAPElement
                                    protected addSOAPFaultElement(arg0: java.lang.String | string): com.sun.xml.internal.messaging.saaj.soap.impl.FaultElementImpl
                                    protected static xmlLangToLocale(arg0: java.lang.String | string): java.util.Locale
                                    protected static localeToXmlLang(arg0: java.util.Locale): string
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