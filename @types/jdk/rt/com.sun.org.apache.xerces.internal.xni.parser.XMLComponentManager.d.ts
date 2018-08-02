declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace xni {
                            namespace parser {
                                interface XMLComponentManager {
                                    getFeature(arg0: java.lang.String | string): boolean
                                    getFeature(arg0: java.lang.String | string, arg1: boolean): boolean
                                    getProperty(arg0: java.lang.String | string): java.lang.Object
                                    getProperty(arg0: java.lang.String | string, arg1: java.lang.Object): java.lang.Object
                                    getFeatureState(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.util.FeatureState
                                    getPropertyState(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.util.PropertyState
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}