declare namespace com {
    namespace sun {
        namespace tracing {
            namespace dtrace {
                class StabilityLevel extends java.lang.Enum<com.sun.tracing.dtrace.StabilityLevel> {
                    public static INTERNAL: com.sun.tracing.dtrace.StabilityLevel
                    public static PRIVATE: com.sun.tracing.dtrace.StabilityLevel
                    public static OBSOLETE: com.sun.tracing.dtrace.StabilityLevel
                    public static EXTERNAL: com.sun.tracing.dtrace.StabilityLevel
                    public static UNSTABLE: com.sun.tracing.dtrace.StabilityLevel
                    public static EVOLVING: com.sun.tracing.dtrace.StabilityLevel
                    public static STABLE: com.sun.tracing.dtrace.StabilityLevel
                    public static STANDARD: com.sun.tracing.dtrace.StabilityLevel
                    public static values(): com.sun.tracing.dtrace.StabilityLevel[]
                    public static valueOf(arg0: java.lang.String | string): com.sun.tracing.dtrace.StabilityLevel
                    public getEncoding(): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}