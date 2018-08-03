declare namespace com {
    namespace sun {
        namespace tracing {
            namespace dtrace {
                interface ProviderAttributes extends java.lang.annotation.Annotation {
                    value(): com.sun.tracing.dtrace.Attributes
                }
            }
        }
    }
}