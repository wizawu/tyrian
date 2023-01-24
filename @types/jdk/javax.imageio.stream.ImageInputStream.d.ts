declare namespace javax {
  namespace imageio {
    namespace stream {
      interface ImageInputStream extends java.io.DataInput, java.io.Closeable {
        setByteOrder(arg0: java.nio.ByteOrder): void
        getByteOrder(): java.nio.ByteOrder
        read(): number
        read(arg0: number[] | java.lang.Byte[]): number
        read(
          arg0: number[] | java.lang.Byte[],
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): number
        readBytes(arg0: javax.imageio.stream.IIOByteBuffer, arg1: number | java.lang.Integer): void
        readBoolean(): boolean
        readByte(): number
        readUnsignedByte(): number
        readShort(): number
        readUnsignedShort(): number
        readChar(): string
        readInt(): number
        readUnsignedInt(): number
        readLong(): number
        readFloat(): number
        readDouble(): number
        readLine(): java.lang.String
        readUTF(): java.lang.String
        readFully(
          arg0: number[] | java.lang.Byte[],
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): void
        readFully(arg0: number[] | java.lang.Byte[]): void
        readFully(
          arg0: number[] | java.lang.Short[],
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): void
        readFully(
          arg0: string[] | java.lang.Character[],
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): void
        readFully(
          arg0: number[] | java.lang.Integer[],
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): void
        readFully(
          arg0: number[] | java.lang.Long[],
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): void
        readFully(
          arg0: number[] | java.lang.Float[],
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): void
        readFully(
          arg0: number[] | java.lang.Double[],
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): void
        getStreamPosition(): number
        getBitOffset(): number
        setBitOffset(arg0: number | java.lang.Integer): void
        readBit(): number
        readBits(arg0: number | java.lang.Integer): number
        length(): number
        skipBytes(arg0: number | java.lang.Integer): number
        skipBytes(arg0: number | java.lang.Long): number
        seek(arg0: number | java.lang.Long): void
        mark(): void
        reset(): void
        flushBefore(arg0: number | java.lang.Long): void
        flush(): void
        getFlushedPosition(): number
        isCached(): boolean
        isCachedMemory(): boolean
        isCachedFile(): boolean
        close(): void
      }
    }
  }
}
