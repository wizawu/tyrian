declare namespace javax {
    namespace imageio {
        namespace stream {
            interface ImageInputStream extends java.io.DataInput , java.io.Closeable {
                setByteOrder(arg0: java.nio.ByteOrder): void
                getByteOrder(): java.nio.ByteOrder
                read(): int
                read(arg0: byte[]): int
                read(arg0: byte[], arg1: int, arg2: int): int
                readBytes(arg0: javax.imageio.stream.IIOByteBuffer, arg1: int): void
                readBoolean(): boolean
                readByte(): byte
                readUnsignedByte(): int
                readShort(): short
                readUnsignedShort(): int
                readChar(): char
                readInt(): int
                readUnsignedInt(): long
                readLong(): long
                readFloat(): float
                readDouble(): double
                readLine(): string
                readUTF(): string
                readFully(arg0: byte[], arg1: int, arg2: int): void
                readFully(arg0: byte[]): void
                readFully(arg0: short[], arg1: int, arg2: int): void
                readFully(arg0: char[], arg1: int, arg2: int): void
                readFully(arg0: int[], arg1: int, arg2: int): void
                readFully(arg0: long[], arg1: int, arg2: int): void
                readFully(arg0: float[], arg1: int, arg2: int): void
                readFully(arg0: double[], arg1: int, arg2: int): void
                getStreamPosition(): long
                getBitOffset(): int
                setBitOffset(arg0: int): void
                readBit(): int
                readBits(arg0: int): long
                length(): long
                skipBytes(arg0: int): int
                skipBytes(arg0: long): long
                seek(arg0: long): void
                mark(): void
                reset(): void
                flushBefore(arg0: long): void
                flush(): void
                getFlushedPosition(): long
                isCached(): boolean
                isCachedMemory(): boolean
                isCachedFile(): boolean
                close(): void
            }
        }
    }
}