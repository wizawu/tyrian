declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace messaging {
                    namespace saaj {
                        namespace util {
                            class FastInfosetReflection {
                                public constructor()
                                public static DOMDocumentParser_new(): java.lang.Object
                                public static DOMDocumentParser_parse(arg0: java.lang.Object, arg1: org.w3c.dom.Document, arg2: java.io.InputStream): void
                                public static DOMDocumentSerializer_new(): java.lang.Object
                                public static DOMDocumentSerializer_serialize(arg0: java.lang.Object, arg1: org.w3c.dom.Node): void
                                public static DOMDocumentSerializer_setOutputStream(arg0: java.lang.Object, arg1: java.io.OutputStream): void
                                public static isFastInfosetSource(arg0: javax.xml.transform.Source): boolean
                                public static getFastInfosetSource_class(): java.lang.Class
                                public static FastInfosetSource_new(arg0: java.io.InputStream): javax.xml.transform.Source
                                public static FastInfosetSource_getInputStream(arg0: javax.xml.transform.Source): java.io.InputStream
                                public static FastInfosetSource_setInputStream(arg0: javax.xml.transform.Source, arg1: java.io.InputStream): void
                                public static isFastInfosetResult(arg0: javax.xml.transform.Result): boolean
                                public static FastInfosetResult_new(arg0: java.io.OutputStream): javax.xml.transform.Result
                                public static FastInfosetResult_getOutputStream(arg0: javax.xml.transform.Result): java.io.OutputStream
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}