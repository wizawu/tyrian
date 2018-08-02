declare namespace java {
    namespace lang {
        namespace invoke {
            class CatchHandle extends java.lang.invoke.PassThroughHandle {
                protected constructor(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.Class<java.lang.Throwable>, arg2: java.lang.invoke.MethodHandle, arg3: java.lang.invoke.MethodHandle)
                public static get(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.Class<java.lang.Throwable>, arg2: java.lang.invoke.MethodHandle, arg3: java.lang.invoke.MethodHandle): java.lang.invoke.CatchHandle
                protected thunkTable(): java.lang.invoke.ThunkTable
                protected computeThunks(arg0: java.lang.Object): java.lang.invoke.ThunkTuple
                public static class: java.lang.Class<any>
            }
        }
    }
}