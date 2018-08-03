declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace dtm {
                            abstract class DTMManager {
                                protected m_xsf: com.sun.org.apache.xml.internal.utils.XMLStringFactory
                                public m_incremental: boolean
                                public m_source_location: boolean
                                public static readonly IDENT_DTM_NODE_BITS: int
                                public static readonly IDENT_NODE_DEFAULT: int
                                public static readonly IDENT_DTM_DEFAULT: int
                                public static readonly IDENT_MAX_DTMS: int
                                protected constructor()
                                public getXMLStringFactory(): com.sun.org.apache.xml.internal.utils.XMLStringFactory
                                public setXMLStringFactory(arg0: com.sun.org.apache.xml.internal.utils.XMLStringFactory): void
                                public static newInstance(arg0: com.sun.org.apache.xml.internal.utils.XMLStringFactory): com.sun.org.apache.xml.internal.dtm.DTMManager
                                public abstract getDTM(arg0: javax.xml.transform.Source, arg1: boolean, arg2: com.sun.org.apache.xml.internal.dtm.DTMWSFilter | com.sun.org.apache.xml.internal.dtm.DTMWSFilter$$Lambda, arg3: boolean, arg4: boolean): com.sun.org.apache.xml.internal.dtm.DTM
                                public abstract getDTM(arg0: int): com.sun.org.apache.xml.internal.dtm.DTM
                                public abstract getDTMHandleFromNode(arg0: org.w3c.dom.Node): int
                                public abstract createDocumentFragment(): com.sun.org.apache.xml.internal.dtm.DTM
                                public abstract release(arg0: com.sun.org.apache.xml.internal.dtm.DTM, arg1: boolean): boolean
                                public abstract createDTMIterator(arg0: java.lang.Object, arg1: int): com.sun.org.apache.xml.internal.dtm.DTMIterator
                                public abstract createDTMIterator(arg0: java.lang.String | string, arg1: com.sun.org.apache.xml.internal.utils.PrefixResolver): com.sun.org.apache.xml.internal.dtm.DTMIterator
                                public abstract createDTMIterator(arg0: int, arg1: com.sun.org.apache.xml.internal.dtm.DTMFilter, arg2: boolean): com.sun.org.apache.xml.internal.dtm.DTMIterator
                                public abstract createDTMIterator(arg0: int): com.sun.org.apache.xml.internal.dtm.DTMIterator
                                public getIncremental(): boolean
                                public setIncremental(arg0: boolean): void
                                public getSource_location(): boolean
                                public setSource_location(arg0: boolean): void
                                public overrideDefaultParser(): boolean
                                public setOverrideDefaultParser(arg0: boolean): void
                                public abstract getDTMIdentity(arg0: com.sun.org.apache.xml.internal.dtm.DTM): int
                                public getDTMIdentityMask(): int
                                public getNodeIdentityMask(): int
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}