declare namespace java {
    namespace lang {
        namespace invoke {
            interface MethodHandleInfo {
                REF_getField: int
                REF_getStatic: int
                REF_putField: int
                REF_putStatic: int
                REF_invokeVirtual: int
                REF_invokeStatic: int
                REF_invokeSpecial: int
                REF_newInvokeSpecial: int
                REF_invokeInterface: int
                getDeclaringClass(): java.lang.Class<any>
                getName(): string
                getMethodType(): java.lang.invoke.MethodType
                getModifiers(): int
                getReferenceKind(): int
                isVarArgs(): boolean
                reflectAs<T extends java.lang.reflect.Member>(arg0: java.lang.Class<T>, arg1: java.lang.invoke.MethodHandles$Lookup): T
                referenceKindToString<T extends java.lang.reflect.Member>(arg0: int): string
                toString<T extends java.lang.reflect.Member>(arg0: int, arg1: java.lang.Class<any>, arg2: java.lang.String | string, arg3: java.lang.invoke.MethodType): string
            }
        }
    }
}