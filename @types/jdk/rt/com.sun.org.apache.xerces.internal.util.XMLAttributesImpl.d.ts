declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace util {
class XMLAttributesImpl implements com.sun.org.apache.xerces.internal.xni.XMLAttributes , com.sun.xml.internal.stream.XMLBufferListener {
    protected static TABLE_SIZE: int
    protected static MAX_HASH_COLLISIONS: int
    protected static MULTIPLIERS_SIZE: int
    protected static MULTIPLIERS_MASK: int
    protected static SIZE_LIMIT: int
    protected fNamespaces: boolean
    protected fLargeCount: int
    protected fLength: int
    protected fAttributes: com.sun.org.apache.xerces.internal.util.XMLAttributesImpl$Attribute[]
    protected fAttributeTableView: com.sun.org.apache.xerces.internal.util.XMLAttributesImpl$Attribute[]
    protected fAttributeTableViewChainState: int[]
    protected fTableViewBuckets: int
    protected fIsTableViewConsistent: boolean
    protected fHashMultipliers: int[]
    public constructor()
    public constructor(arg0: int)
    public setNamespaces(arg0: boolean): void
    public addAttribute(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: java.lang.String | string, arg2: java.lang.String | string): int
    public addAttribute(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.XMLString): int
    public removeAllAttributes(): void
    public removeAttributeAt(arg0: int): void
    public setName(arg0: int, arg1: com.sun.org.apache.xerces.internal.xni.QName): void
    public getName(arg0: int, arg1: com.sun.org.apache.xerces.internal.xni.QName): void
    public setType(arg0: int, arg1: java.lang.String | string): void
    public setValue(arg0: int, arg1: java.lang.String | string): void
    public setValue(arg0: int, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.xni.XMLString): void
    public setNonNormalizedValue(arg0: int, arg1: java.lang.String | string): void
    public getNonNormalizedValue(arg0: int): string
    public setSpecified(arg0: int, arg1: boolean): void
    public isSpecified(arg0: int): boolean
    public getLength(): int
    public getType(arg0: int): string
    public getType(arg0: java.lang.String | string): string
    public getValue(arg0: int): string
    public getValue(arg0: java.lang.String | string): string
    public getName(arg0: int): string
    public getIndex(arg0: java.lang.String | string): int
    public getIndex(arg0: java.lang.String | string, arg1: java.lang.String | string): int
    public getIndexByLocalName(arg0: java.lang.String | string): int
    public getLocalName(arg0: int): string
    public getQName(arg0: int): string
    public getQualifiedName(arg0: int): com.sun.org.apache.xerces.internal.xni.QName
    public getType(arg0: java.lang.String | string, arg1: java.lang.String | string): string
    public getIndexFast(arg0: java.lang.String | string): int
    public addAttributeNS(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public checkDuplicatesNS(): com.sun.org.apache.xerces.internal.xni.QName
    public getIndexFast(arg0: java.lang.String | string, arg1: java.lang.String | string): int
    protected getTableViewBucket(arg0: java.lang.String | string): int
    protected getTableViewBucket(arg0: java.lang.String | string, arg1: java.lang.String | string): int
    protected cleanTableView(): void
    protected prepareTableView(): void
    protected prepareAndPopulateTableView(): void
    public getPrefix(arg0: int): string
    public getURI(arg0: int): string
    public getValue(arg0: java.lang.String | string, arg1: java.lang.String | string): string
    public getAugmentations(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.org.apache.xerces.internal.xni.Augmentations
    public getAugmentations(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.xni.Augmentations
    public getAugmentations(arg0: int): com.sun.org.apache.xerces.internal.xni.Augmentations
    public setAugmentations(arg0: int, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public setURI(arg0: int, arg1: java.lang.String | string): void
    public setSchemaId(arg0: int, arg1: boolean): void
    public getSchemaId(arg0: int): boolean
    public getSchemaId(arg0: java.lang.String | string): boolean
    public getSchemaId(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
    public refresh(): void
    public refresh(arg0: int): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}