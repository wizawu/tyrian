declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace xs {
                                class XSLoaderImpl implements com.sun.org.apache.xerces.internal.xs.XSLoader , org.w3c.dom.DOMConfiguration {
                                    public constructor()
                                    public getConfig(): org.w3c.dom.DOMConfiguration
                                    public loadURIList(arg0: com.sun.org.apache.xerces.internal.xs.StringList): com.sun.org.apache.xerces.internal.xs.XSModel
                                    public loadInputList(arg0: com.sun.org.apache.xerces.internal.xs.LSInputList): com.sun.org.apache.xerces.internal.xs.XSModel
                                    public loadURI(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.xs.XSModel
                                    public load(arg0: org.w3c.dom.ls.LSInput): com.sun.org.apache.xerces.internal.xs.XSModel
                                    public setParameter(arg0: java.lang.String | string, arg1: java.lang.Object): void
                                    public getParameter(arg0: java.lang.String | string): java.lang.Object
                                    public canSetParameter(arg0: java.lang.String | string, arg1: java.lang.Object): boolean
                                    public getParameterNames(): org.w3c.dom.DOMStringList
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