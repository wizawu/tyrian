declare namespace java {
    namespace lang {
        namespace invoke {
            class FilterArgumentsHandle extends java.lang.invoke.MethodHandle {
                protected constructor(arg0: java.lang.invoke.MethodHandle, arg1: int, arg2: java.lang.invoke.MethodHandle[], arg3: java.lang.invoke.MethodType)
                public static get(arg0: java.lang.invoke.MethodHandle, arg1: int, arg2: java.lang.invoke.MethodHandle[], arg3: java.lang.invoke.MethodType): java.lang.invoke.FilterArgumentsHandle
                protected thunkTable(): java.lang.invoke.ThunkTable
                protected computeThunks(arg0: java.lang.Object): java.lang.invoke.ThunkTuple
                public static class: java.lang.Class<any>
            }
        }
    }
}