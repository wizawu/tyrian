declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace xni {
                            interface XMLAttributes {
                                addAttribute(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: java.lang.String | string, arg2: java.lang.String | string): int
                                removeAllAttributes(): void
                                removeAttributeAt(arg0: int): void
                                getLength(): int
                                getIndex(arg0: java.lang.String | string): int
                                getIndex(arg0: java.lang.String | string, arg1: java.lang.String | string): int
                                setName(arg0: int, arg1: com.sun.org.apache.xerces.internal.xni.QName): void
                                getName(arg0: int, arg1: com.sun.org.apache.xerces.internal.xni.QName): void
                                getPrefix(arg0: int): string
                                getURI(arg0: int): string
                                getLocalName(arg0: int): string
                                getQName(arg0: int): string
                                getQualifiedName(arg0: int): com.sun.org.apache.xerces.internal.xni.QName
                                setType(arg0: int, arg1: java.lang.String | string): void
                                getType(arg0: int): string
                                getType(arg0: java.lang.String | string): string
                                getType(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                                setValue(arg0: int, arg1: java.lang.String | string): void
                                setValue(arg0: int, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.xni.XMLString): void
                                getValue(arg0: int): string
                                getValue(arg0: java.lang.String | string): string
                                getValue(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                                setNonNormalizedValue(arg0: int, arg1: java.lang.String | string): void
                                getNonNormalizedValue(arg0: int): string
                                setSpecified(arg0: int, arg1: boolean): void
                                isSpecified(arg0: int): boolean
                                getAugmentations(arg0: int): com.sun.org.apache.xerces.internal.xni.Augmentations
                                getAugmentations(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.org.apache.xerces.internal.xni.Augmentations
                                getAugmentations(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.xni.Augmentations
                                setAugmentations(arg0: int, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                            }
                        }
                    }
                }
            }
        }
    }
}