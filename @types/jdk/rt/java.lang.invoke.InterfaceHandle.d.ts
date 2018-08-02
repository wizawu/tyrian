declare namespace java {
    namespace lang {
        namespace invoke {
class InterfaceHandle extends java.lang.invoke.IndirectHandle {
    public constructor(arg0: java.lang.invoke.InterfaceHandle, arg1: java.lang.invoke.MethodType)
    protected vtableOffset(arg0: java.lang.Object): long
    protected static convertITableIndexToVTableIndex(arg0: long, arg1: int, arg2: long): int
    protected thunkTable(): java.lang.invoke.ThunkTable
    protected static interfaceCall_V(arg0: java.lang.Object, arg1: int): void
    protected static interfaceCall_I(arg0: java.lang.Object, arg1: int): int
    protected static interfaceCall_J(arg0: java.lang.Object, arg1: int): long
    protected static interfaceCall_F(arg0: java.lang.Object, arg1: int): float
    protected static interfaceCall_D(arg0: java.lang.Object, arg1: int): double
    protected static interfaceCall_L(arg0: java.lang.Object, arg1: int): java.lang.Object
    public static class: java.lang.Class<any>
}

        }
    }
}