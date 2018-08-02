declare namespace java {
    namespace lang {
        namespace invoke {
            class MethodHandleInfoImpl implements java.lang.invoke.MethodHandleInfo {
                public getDeclaringClass(): java.lang.Class<any>
                public getName(): string
                public getMethodType(): java.lang.invoke.MethodType
                public getModifiers(): int
                public getReferenceKind(): int
                public reflectAs<T extends java.lang.reflect.Member>(arg0: java.lang.Class<T>, arg1: java.lang.invoke.MethodHandles$Lookup): T
                public toString<T extends java.lang.reflect.Member>(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}