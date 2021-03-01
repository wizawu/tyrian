declare namespace javax {
  namespace imageio {
    namespace stream {

      abstract class ImageInputStreamImpl implements javax.imageio.stream.ImageInputStream {

        byteBuf: byte[]
        protected byteOrder: java.nio.ByteOrder
        protected streamPos: long
        protected bitOffset: int
        protected flushedPos: long
        public constructor()
        protected readonly checkClosed(): void
        public setByteOrder(arg0: java.nio.ByteOrder): void
        public getByteOrder(): java.nio.ByteOrder
        public abstract read(): int
        public read(arg0: byte[]): int
        public abstract read(arg0: byte[], arg1: int, arg2: int): int
        public readBytes(arg0: javax.imageio.stream.IIOByteBuffer, arg1: int): void
        public readBoolean(): boolean
        public readByte(): byte
        public readUnsignedByte(): int
        public readShort(): short
        public readUnsignedShort(): int
        public readChar(): char
        public readInt(): int
        public readUnsignedInt(): long
        public readLong(): long
        public readFloat(): float
        public readDouble(): double
        public readLine(): java.lang.String
        public readUTF(): java.lang.String
        public readFully(arg0: byte[], arg1: int, arg2: int): void
        public readFully(arg0: byte[]): void
        public readFully(arg0: short[], arg1: int, arg2: int): void
        public readFully(arg0: char[], arg1: int, arg2: int): void
        public readFully(arg0: int[], arg1: int, arg2: int): void
        public readFully(arg0: long[], arg1: int, arg2: int): void
        public readFully(arg0: float[], arg1: int, arg2: int): void
        public readFully(arg0: double[], arg1: int, arg2: int): void
        public getStreamPosition(): long
        public getBitOffset(): int
        public setBitOffset(arg0: int): void
        public readBit(): int
        public readBits(arg0: int): long
        public length(): long
        public skipBytes(arg0: int): int
        public skipBytes(arg0: long): long
        public seek(arg0: long): void
        public mark(): void
        public reset(): void
        public flushBefore(arg0: long): void
        public flush(): void
        public getFlushedPosition(): long
        public isCached(): boolean
        public isCachedMemory(): boolean
        public isCachedFile(): boolean
        public close(): void
        protected finalize(): void
      }

    }
  }
}
