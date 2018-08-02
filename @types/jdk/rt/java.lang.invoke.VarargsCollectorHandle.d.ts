declare namespace java {
    namespace lang {
        namespace invoke {
            class VarargsCollectorHandle extends java.lang.invoke.MethodHandle {
                public invokeWithArguments(...arg0: java.lang.Object[]): java.lang.Object
                public asType(arg0: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                public asVarargsCollector(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
                public asFixedArity(): java.lang.invoke.MethodHandle
                protected thunkTable(): java.lang.invoke.ThunkTable
                public static class: java.lang.Class<any>
            }
        }
    }
}