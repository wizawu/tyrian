declare namespace com {
    namespace sun {
        namespace tracing {
            namespace dtrace {
                interface FunctionName extends java.lang.annotation.Annotation {
                    value(): string
                }
                interface FunctionName$$Lambda extends java.lang.annotation.Annotation {
                    (): string
                }
            }
        }
    }
}