declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace regexp {
                    namespace joni {
                        abstract class SearchAlgorithm {
                            public static readonly NONE: jdk.nashorn.internal.runtime.regexp.joni.SearchAlgorithm
                            public static readonly SLOW: jdk.nashorn.internal.runtime.regexp.joni.SearchAlgorithm
                            public static readonly BM: jdk.nashorn.internal.runtime.regexp.joni.SearchAlgorithm
                            public static readonly MAP: jdk.nashorn.internal.runtime.regexp.joni.SearchAlgorithm
                            public constructor()
                            public abstract getName(): string
                            public abstract search(arg0: jdk.nashorn.internal.runtime.regexp.joni.Regex, arg1: char[], arg2: int, arg3: int, arg4: int): int
                            public abstract searchBackward(arg0: jdk.nashorn.internal.runtime.regexp.joni.Regex, arg1: char[], arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int): int
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}