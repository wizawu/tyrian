declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace dtm {
                            namespace ref {
class DTMTreeWalker {
    protected m_dtm: com.sun.org.apache.xml.internal.dtm.DTM
    public setDTM(arg0: com.sun.org.apache.xml.internal.dtm.DTM): void
    public getcontentHandler(): org.xml.sax.ContentHandler
    public setcontentHandler(arg0: org.xml.sax.ContentHandler): void
    public constructor()
    public constructor(arg0: org.xml.sax.ContentHandler, arg1: com.sun.org.apache.xml.internal.dtm.DTM)
    public traverse(arg0: int): void
    public traverse(arg0: int, arg1: int): void
    protected startNode(arg0: int): void
    protected endNode(arg0: int): void
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