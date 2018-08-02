declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace util {
class FeatureState {
    public status: com.sun.org.apache.xerces.internal.util.Status
    public state: boolean
    public static SET_ENABLED: com.sun.org.apache.xerces.internal.util.FeatureState
    public static SET_DISABLED: com.sun.org.apache.xerces.internal.util.FeatureState
    public static UNKNOWN: com.sun.org.apache.xerces.internal.util.FeatureState
    public static RECOGNIZED: com.sun.org.apache.xerces.internal.util.FeatureState
    public static NOT_SUPPORTED: com.sun.org.apache.xerces.internal.util.FeatureState
    public static NOT_RECOGNIZED: com.sun.org.apache.xerces.internal.util.FeatureState
    public static NOT_ALLOWED: com.sun.org.apache.xerces.internal.util.FeatureState
    public constructor(arg0: com.sun.org.apache.xerces.internal.util.Status, arg1: boolean)
    public static of(arg0: com.sun.org.apache.xerces.internal.util.Status): com.sun.org.apache.xerces.internal.util.FeatureState
    public static is(arg0: boolean): com.sun.org.apache.xerces.internal.util.FeatureState
    public isExceptional(): boolean
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}