declare namespace com {
    namespace sun {
        namespace tracing {
            namespace dtrace {
                interface FunctionAttributes extends java.lang.annotation.Annotation {
                    value(): com.sun.tracing.dtrace.Attributes
                }
                interface FunctionAttributes$$Lambda extends java.lang.annotation.Annotation {
                    (): com.sun.tracing.dtrace.Attributes
                }
            }
        }
    }
}