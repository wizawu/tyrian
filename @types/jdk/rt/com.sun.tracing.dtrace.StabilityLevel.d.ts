declare namespace com {
    namespace sun {
        namespace tracing {
            namespace dtrace {
                class StabilityLevel extends java.lang.Enum<com.sun.tracing.dtrace.StabilityLevel> {
                    public static readonly INTERNAL: com.sun.tracing.dtrace.StabilityLevel
                    public static readonly PRIVATE: com.sun.tracing.dtrace.StabilityLevel
                    public static readonly OBSOLETE: com.sun.tracing.dtrace.StabilityLevel
                    public static readonly EXTERNAL: com.sun.tracing.dtrace.StabilityLevel
                    public static readonly UNSTABLE: com.sun.tracing.dtrace.StabilityLevel
                    public static readonly EVOLVING: com.sun.tracing.dtrace.StabilityLevel
                    public static readonly STABLE: com.sun.tracing.dtrace.StabilityLevel
                    public static readonly STANDARD: com.sun.tracing.dtrace.StabilityLevel
                    public static values(): com.sun.tracing.dtrace.StabilityLevel[]
                    public static valueOf(arg0: java.lang.String | string): com.sun.tracing.dtrace.StabilityLevel
                    public getEncoding(): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}