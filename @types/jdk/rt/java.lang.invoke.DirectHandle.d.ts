declare namespace java {
    namespace lang {
        namespace invoke {
class DirectHandle extends java.lang.invoke.PrimitiveHandle {
    public constructor(arg0: java.lang.reflect.Method, arg1: byte, arg2: java.lang.Class<any>)
    public constructor(arg0: java.lang.reflect.Method, arg1: byte, arg2: java.lang.Class<any>, arg3: boolean)
    protected thunkTable(): java.lang.invoke.ThunkTable
    protected static isAlreadyCompiled(arg0: long): boolean
    protected static compiledEntryPoint(arg0: long): long
    protected static directCall_V(arg0: int): void
    protected static directCall_I(arg0: int): int
    protected static directCall_J(arg0: int): long
    protected static directCall_F(arg0: int): float
    protected static directCall_D(arg0: int): double
    protected static directCall_L(arg0: int): java.lang.Object
    protected static directCall_V(arg0: java.lang.Object, arg1: int): void
    protected static directCall_I(arg0: java.lang.Object, arg1: int): int
    protected static directCall_J(arg0: java.lang.Object, arg1: int): long
    protected static directCall_F(arg0: java.lang.Object, arg1: int): float
    protected static directCall_D(arg0: java.lang.Object, arg1: int): double
    protected static directCall_L(arg0: java.lang.Object, arg1: int): java.lang.Object
    public static load(): void
    public static class: java.lang.Class<any>
}

        }
    }
}