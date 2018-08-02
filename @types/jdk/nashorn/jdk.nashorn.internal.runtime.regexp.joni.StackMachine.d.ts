declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace regexp {
                    namespace joni {
                        abstract class StackMachine extends jdk.nashorn.internal.runtime.regexp.joni.Matcher implements jdk.nashorn.internal.runtime.regexp.joni.constants.StackType {
                            protected static INVALID_INDEX: int
                            protected stack: jdk.nashorn.internal.runtime.regexp.joni.StackEntry[]
                            protected stk: int
                            protected repeatStk: int[]
                            protected memStartStk: int
                            protected memEndStk: int
                            protected constructor(arg0: jdk.nashorn.internal.runtime.regexp.joni.Regex, arg1: char[], arg2: int, arg3: int)
                            protected init(): void
                            protected ensure1(): jdk.nashorn.internal.runtime.regexp.joni.StackEntry
                            protected pushType(arg0: int): void
                            protected pushEnsured(arg0: int, arg1: int): void
                            protected pushAlt(arg0: int, arg1: int, arg2: int): void
                            protected pushPos(arg0: int, arg1: int): void
                            protected pushPosNot(arg0: int, arg1: int, arg2: int): void
                            protected pushStopBT(): void
                            protected pushLookBehindNot(arg0: int, arg1: int, arg2: int): void
                            protected pushRepeat(arg0: int, arg1: int): void
                            protected pushRepeatInc(arg0: int): void
                            protected pushMemStart(arg0: int, arg1: int): void
                            protected pushMemEnd(arg0: int, arg1: int): void
                            protected pushMemEndMark(arg0: int): void
                            protected getMemStart(arg0: int): int
                            protected pushNullCheckStart(arg0: int, arg1: int): void
                            protected pushNullCheckEnd(arg0: int): void
                            protected popOne(): void
                            protected pop(): jdk.nashorn.internal.runtime.regexp.joni.StackEntry
                            protected popTilPosNot(): void
                            protected popTilLookBehindNot(): void
                            protected posEnd(): int
                            protected stopBtEnd(): void
                            protected nullCheck(arg0: int, arg1: int): int
                            protected nullCheckMemSt(arg0: int, arg1: int): int
                            protected getRepeat(arg0: int): int
                            protected sreturn(): int
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}