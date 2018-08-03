declare namespace java {
    namespace lang {
        namespace invoke {
            abstract class IndirectHandle extends java.lang.invoke.PrimitiveHandle {
                protected abstract vtableOffset(arg0: java.lang.Object): long
                protected vtableIndexArgument(arg0: java.lang.Object): long
                protected jittedMethodAddress(arg0: java.lang.Object): long
                protected static indirectMethodType(arg0: java.lang.reflect.Method): java.lang.invoke.MethodType
                protected static indirectMethodType(arg0: java.lang.invoke.MethodType, arg1: java.lang.Class<any>): java.lang.invoke.MethodType
                public bindTo(arg0: java.lang.Object): java.lang.invoke.MethodHandle
                public static class: java.lang.Class<any>
            }
            interface IndirectHandle$$Lambda extends java.lang.invoke.PrimitiveHandle {
                (arg0: java.lang.Object): long
            }
        }
    }
}