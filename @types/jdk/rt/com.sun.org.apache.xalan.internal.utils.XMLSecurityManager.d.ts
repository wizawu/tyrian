declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace utils {
class XMLSecurityManager {
    public constructor()
    public constructor(arg0: boolean)
    public setSecureProcessing(arg0: boolean): void
    public setLimit(arg0: java.lang.String | string, arg1: com.sun.org.apache.xalan.internal.utils.XMLSecurityManager$State, arg2: java.lang.Object): boolean
    public setLimit(arg0: com.sun.org.apache.xalan.internal.utils.XMLSecurityManager$Limit, arg1: com.sun.org.apache.xalan.internal.utils.XMLSecurityManager$State, arg2: int): void
    public setLimit(arg0: int, arg1: com.sun.org.apache.xalan.internal.utils.XMLSecurityManager$State, arg2: java.lang.Object): void
    public setLimit(arg0: int, arg1: com.sun.org.apache.xalan.internal.utils.XMLSecurityManager$State, arg2: int): void
    public getLimitAsString(arg0: java.lang.String | string): string
    public getLimitValueAsString(arg0: com.sun.org.apache.xalan.internal.utils.XMLSecurityManager$Limit): string
    public getLimit(arg0: com.sun.org.apache.xalan.internal.utils.XMLSecurityManager$Limit): int
    public getLimitByIndex(arg0: int): int
    public getLimitValueByIndex(arg0: int): string
    public getState(arg0: com.sun.org.apache.xalan.internal.utils.XMLSecurityManager$Limit): com.sun.org.apache.xalan.internal.utils.XMLSecurityManager$State
    public getStateLiteral(arg0: com.sun.org.apache.xalan.internal.utils.XMLSecurityManager$Limit): string
    public getIndex(arg0: java.lang.String | string): int
    public isSet(arg0: int): boolean
    public printEntityCountInfo(): boolean
    public static printWarning(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: org.xml.sax.SAXException): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}