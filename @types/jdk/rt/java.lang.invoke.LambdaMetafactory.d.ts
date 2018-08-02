declare namespace java {
    namespace lang {
        namespace invoke {
            class LambdaMetafactory {
                public static FLAG_SERIALIZABLE: int
                public static FLAG_MARKERS: int
                public static FLAG_BRIDGES: int
                public constructor()
                public static metafactory(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.String | string, arg2: java.lang.invoke.MethodType, arg3: java.lang.invoke.MethodType, arg4: java.lang.invoke.MethodHandle, arg5: java.lang.invoke.MethodType): java.lang.invoke.CallSite
                public static altMetafactory(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.String | string, arg2: java.lang.invoke.MethodType, ...arg3: java.lang.Object[]): java.lang.invoke.CallSite
                public static class: java.lang.Class<any>
            }
        }
    }
}