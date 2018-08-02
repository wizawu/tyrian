declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace utils {
class QName implements java.io.Serializable {
    protected _localName: string
    protected _namespaceURI: string
    protected _prefix: string
    public static S_XMLNAMESPACEURI: string
    public constructor()
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: boolean)
    public constructor(arg0: java.lang.String | string)
    public constructor(arg0: java.lang.String | string, arg1: boolean)
    public constructor(arg0: java.lang.String | string, arg1: java.util.Stack)
    public constructor(arg0: java.lang.String | string, arg1: java.util.Stack, arg2: boolean)
    public constructor(arg0: java.lang.String | string, arg1: org.w3c.dom.Element, arg2: com.sun.org.apache.xml.internal.utils.PrefixResolver)
    public constructor(arg0: java.lang.String | string, arg1: org.w3c.dom.Element, arg2: com.sun.org.apache.xml.internal.utils.PrefixResolver, arg3: boolean)
    public constructor(arg0: java.lang.String | string, arg1: com.sun.org.apache.xml.internal.utils.PrefixResolver)
    public constructor(arg0: java.lang.String | string, arg1: com.sun.org.apache.xml.internal.utils.PrefixResolver, arg2: boolean)
    public getNamespaceURI(): string
    public getPrefix(): string
    public getLocalName(): string
    public toString(): string
    public toNamespacedString(): string
    public getNamespace(): string
    public getLocalPart(): string
    public hashCode(): int
    public equals(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
    public equals(arg0: java.lang.Object): boolean
    public static getQNameFromString(arg0: java.lang.String | string): com.sun.org.apache.xml.internal.utils.QName
    public static isXMLNSDecl(arg0: java.lang.String | string): boolean
    public static getPrefixFromXMLNSDecl(arg0: java.lang.String | string): string
    public static getLocalPart(arg0: java.lang.String | string): string
    public static getPrefixPart(arg0: java.lang.String | string): string
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}