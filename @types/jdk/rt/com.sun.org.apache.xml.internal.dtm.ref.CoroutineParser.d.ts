declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace dtm {
                            namespace ref {
interface CoroutineParser {
    getParserCoroutineID(): int
    getCoroutineManager(): com.sun.org.apache.xml.internal.dtm.ref.CoroutineManager
    setContentHandler(arg0: org.xml.sax.ContentHandler): void
    setLexHandler(arg0: org.xml.sax.ext.LexicalHandler): void
    doParse(arg0: org.xml.sax.InputSource, arg1: int): java.lang.Object
    doMore(arg0: boolean, arg1: int): java.lang.Object
    doTerminate(arg0: int): void
    init(arg0: com.sun.org.apache.xml.internal.dtm.ref.CoroutineManager, arg1: int, arg2: org.xml.sax.XMLReader): void
}

                            }
                        }
                    }
                }
            }
        }
    }
}