declare namespace com {
    namespace sun {
        namespace tracing {
            namespace dtrace {
                class DependencyClass extends java.lang.Enum<com.sun.tracing.dtrace.DependencyClass> {
                    public static readonly UNKNOWN: com.sun.tracing.dtrace.DependencyClass
                    public static readonly CPU: com.sun.tracing.dtrace.DependencyClass
                    public static readonly PLATFORM: com.sun.tracing.dtrace.DependencyClass
                    public static readonly GROUP: com.sun.tracing.dtrace.DependencyClass
                    public static readonly ISA: com.sun.tracing.dtrace.DependencyClass
                    public static readonly COMMON: com.sun.tracing.dtrace.DependencyClass
                    public static values(): com.sun.tracing.dtrace.DependencyClass[]
                    public static valueOf(arg0: java.lang.String | string): com.sun.tracing.dtrace.DependencyClass
                    public toDisplayString(): string
                    public getEncoding(): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}