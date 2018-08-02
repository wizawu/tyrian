declare namespace java {
    namespace io {
        class RandomAccessFile implements java.io.DataOutput , java.io.DataInput , java.io.Closeable {
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
            public constructor(arg0: java.io.File, arg1: java.lang.String | string)
            public getFD(): java.io.FileDescriptor
            public getChannel(): java.nio.channels.FileChannel
            public read(): int
            public read(arg0: byte[], arg1: int, arg2: int): int
            public read(arg0: byte[]): int
            public readFully(arg0: byte[]): void
            public readFully(arg0: byte[], arg1: int, arg2: int): void
            public skipBytes(arg0: int): int
            public write(arg0: int): void
            public write(arg0: byte[]): void
            public write(arg0: byte[], arg1: int, arg2: int): void
            public getFilePointer(): long
            public seek(arg0: long): void
            public length(): long
            public setLength(arg0: long): void
            public close(): void
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
            public writeBoolean(arg0: boolean): void
            public writeByte(arg0: int): void
            public writeShort(arg0: int): void
            public writeChar(arg0: int): void
            public writeInt(arg0: int): void
            public writeLong(arg0: long): void
            public writeFloat(arg0: float): void
            public writeDouble(arg0: double): void
            public writeBytes(arg0: java.lang.String | string): void
            public writeChars(arg0: java.lang.String | string): void
            public writeUTF(arg0: java.lang.String | string): void
            public static class: java.lang.Class<any>
        }
    }
}