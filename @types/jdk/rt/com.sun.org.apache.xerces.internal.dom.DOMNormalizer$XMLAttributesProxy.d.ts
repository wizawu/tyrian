declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace dom {
class DOMNormalizer$XMLAttributesProxy implements com.sun.org.apache.xerces.internal.xni.XMLAttributes {
    protected fAttributes: com.sun.org.apache.xerces.internal.dom.AttributeMap
    protected fDocument: com.sun.org.apache.xerces.internal.dom.CoreDocumentImpl
    protected fElement: com.sun.org.apache.xerces.internal.dom.ElementImpl
    protected fAugmentations: java.util.Vector
    protected constructor(arg0: com.sun.org.apache.xerces.internal.dom.DOMNormalizer)
    public setAttributes(arg0: com.sun.org.apache.xerces.internal.dom.AttributeMap, arg1: com.sun.org.apache.xerces.internal.dom.CoreDocumentImpl, arg2: com.sun.org.apache.xerces.internal.dom.ElementImpl): void
    public addAttribute(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: java.lang.String | string, arg2: java.lang.String | string): int
    public removeAllAttributes(): void
    public removeAttributeAt(arg0: int): void
    public getLength(): int
    public getIndex(arg0: java.lang.String | string): int
    public getIndex(arg0: java.lang.String | string, arg1: java.lang.String | string): int
    public setName(arg0: int, arg1: com.sun.org.apache.xerces.internal.xni.QName): void
    public getName(arg0: int, arg1: com.sun.org.apache.xerces.internal.xni.QName): void
    public getPrefix(arg0: int): string
    public getURI(arg0: int): string
    public getLocalName(arg0: int): string
    public getQName(arg0: int): string
    public getQualifiedName(arg0: int): com.sun.org.apache.xerces.internal.xni.QName
    public setType(arg0: int, arg1: java.lang.String | string): void
    public getType(arg0: int): string
    public getType(arg0: java.lang.String | string): string
    public getType(arg0: java.lang.String | string, arg1: java.lang.String | string): string
    public setValue(arg0: int, arg1: java.lang.String | string): void
    public setValue(arg0: int, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.xni.XMLString): void
    public getValue(arg0: int): string
    public getValue(arg0: java.lang.String | string): string
    public getValue(arg0: java.lang.String | string, arg1: java.lang.String | string): string
    public setNonNormalizedValue(arg0: int, arg1: java.lang.String | string): void
    public getNonNormalizedValue(arg0: int): string
    public setSpecified(arg0: int, arg1: boolean): void
    public isSpecified(arg0: int): boolean
    public getAugmentations(arg0: int): com.sun.org.apache.xerces.internal.xni.Augmentations
    public getAugmentations(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.org.apache.xerces.internal.xni.Augmentations
    public getAugmentations(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.xni.Augmentations
    public setAugmentations(arg0: int, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}