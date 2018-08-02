declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace dtm {
                            namespace ref {
class DTMManagerDefault extends com.sun.org.apache.xml.internal.dtm.DTMManager {
    protected m_dtms: com.sun.org.apache.xml.internal.dtm.DTM[]
    protected m_readerManager: com.sun.org.apache.xml.internal.utils.XMLReaderManager
    protected m_defaultHandler: org.xml.sax.helpers.DefaultHandler
    public addDTM(arg0: com.sun.org.apache.xml.internal.dtm.DTM, arg1: int): void
    public addDTM(arg0: com.sun.org.apache.xml.internal.dtm.DTM, arg1: int, arg2: int): void
    public getFirstFreeDTMID(): int
    public constructor()
    public getDTM(arg0: javax.xml.transform.Source, arg1: boolean, arg2: com.sun.org.apache.xml.internal.dtm.DTMWSFilter, arg3: boolean, arg4: boolean): com.sun.org.apache.xml.internal.dtm.DTM
    public getDTMHandleFromNode(arg0: org.w3c.dom.Node): int
    public getXMLReader(arg0: javax.xml.transform.Source): org.xml.sax.XMLReader
    public releaseXMLReader(arg0: org.xml.sax.XMLReader): void
    public getDTM(arg0: int): com.sun.org.apache.xml.internal.dtm.DTM
    public getDTMIdentity(arg0: com.sun.org.apache.xml.internal.dtm.DTM): int
    public release(arg0: com.sun.org.apache.xml.internal.dtm.DTM, arg1: boolean): boolean
    public createDocumentFragment(): com.sun.org.apache.xml.internal.dtm.DTM
    public createDTMIterator(arg0: int, arg1: com.sun.org.apache.xml.internal.dtm.DTMFilter, arg2: boolean): com.sun.org.apache.xml.internal.dtm.DTMIterator
    public createDTMIterator(arg0: java.lang.String | string, arg1: com.sun.org.apache.xml.internal.utils.PrefixResolver): com.sun.org.apache.xml.internal.dtm.DTMIterator
    public createDTMIterator(arg0: int): com.sun.org.apache.xml.internal.dtm.DTMIterator
    public createDTMIterator(arg0: java.lang.Object, arg1: int): com.sun.org.apache.xml.internal.dtm.DTMIterator
    public getExpandedNameTable(arg0: com.sun.org.apache.xml.internal.dtm.DTM): com.sun.org.apache.xml.internal.dtm.ref.ExpandedNameTable
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