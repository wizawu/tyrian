declare namespace sun {
    namespace reflect {
class ClassFileAssembler implements sun.reflect.ClassFileConstants {
    public constructor()
    public constructor(arg0: sun.reflect.ByteVector)
    public getData(): sun.reflect.ByteVector
    public getLength(): short
    public emitMagicAndVersion(): void
    public emitInt(arg0: int): void
    public emitShort(arg0: short): void
    public emitByte(arg0: byte): void
    public append(arg0: sun.reflect.ClassFileAssembler): void
    public append(arg0: sun.reflect.ByteVector): void
    public cpi(): short
    public emitConstantPoolUTF8(arg0: java.lang.String | string): void
    public emitConstantPoolClass(arg0: short): void
    public emitConstantPoolNameAndType(arg0: short, arg1: short): void
    public emitConstantPoolFieldref(arg0: short, arg1: short): void
    public emitConstantPoolMethodref(arg0: short, arg1: short): void
    public emitConstantPoolInterfaceMethodref(arg0: short, arg1: short): void
    public emitConstantPoolString(arg0: short): void
    public getMaxStack(): short
    public getMaxLocals(): short
    public setMaxLocals(arg0: int): void
    public getStack(): int
    public setStack(arg0: int): void
    public opc_aconst_null(): void
    public opc_sipush(arg0: short): void
    public opc_ldc(arg0: byte): void
    public opc_iload_0(): void
    public opc_iload_1(): void
    public opc_iload_2(): void
    public opc_iload_3(): void
    public opc_lload_0(): void
    public opc_lload_1(): void
    public opc_lload_2(): void
    public opc_lload_3(): void
    public opc_fload_0(): void
    public opc_fload_1(): void
    public opc_fload_2(): void
    public opc_fload_3(): void
    public opc_dload_0(): void
    public opc_dload_1(): void
    public opc_dload_2(): void
    public opc_dload_3(): void
    public opc_aload_0(): void
    public opc_aload_1(): void
    public opc_aload_2(): void
    public opc_aload_3(): void
    public opc_aaload(): void
    public opc_astore_0(): void
    public opc_astore_1(): void
    public opc_astore_2(): void
    public opc_astore_3(): void
    public opc_pop(): void
    public opc_dup(): void
    public opc_dup_x1(): void
    public opc_swap(): void
    public opc_i2l(): void
    public opc_i2f(): void
    public opc_i2d(): void
    public opc_l2f(): void
    public opc_l2d(): void
    public opc_f2d(): void
    public opc_ifeq(arg0: short): void
    public opc_ifeq(arg0: sun.reflect.Label): void
    public opc_if_icmpeq(arg0: short): void
    public opc_if_icmpeq(arg0: sun.reflect.Label): void
    public opc_goto(arg0: short): void
    public opc_goto(arg0: sun.reflect.Label): void
    public opc_ifnull(arg0: short): void
    public opc_ifnull(arg0: sun.reflect.Label): void
    public opc_ifnonnull(arg0: short): void
    public opc_ifnonnull(arg0: sun.reflect.Label): void
    public opc_ireturn(): void
    public opc_lreturn(): void
    public opc_freturn(): void
    public opc_dreturn(): void
    public opc_areturn(): void
    public opc_return(): void
    public opc_getstatic(arg0: short, arg1: int): void
    public opc_putstatic(arg0: short, arg1: int): void
    public opc_getfield(arg0: short, arg1: int): void
    public opc_putfield(arg0: short, arg1: int): void
    public opc_invokevirtual(arg0: short, arg1: int, arg2: int): void
    public opc_invokespecial(arg0: short, arg1: int, arg2: int): void
    public opc_invokestatic(arg0: short, arg1: int, arg2: int): void
    public opc_invokeinterface(arg0: short, arg1: int, arg2: byte, arg3: int): void
    public opc_arraylength(): void
    public opc_new(arg0: short): void
    public opc_athrow(): void
    public opc_checkcast(arg0: short): void
    public opc_instanceof(arg0: short): void
    public static class: java.lang.Class<any>
}

    }
}