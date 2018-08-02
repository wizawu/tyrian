declare namespace com {
    namespace sun {
        namespace tracing {
            namespace dtrace {
                interface Attributes extends java.lang.annotation.Annotation {
                    name(): com.sun.tracing.dtrace.StabilityLevel
                    data(): com.sun.tracing.dtrace.StabilityLevel
                    dependency(): com.sun.tracing.dtrace.DependencyClass
                }
            }
        }
    }
}