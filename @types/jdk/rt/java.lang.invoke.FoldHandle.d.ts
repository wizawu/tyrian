declare namespace java {
    namespace lang {
        namespace invoke {
            abstract class FoldHandle extends java.lang.invoke.MethodHandle {
                protected readonly next: java.lang.invoke.MethodHandle
                protected readonly combiner: java.lang.invoke.MethodHandle
                protected constructor(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle, arg2: java.lang.invoke.MethodType, arg3: int, ...arg4: int[])
                public static get(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle, arg2: java.lang.invoke.MethodType, arg3: int, ...arg4: int[]): java.lang.invoke.FoldHandle
                protected thunkTable(): java.lang.invoke.ThunkTable
                protected computeThunks(arg0: java.lang.Object): java.lang.invoke.ThunkTuple
                protected static foldPosition(): int
                protected static argIndices(): int
                protected static argumentsForCombiner(arg0: int, arg1: int): int
                public static class: java.lang.Class<any>
            }
        }
    }
}