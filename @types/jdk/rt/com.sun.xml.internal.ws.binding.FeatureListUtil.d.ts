declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace binding {
                        class FeatureListUtil {
                            public constructor()
                            public static mergeList(...arg0: com.sun.xml.internal.ws.binding.WebServiceFeatureList[]): com.sun.xml.internal.ws.binding.WebServiceFeatureList
                            public static mergeFeature<F extends javax.xml.ws.WebServiceFeature>(arg0: java.lang.Class<F>, arg1: com.sun.xml.internal.ws.binding.WebServiceFeatureList, arg2: com.sun.xml.internal.ws.binding.WebServiceFeatureList): F
                            public static isFeatureEnabled(arg0: java.lang.Class<javax.xml.ws.WebServiceFeature>, arg1: com.sun.xml.internal.ws.binding.WebServiceFeatureList, arg2: com.sun.xml.internal.ws.binding.WebServiceFeatureList): boolean
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}