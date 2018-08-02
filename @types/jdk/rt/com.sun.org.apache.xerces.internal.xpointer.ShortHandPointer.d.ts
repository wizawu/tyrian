declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace xpointer {
                            class ShortHandPointer implements com.sun.org.apache.xerces.internal.xpointer.XPointerPart {
                                public constructor()
                                public constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable)
                                public parseXPointer(arg0: java.lang.String | string): void
                                public resolveXPointer(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.XMLAttributes, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations, arg3: int): boolean
                                public getDTDDeterminedID(arg0: com.sun.org.apache.xerces.internal.xni.XMLAttributes, arg1: int): string
                                public getSchemaDeterminedID(arg0: com.sun.org.apache.xerces.internal.xni.XMLAttributes, arg1: int): string
                                public getChildrenSchemaDeterminedID(arg0: com.sun.org.apache.xerces.internal.xni.XMLAttributes, arg1: int): string
                                public isFragmentResolved(): boolean
                                public isChildFragmentResolved(): boolean
                                public getSchemeName(): string
                                public getSchemeData(): string
                                public setSchemeName(arg0: java.lang.String | string): void
                                public setSchemeData(arg0: java.lang.String | string): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}