declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace dtm {
                            interface DTMWSFilter {
                                NOTSTRIP: short
                                STRIP: short
                                INHERIT: short
                                getShouldStripSpace(arg0: int, arg1: com.sun.org.apache.xml.internal.dtm.DTM): short
                            }
                            interface DTMWSFilter$$Lambda {
                                (arg0: int, arg1: com.sun.org.apache.xml.internal.dtm.DTM): short
                            }
                        }
                    }
                }
            }
        }
    }
}