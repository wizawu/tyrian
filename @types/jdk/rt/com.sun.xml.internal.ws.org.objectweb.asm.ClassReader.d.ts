declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace org {
                        namespace objectweb {
                            namespace asm {
                                class ClassReader {
                                    public static SKIP_CODE: int
                                    public static SKIP_DEBUG: int
                                    public static SKIP_FRAMES: int
                                    public static EXPAND_FRAMES: int
                                    public b: byte[]
                                    public header: int
                                    public constructor(arg0: byte[])
                                    public constructor(arg0: byte[], arg1: int, arg2: int)
                                    public getAccess(): int
                                    public getClassName(): string
                                    public getSuperName(): string
                                    public getInterfaces(): java.lang.String[]
                                    public constructor(arg0: java.io.InputStream)
                                    public constructor(arg0: java.lang.String | string)
                                    public accept(arg0: com.sun.xml.internal.ws.org.objectweb.asm.ClassVisitor, arg1: int): void
                                    public accept(arg0: com.sun.xml.internal.ws.org.objectweb.asm.ClassVisitor, arg1: com.sun.xml.internal.ws.org.objectweb.asm.Attribute[], arg2: int): void
                                    protected readLabel(arg0: int, arg1: com.sun.xml.internal.ws.org.objectweb.asm.Label[]): com.sun.xml.internal.ws.org.objectweb.asm.Label
                                    public getItem(arg0: int): int
                                    public readByte(arg0: int): int
                                    public readUnsignedShort(arg0: int): int
                                    public readShort(arg0: int): short
                                    public readInt(arg0: int): int
                                    public readLong(arg0: int): long
                                    public readUTF8(arg0: int, arg1: char[]): string
                                    public readClass(arg0: int, arg1: char[]): string
                                    public readConst(arg0: int, arg1: char[]): java.lang.Object
                                    public static class: java.lang.Class<any>
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}