declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace utils {
class XMLLimitAnalyzer {
    public constructor()
    public addValue(arg0: com.sun.org.apache.xerces.internal.utils.XMLSecurityManager$Limit, arg1: java.lang.String | string, arg2: int): void
    public addValue(arg0: int, arg1: java.lang.String | string, arg2: int): void
    public getValue(arg0: com.sun.org.apache.xerces.internal.utils.XMLSecurityManager$Limit): int
    public getValue(arg0: int): int
    public getTotalValue(arg0: com.sun.org.apache.xerces.internal.utils.XMLSecurityManager$Limit): int
    public getTotalValue(arg0: int): int
    public getValueByIndex(arg0: int): int
    public startEntity(arg0: java.lang.String | string): void
    public isTracking(arg0: java.lang.String | string): boolean
    public endEntity(arg0: com.sun.org.apache.xerces.internal.utils.XMLSecurityManager$Limit, arg1: java.lang.String | string): void
    public reset(arg0: com.sun.org.apache.xerces.internal.utils.XMLSecurityManager$Limit): void
    public debugPrint(arg0: com.sun.org.apache.xerces.internal.utils.XMLSecurityManager): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}