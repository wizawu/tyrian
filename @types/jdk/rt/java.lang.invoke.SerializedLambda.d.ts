declare namespace java {
    namespace lang {
        namespace invoke {
class SerializedLambda implements java.io.Serializable {
    public constructor(arg0: java.lang.Class<any>, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: int, arg5: java.lang.String | string, arg6: java.lang.String | string, arg7: java.lang.String | string, arg8: java.lang.String | string, arg9: java.lang.Object[])
    public getCapturingClass(): string
    public getFunctionalInterfaceClass(): string
    public getFunctionalInterfaceMethodName(): string
    public getFunctionalInterfaceMethodSignature(): string
    public getImplClass(): string
    public getImplMethodName(): string
    public getImplMethodSignature(): string
    public getImplMethodKind(): int
    public getInstantiatedMethodType(): string
    public getCapturedArgCount(): int
    public getCapturedArg(arg0: int): java.lang.Object
    public toString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}