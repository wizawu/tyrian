declare namespace com {
    namespace sun {
        namespace nio {
            namespace file {
                class SensitivityWatchEventModifier extends java.lang.Enum<com.sun.nio.file.SensitivityWatchEventModifier> implements java.nio.file.WatchEvent$Modifier {
                    public static readonly HIGH: com.sun.nio.file.SensitivityWatchEventModifier
                    public static readonly MEDIUM: com.sun.nio.file.SensitivityWatchEventModifier
                    public static readonly LOW: com.sun.nio.file.SensitivityWatchEventModifier
                    public static values(): com.sun.nio.file.SensitivityWatchEventModifier[]
                    public static valueOf(arg0: java.lang.String | string): com.sun.nio.file.SensitivityWatchEventModifier
                    public sensitivityValueInSeconds(): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}