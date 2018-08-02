declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace xs {
                            interface XSLoader {
                                getConfig(): org.w3c.dom.DOMConfiguration
                                loadURIList(arg0: com.sun.org.apache.xerces.internal.xs.StringList): com.sun.org.apache.xerces.internal.xs.XSModel
                                loadInputList(arg0: com.sun.org.apache.xerces.internal.xs.LSInputList): com.sun.org.apache.xerces.internal.xs.XSModel
                                loadURI(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.xs.XSModel
                                load(arg0: org.w3c.dom.ls.LSInput): com.sun.org.apache.xerces.internal.xs.XSModel
                            }
                        }
                    }
                }
            }
        }
    }
}