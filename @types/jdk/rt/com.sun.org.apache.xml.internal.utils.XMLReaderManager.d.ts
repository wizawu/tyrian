declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace utils {
                            class XMLReaderManager {
                                public static getInstance(arg0: boolean): com.sun.org.apache.xml.internal.utils.XMLReaderManager
                                public getXMLReader(): org.xml.sax.XMLReader
                                public releaseXMLReader(arg0: org.xml.sax.XMLReader): void
                                public overrideDefaultParser(): boolean
                                public setOverrideDefaultParser(arg0: boolean): void
                                public setFeature(arg0: java.lang.String | string, arg1: boolean): void
                                public getProperty(arg0: java.lang.String | string): java.lang.Object
                                public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}