declare namespace com {
    namespace ibm {
        namespace oti {
            namespace shared {
                class SharedClassStatistics {
                    public constructor()
                    public static maxSizeBytes(): long
                    public static freeSpaceBytes(): long
                    public static softmxBytes(): long
                    public static minAotBytes(): long
                    public static maxAotBytes(): long
                    public static minJitDataBytes(): long
                    public static maxJitDataBytes(): long
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}