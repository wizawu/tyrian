declare namespace java {
    namespace io {
        class DataInputStream extends java.io.FilterInputStream implements java.io.DataInput {
            public constructor(arg0: java.io.InputStream)
            public read(arg0: byte[]): int
            public read(arg0: byte[], arg1: int, arg2: int): int
            public readFully(arg0: byte[]): void
            public readFully(arg0: byte[], arg1: int, arg2: int): void
            public skipBytes(arg0: int): int
            public readBoolean(): boolean
            public readByte(): byte
            public readUnsignedByte(): int
            public readShort(): short
            public readUnsignedShort(): int
            public readChar(): char
            public readInt(): int
            public readLong(): long
            public readFloat(): float
            public readDouble(): double
            public readLine(): string
            public readUTF(): string
            public static readUTF(arg0: java.io.DataInput): string
            public static class: java.lang.Class<any>
        }
    }
}