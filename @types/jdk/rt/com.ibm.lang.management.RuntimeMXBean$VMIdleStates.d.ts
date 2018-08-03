declare namespace com {
    namespace ibm {
        namespace lang {
            namespace management {
                class RuntimeMXBean$VMIdleStates extends java.lang.Enum<com.ibm.lang.management.RuntimeMXBean$VMIdleStates> {
                    public static readonly INVALID: com.ibm.lang.management.RuntimeMXBean$VMIdleStates
                    public static readonly ACTIVE: com.ibm.lang.management.RuntimeMXBean$VMIdleStates
                    public static readonly IDLE: com.ibm.lang.management.RuntimeMXBean$VMIdleStates
                    public static values(): com.ibm.lang.management.RuntimeMXBean$VMIdleStates[]
                    public static valueOf(arg0: java.lang.String | string): com.ibm.lang.management.RuntimeMXBean$VMIdleStates
                    public idleStateValue(): int
                    public idleStateName(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}