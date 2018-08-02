declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace xpath {
                                namespace regex {
class RegexParser {
    protected static S_NORMAL: int
    protected static S_INBRACKETS: int
    protected static S_INXBRACKETS: int
    public constructor()
    public constructor(arg0: java.util.Locale)
    public setLocale(arg0: java.util.Locale): void
    protected isSet(arg0: int): boolean
    protected setContext(arg0: int): void
    protected processBacksolidus_pP(arg0: int): com.sun.org.apache.xerces.internal.impl.xpath.regex.RangeToken
    protected parseCharacterClass(arg0: boolean): com.sun.org.apache.xerces.internal.impl.xpath.regex.RangeToken
    protected parseSetOperations(): com.sun.org.apache.xerces.internal.impl.xpath.regex.RangeToken
    protected static addCaseInsensitiveChar(arg0: com.sun.org.apache.xerces.internal.impl.xpath.regex.RangeToken, arg1: int): void
    protected static addCaseInsensitiveCharRange(arg0: com.sun.org.apache.xerces.internal.impl.xpath.regex.RangeToken, arg1: int, arg2: int): void
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