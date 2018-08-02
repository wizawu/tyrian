declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace xpath {
                                namespace regex {
class Token implements java.io.Serializable {
    protected constructor(arg0: int)
    protected addRange(arg0: int, arg1: int): void
    protected sortRanges(): void
    protected compactRanges(): void
    protected mergeRanges(arg0: com.sun.org.apache.xerces.internal.impl.xpath.regex.Token): void
    protected subtractRanges(arg0: com.sun.org.apache.xerces.internal.impl.xpath.regex.Token): void
    protected intersectRanges(arg0: com.sun.org.apache.xerces.internal.impl.xpath.regex.Token): void
    public toString(): string
    public toString(arg0: int): string
    protected static getRange(arg0: java.lang.String | string, arg1: boolean): com.sun.org.apache.xerces.internal.impl.xpath.regex.RangeToken
    protected static getRange(arg0: java.lang.String | string, arg1: boolean, arg2: boolean): com.sun.org.apache.xerces.internal.impl.xpath.regex.RangeToken
    protected static registerNonXS(arg0: java.lang.String | string): void
    protected static isRegisterNonXS(arg0: java.lang.String | string): boolean
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