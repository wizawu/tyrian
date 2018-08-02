declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace messaging {
                    namespace saaj {
                        namespace soap {
                            namespace impl {
abstract class DetailImpl extends com.sun.xml.internal.messaging.saaj.soap.impl.FaultElementImpl implements javax.xml.soap.Detail {
    public constructor(arg0: com.sun.xml.internal.messaging.saaj.soap.SOAPDocumentImpl, arg1: com.sun.xml.internal.messaging.saaj.soap.name.NameImpl)
    protected createDetailEntry(arg0: javax.xml.soap.Name): javax.xml.soap.DetailEntry
    protected createDetailEntry(arg0: javax.xml.namespace.QName): javax.xml.soap.DetailEntry
    public addDetailEntry(arg0: javax.xml.soap.Name): javax.xml.soap.DetailEntry
    public addDetailEntry(arg0: javax.xml.namespace.QName): javax.xml.soap.DetailEntry
    protected addElement(arg0: javax.xml.soap.Name): javax.xml.soap.SOAPElement
    protected addElement(arg0: javax.xml.namespace.QName): javax.xml.soap.SOAPElement
    protected convertToSoapElement(arg0: org.w3c.dom.Element): javax.xml.soap.SOAPElement
    public getDetailEntries(): java.util.Iterator
    protected isStandardFaultElement(): boolean
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