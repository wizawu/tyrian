declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace io {
class IIOPOutputStream extends com.sun.corba.se.impl.io.OutputStreamHook {
    public constructor()
    protected beginOptionalCustomData(): void
    public writeObjectOverride(arg0: java.lang.Object): void
    public simpleWriteObject(arg0: java.lang.Object, arg1: byte): void
    public defaultWriteObjectDelegate(): void
    public enableReplaceObjectDelegate(arg0: boolean): boolean
    protected annotateClass(arg0: java.lang.Class<any>): void
    public close(): void
    protected drain(): void
    public flush(): void
    protected replaceObject(arg0: java.lang.Object): java.lang.Object
    public reset(): void
    public write(arg0: byte[]): void
    public write(arg0: byte[], arg1: int, arg2: int): void
    public write(arg0: int): void
    public writeBoolean(arg0: boolean): void
    public writeByte(arg0: int): void
    public writeBytes(arg0: java.lang.String | string): void
    public writeChar(arg0: int): void
    public writeChars(arg0: java.lang.String | string): void
    public writeDouble(arg0: double): void
    public writeFloat(arg0: float): void
    public writeInt(arg0: int): void
    public writeLong(arg0: long): void
    public writeShort(arg0: int): void
    protected writeStreamHeader(): void
    protected internalWriteUTF(arg0: org.omg.CORBA.portable.OutputStream, arg1: java.lang.String | string): void
    public writeUTF(arg0: java.lang.String | string): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}