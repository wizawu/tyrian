declare namespace com {
    namespace sun {
        namespace java {
            namespace util {
                namespace jar {
                    namespace pack {
                        class CodingChooser {
                            public static readonly MIN_EFFORT: int
                            public static readonly MID_EFFORT: int
                            public static readonly MAX_EFFORT: int
                            public static readonly POP_EFFORT: int
                            public static readonly RUN_EFFORT: int
                            public static readonly BYTE_SIZE: int
                            public static readonly ZIP_SIZE: int
                            public computeSize(arg0: com.sun.java.util.jar.pack.CodingMethod, arg1: int[], arg2: int, arg3: int, arg4: int[]): void
                            public computeSize(arg0: com.sun.java.util.jar.pack.CodingMethod, arg1: int[], arg2: int[]): void
                            public computeSize(arg0: com.sun.java.util.jar.pack.CodingMethod, arg1: int[], arg2: int, arg3: int): int[]
                            public computeSize(arg0: com.sun.java.util.jar.pack.CodingMethod, arg1: int[]): int[]
                            public computeByteSize(arg0: com.sun.java.util.jar.pack.CodingMethod, arg1: int[], arg2: int, arg3: int): int
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}