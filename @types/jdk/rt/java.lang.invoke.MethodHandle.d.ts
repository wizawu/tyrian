declare namespace java {
    namespace lang {
        namespace invoke {
            abstract class MethodHandle {
                public invokeExact(...arg0: java.lang.Object[]): java.lang.Object
                public invoke(...arg0: java.lang.Object[]): java.lang.Object
                public type(): java.lang.invoke.MethodType
                public asSpreader(arg0: java.lang.Class<any>, arg1: int): java.lang.invoke.MethodHandle
                public asCollector(arg0: java.lang.Class<any>, arg1: int): java.lang.invoke.MethodHandle
                public asType(arg0: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                public invokeWithArguments(...arg0: java.lang.Object[]): java.lang.Object
                public invokeWithArguments(arg0: java.util.List<any>): java.lang.Object
                public asVarargsCollector(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
                public isVarargsCollector(): boolean
                public asFixedArity(): java.lang.invoke.MethodHandle
                public bindTo(arg0: java.lang.Object): java.lang.invoke.MethodHandle
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}