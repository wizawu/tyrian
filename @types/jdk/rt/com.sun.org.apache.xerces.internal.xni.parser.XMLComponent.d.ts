declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace xni {
                            namespace parser {
                                interface XMLComponent {
                                    reset(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLComponentManager): void
                                    getRecognizedFeatures(): java.lang.String[]
                                    setFeature(arg0: java.lang.String | string, arg1: boolean): void
                                    getRecognizedProperties(): java.lang.String[]
                                    setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
                                    getFeatureDefault(arg0: java.lang.String | string): boolean
                                    getPropertyDefault(arg0: java.lang.String | string): java.lang.Object
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}