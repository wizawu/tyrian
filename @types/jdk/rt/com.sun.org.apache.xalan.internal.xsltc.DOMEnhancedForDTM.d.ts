declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
interface DOMEnhancedForDTM extends com.sun.org.apache.xalan.internal.xsltc.DOM {
    getMapping(arg0: java.lang.String[], arg1: java.lang.String[], arg2: int[]): short[]
    getReverseMapping(arg0: java.lang.String[], arg1: java.lang.String[], arg2: int[]): int[]
    getNamespaceMapping(arg0: java.lang.String[]): short[]
    getReverseNamespaceMapping(arg0: java.lang.String[]): short[]
    getDocumentURI(): string
    setDocumentURI(arg0: java.lang.String | string): void
    getExpandedTypeID2(arg0: int): int
    hasDOMSource(): boolean
    getElementById(arg0: java.lang.String | string): int
}

                        }
                    }
                }
            }
        }
    }
}