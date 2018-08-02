declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace utils {
abstract class ElementProxy {
    protected static log: java.util.logging.Logger
    protected constructionElement: org.w3c.dom.Element
    protected baseURI: string
    protected doc: org.w3c.dom.Document
    public constructor()
    public constructor(arg0: org.w3c.dom.Document)
    public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string)
    public getBaseNamespace(): string
    public getBaseLocalName(): string
    protected createElementForFamilyLocal(arg0: org.w3c.dom.Document, arg1: java.lang.String | string, arg2: java.lang.String | string): org.w3c.dom.Element
    public static createElementForFamily(arg0: org.w3c.dom.Document, arg1: java.lang.String | string, arg2: java.lang.String | string): org.w3c.dom.Element
    public setElement(arg0: org.w3c.dom.Element, arg1: java.lang.String | string): void
    public getElement(): org.w3c.dom.Element
    public getElementPlusReturns(): org.w3c.dom.NodeList
    public getDocument(): org.w3c.dom.Document
    public getBaseURI(): string
    public addBigIntegerElement(arg0: java.math.BigInteger, arg1: java.lang.String | string): void
    public addBase64Element(arg0: byte[], arg1: java.lang.String | string): void
    public addTextElement(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public addBase64Text(arg0: byte[]): void
    public addText(arg0: java.lang.String | string): void
    public getBigIntegerFromChildElement(arg0: java.lang.String | string, arg1: java.lang.String | string): java.math.BigInteger
    public getBytesFromChildElement(arg0: java.lang.String | string, arg1: java.lang.String | string): byte[]
    public getTextFromChildElement(arg0: java.lang.String | string, arg1: java.lang.String | string): string
    public getBytesFromTextChild(): byte[]
    public getTextFromTextChild(): string
    public length(arg0: java.lang.String | string, arg1: java.lang.String | string): int
    public setXPathNamespaceContext(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public static setDefaultPrefix(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public static registerDefaultPrefixes(): void
    public static getDefaultPrefix(arg0: java.lang.String | string): string
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