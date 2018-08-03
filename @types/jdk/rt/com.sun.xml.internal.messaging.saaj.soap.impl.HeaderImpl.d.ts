declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace messaging {
                    namespace saaj {
                        namespace soap {
                            namespace impl {
                                abstract class HeaderImpl extends com.sun.xml.internal.messaging.saaj.soap.impl.ElementImpl implements javax.xml.soap.SOAPHeader {
                                    protected static readonly MUST_UNDERSTAND_ONLY: boolean
                                    protected constructor(arg0: com.sun.xml.internal.messaging.saaj.soap.SOAPDocumentImpl, arg1: com.sun.xml.internal.messaging.saaj.soap.name.NameImpl)
                                    protected abstract createHeaderElement(arg0: javax.xml.soap.Name): javax.xml.soap.SOAPHeaderElement
                                    protected abstract createHeaderElement(arg0: javax.xml.namespace.QName): javax.xml.soap.SOAPHeaderElement
                                    protected abstract getNotUnderstoodName(): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
                                    protected abstract getUpgradeName(): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
                                    protected abstract getSupportedEnvelopeName(): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
                                    public addHeaderElement(arg0: javax.xml.soap.Name): javax.xml.soap.SOAPHeaderElement
                                    public addHeaderElement(arg0: javax.xml.namespace.QName): javax.xml.soap.SOAPHeaderElement
                                    protected addElement(arg0: javax.xml.soap.Name): javax.xml.soap.SOAPElement
                                    protected addElement(arg0: javax.xml.namespace.QName): javax.xml.soap.SOAPElement
                                    public examineHeaderElements(arg0: java.lang.String | string): java.util.Iterator
                                    public extractHeaderElements(arg0: java.lang.String | string): java.util.Iterator
                                    protected getHeaderElementsForActor(arg0: java.lang.String | string, arg1: boolean, arg2: boolean): java.util.Iterator
                                    protected getHeaderElements(arg0: java.lang.String | string, arg1: boolean, arg2: boolean): java.util.Iterator
                                    public setParentElement(arg0: javax.xml.soap.SOAPElement): void
                                    public addChildElement(arg0: java.lang.String | string): javax.xml.soap.SOAPElement
                                    public examineAllHeaderElements(): java.util.Iterator
                                    public examineMustUnderstandHeaderElements(arg0: java.lang.String | string): java.util.Iterator
                                    public extractAllHeaderElements(): java.util.Iterator
                                    public addUpgradeHeaderElement(arg0: java.util.Iterator): javax.xml.soap.SOAPHeaderElement
                                    public addUpgradeHeaderElement(arg0: java.lang.String | string): javax.xml.soap.SOAPHeaderElement
                                    public addUpgradeHeaderElement(arg0: java.lang.String[]): javax.xml.soap.SOAPHeaderElement
                                    protected convertToSoapElement(arg0: org.w3c.dom.Element): javax.xml.soap.SOAPElement
                                    public setElementQName(arg0: javax.xml.namespace.QName): javax.xml.soap.SOAPElement
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