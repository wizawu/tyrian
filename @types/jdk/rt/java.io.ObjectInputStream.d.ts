declare namespace java {
    namespace io {
        class ObjectInputStream extends java.io.InputStream implements java.io.ObjectInput , java.io.ObjectStreamConstants {
            public constructor(arg0: java.io.InputStream | java.io.InputStream$$Lambda)
            protected constructor()
            public readObject(): java.lang.Object
            protected readObjectOverride(): java.lang.Object
            public readUnshared(): java.lang.Object
            public defaultReadObject(): void
            public readFields(): java.io.ObjectInputStream$GetField
            public registerValidation(arg0: java.io.ObjectInputValidation | java.io.ObjectInputValidation$$Lambda, arg1: int): void
            protected resolveClass(arg0: java.io.ObjectStreamClass): java.lang.Class<any>
            protected resolveProxyClass(arg0: java.lang.String[]): java.lang.Class<any>
            protected resolveObject(arg0: java.lang.Object): java.lang.Object
            protected enableResolveObject(arg0: boolean): boolean
            protected readStreamHeader(): void
            protected readClassDescriptor(): java.io.ObjectStreamClass
            public read(): int
            public read(arg0: byte[], arg1: int, arg2: int): int
            public available(): int
            public close(): void
            public readBoolean(): boolean
            public readByte(): byte
            public readUnsignedByte(): int
            public readChar(): char
            public readShort(): short
            public readUnsignedShort(): int
            public readInt(): int
            public readLong(): long
            public readFloat(): float
            public readDouble(): double
            public readFully(arg0: byte[]): void
            public readFully(arg0: byte[], arg1: int, arg2: int): void
            public skipBytes(arg0: int): int
            public readLine(): string
            public readUTF(): string
            public static class: java.lang.Class<any>
        }
    }
}