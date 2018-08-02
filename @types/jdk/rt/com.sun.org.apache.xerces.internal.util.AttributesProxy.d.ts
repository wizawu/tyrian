declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace util {
                            class AttributesProxy implements org.xml.sax.AttributeList , org.xml.sax.ext.Attributes2 {
                                public constructor(arg0: com.sun.org.apache.xerces.internal.xni.XMLAttributes)
                                public setAttributes(arg0: com.sun.org.apache.xerces.internal.xni.XMLAttributes): void
                                public getAttributes(): com.sun.org.apache.xerces.internal.xni.XMLAttributes
                                public getLength(): int
                                public getQName(arg0: int): string
                                public getURI(arg0: int): string
                                public getLocalName(arg0: int): string
                                public getType(arg0: int): string
                                public getType(arg0: java.lang.String | string): string
                                public getType(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                                public getValue(arg0: int): string
                                public getValue(arg0: java.lang.String | string): string
                                public getValue(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                                public getIndex(arg0: java.lang.String | string): int
                                public getIndex(arg0: java.lang.String | string, arg1: java.lang.String | string): int
                                public isDeclared(arg0: int): boolean
                                public isDeclared(arg0: java.lang.String | string): boolean
                                public isDeclared(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
                                public isSpecified(arg0: int): boolean
                                public isSpecified(arg0: java.lang.String | string): boolean
                                public isSpecified(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
                                public getName(arg0: int): string
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}