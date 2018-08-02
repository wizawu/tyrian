declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace parsers {
                            class AbstractSAXParser$AttributesProxy implements org.xml.sax.AttributeList , org.xml.sax.ext.Attributes2 {
                                protected fAttributes: com.sun.org.apache.xerces.internal.xni.XMLAttributes
                                protected constructor()
                                public setAttributes(arg0: com.sun.org.apache.xerces.internal.xni.XMLAttributes): void
                                public getLength(): int
                                public getName(arg0: int): string
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
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}