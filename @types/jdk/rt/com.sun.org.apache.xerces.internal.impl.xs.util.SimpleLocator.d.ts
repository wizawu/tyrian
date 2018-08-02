declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace xs {
                                namespace util {
class SimpleLocator implements com.sun.org.apache.xerces.internal.xni.XMLLocator {
    public constructor()
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: int)
    public setValues(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: int): void
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: int, arg4: int)
    public setValues(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: int, arg4: int): void
    public getLineNumber(): int
    public getColumnNumber(): int
    public getCharacterOffset(): int
    public getPublicId(): string
    public getExpandedSystemId(): string
    public getLiteralSystemId(): string
    public getBaseSystemId(): string
    public setColumnNumber(arg0: int): void
    public setLineNumber(arg0: int): void
    public setCharacterOffset(arg0: int): void
    public setBaseSystemId(arg0: java.lang.String | string): void
    public setExpandedSystemId(arg0: java.lang.String | string): void
    public setLiteralSystemId(arg0: java.lang.String | string): void
    public setPublicId(arg0: java.lang.String | string): void
    public getEncoding(): string
    public getXMLVersion(): string
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
}