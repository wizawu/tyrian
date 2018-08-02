declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace messaging {
                    namespace saaj {
                        namespace soap {
                            namespace name {
class NameImpl implements javax.xml.soap.Name {
    public static XML_NAMESPACE_PREFIX: string
    public static XML_SCHEMA_NAMESPACE_PREFIX: string
    public static SOAP_ENVELOPE_PREFIX: string
    public static XML_NAMESPACE: string
    public static SOAP11_NAMESPACE: string
    public static SOAP12_NAMESPACE: string
    public static XML_SCHEMA_NAMESPACE: string
    protected uri: string
    protected localName: string
    protected prefix: string
    protected static log: java.util.logging.Logger
    public static XMLNS_URI: string
    protected constructor(arg0: java.lang.String | string)
    protected constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string)
    public static convertToName(arg0: javax.xml.namespace.QName): javax.xml.soap.Name
    public static convertToQName(arg0: javax.xml.soap.Name): javax.xml.namespace.QName
    public static createFromUnqualifiedName(arg0: java.lang.String | string): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
    public static createFromTagName(arg0: java.lang.String | string): javax.xml.soap.Name
    public static createFromQualifiedName(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.xml.soap.Name
    protected static createFromTagAndUri(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.xml.soap.Name
    protected static getPrefixSeparatorIndex(arg0: java.lang.String | string): int
    public static getPrefixFromQualifiedName(arg0: java.lang.String | string): string
    public static getLocalNameFromQualifiedName(arg0: java.lang.String | string): string
    public static getPrefixFromTagName(arg0: java.lang.String | string): string
    public static getLocalNameFromTagName(arg0: java.lang.String | string): string
    public static isQualified(arg0: java.lang.String | string): boolean
    public static create(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
    public static createQName(arg0: java.lang.String | string, arg1: java.lang.String | string): string
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public getLocalName(): string
    public getPrefix(): string
    public getURI(): string
    public getQualifiedName(): string
    public static createEnvelope1_1Name(arg0: java.lang.String | string): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
    public static createEnvelope1_2Name(arg0: java.lang.String | string): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
    public static createHeader1_1Name(arg0: java.lang.String | string): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
    public static createHeader1_2Name(arg0: java.lang.String | string): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
    public static createBody1_1Name(arg0: java.lang.String | string): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
    public static createBody1_2Name(arg0: java.lang.String | string): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
    public static createFault1_1Name(arg0: java.lang.String | string): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
    public static createNotUnderstood1_2Name(arg0: java.lang.String | string): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
    public static createUpgrade1_2Name(arg0: java.lang.String | string): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
    public static createSupportedEnvelope1_2Name(arg0: java.lang.String | string): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
    public static createFault1_2Name(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
    public static createCodeSubcode1_2Name(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
    public static createDetail1_1Name(): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
    public static createDetail1_1Name(arg0: java.lang.String | string): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
    public static createFaultElement1_1Name(arg0: java.lang.String | string): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
    public static createFaultElement1_1Name(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
    public static createSOAP11Name(arg0: java.lang.String | string): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
    public static createSOAP12Name(arg0: java.lang.String | string): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
    public static createSOAP12Name(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
    public static createXmlName(arg0: java.lang.String | string): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
    public static copyElementName(arg0: org.w3c.dom.Element): javax.xml.soap.Name
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