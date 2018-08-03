declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    class ClassReader {
                        public static readonly SKIP_CODE: int
                        public static readonly SKIP_DEBUG: int
                        public static readonly SKIP_FRAMES: int
                        public static readonly EXPAND_FRAMES: int
                        public readonly b: byte[]
                        public readonly header: int
                        public constructor(arg0: byte[])
                        public constructor(arg0: byte[], arg1: int, arg2: int)
                        public getAccess(): int
                        public getClassName(): string
                        public getSuperName(): string
                        public getInterfaces(): java.lang.String[]
                        public constructor(arg0: java.io.InputStream | java.io.InputStream$$Lambda)
                        public constructor(arg0: java.lang.String | string)
                        public accept(arg0: jdk.internal.org.objectweb.asm.ClassVisitor, arg1: int): void
                        public accept(arg0: jdk.internal.org.objectweb.asm.ClassVisitor, arg1: jdk.internal.org.objectweb.asm.Attribute[], arg2: int): void
                        protected readLabel(arg0: int, arg1: jdk.internal.org.objectweb.asm.Label[]): jdk.internal.org.objectweb.asm.Label
                        public getItemCount(): int
                        public getItem(arg0: int): int
                        public getMaxStringLength(): int
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