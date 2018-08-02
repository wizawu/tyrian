declare namespace java {
    namespace lang {
        namespace invoke {
            class MethodType implements java.io.Serializable {
                public changeParameterType(arg0: int, arg1: java.lang.Class<any>): java.lang.invoke.MethodType
                public changeReturnType(arg0: java.lang.Class<any>): java.lang.invoke.MethodType
                public dropParameterTypes(arg0: int, arg1: int): java.lang.invoke.MethodType
                public equals(arg0: java.lang.Object): boolean
                public erase(): java.lang.invoke.MethodType
                public static fromMethodDescriptorString(arg0: java.lang.String | string, arg1: java.lang.ClassLoader): java.lang.invoke.MethodType
                public generic(): java.lang.invoke.MethodType
                public hashCode(): int
                public hasPrimitives(): boolean
                public hasWrappers(): boolean
                public insertParameterTypes(arg0: int, ...arg1: java.lang.Class<any>[]): java.lang.invoke.MethodType
                public insertParameterTypes(arg0: int, arg1: java.util.List<java.lang.Class<any>>): java.lang.invoke.MethodType
                public static methodType(arg0: java.lang.Class<any>): java.lang.invoke.MethodType
                public static methodType(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): java.lang.invoke.MethodType
                public static methodType(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>[]): java.lang.invoke.MethodType
                public static methodType(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>, ...arg2: java.lang.Class<any>[]): java.lang.invoke.MethodType
                public static methodType(arg0: java.lang.Class<any>, arg1: java.util.List<java.lang.Class<any>>): java.lang.invoke.MethodType
                public static methodType(arg0: java.lang.Class<any>, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodType
                public static genericMethodType(arg0: int): java.lang.invoke.MethodType
                public static genericMethodType(arg0: int, arg1: boolean): java.lang.invoke.MethodType
                public parameterArray(): java.lang.Class<any>[]
                public parameterCount(): int
                public parameterList(): java.util.List<java.lang.Class<any>>
                public parameterType(arg0: int): java.lang.Class<any>
                public returnType(): java.lang.Class<any>
                public toMethodDescriptorString(): string
                public toString(): string
                public unwrap(): java.lang.invoke.MethodType
                public wrap(): java.lang.invoke.MethodType
                public appendParameterTypes(...arg0: java.lang.Class<any>[]): java.lang.invoke.MethodType
                public appendParameterTypes(arg0: java.util.List<java.lang.Class<any>>): java.lang.invoke.MethodType
                public static class: java.lang.Class<any>
            }
        }
    }
}