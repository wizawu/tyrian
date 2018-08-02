declare namespace java {
    namespace io {
        class ObjectInputStream$BlockDataInputStream extends java.io.InputStream implements java.io.DataInput {
            public read(): int
            public read(arg0: byte[], arg1: int, arg2: int): int
            public skip(arg0: long): long
            public available(): int
            public close(): void
            public readFully(arg0: byte[]): void
            public readFully(arg0: byte[], arg1: int, arg2: int): void
            public readFully(arg0: byte[], arg1: int, arg2: int, arg3: boolean): void
            public skipBytes(arg0: int): int
            public readBoolean(): boolean
            public readByte(): byte
            public readUnsignedByte(): int
            public readChar(): char
            public readShort(): short
            public readUnsignedShort(): int
            public readInt(): int
            public readFloat(): float
            public readLong(): long
            public readDouble(): double
            public readUTF(): string
            public readLine(): string
            public static class: java.lang.Class<any>
        }
    }
}