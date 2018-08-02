declare namespace java {
    namespace io {
interface DataInput {
    readFully(arg0: byte[]): void
    readFully(arg0: byte[], arg1: int, arg2: int): void
    skipBytes(arg0: int): int
    readBoolean(): boolean
    readByte(): byte
    readUnsignedByte(): int
    readShort(): short
    readUnsignedShort(): int
    readChar(): char
    readInt(): int
    readLong(): long
    readFloat(): float
    readDouble(): double
    readLine(): string
    readUTF(): string
}

    }
}