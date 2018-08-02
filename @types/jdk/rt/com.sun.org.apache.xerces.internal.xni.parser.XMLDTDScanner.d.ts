declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace xni {
                            namespace parser {
interface XMLDTDScanner extends com.sun.org.apache.xerces.internal.xni.parser.XMLDTDSource , com.sun.org.apache.xerces.internal.xni.parser.XMLDTDContentModelSource {
    setInputSource(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource): void
    scanDTDInternalSubset(arg0: boolean, arg1: boolean, arg2: boolean): boolean
    scanDTDExternalSubset(arg0: boolean): boolean
    skipDTD(arg0: boolean): boolean
    setLimitAnalyzer(arg0: com.sun.org.apache.xerces.internal.utils.XMLLimitAnalyzer): void
}

                            }
                        }
                    }
                }
            }
        }
    }
}