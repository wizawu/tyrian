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
        protected checkClosed(): void
        public setByteOrder(arg0: java.nio.ByteOrder): void
        public getByteOrder(): java.nio.ByteOrder
        public abstract read(): number
        public read(arg0: number[] | java.lang.Byte[]): number
        public abstract read(
          arg0: number[] | java.lang.Byte[],
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): number
        public readBytes(arg0: javax.imageio.stream.IIOByteBuffer, arg1: number | java.lang.Integer): void
        public readBoolean(): boolean
        public readByte(): number
        public readUnsignedByte(): number
        public readShort(): number
        public readUnsignedShort(): number
        public readChar(): string
        public readInt(): number
        public readUnsignedInt(): number
        public readLong(): number
        public readFloat(): number
        public readDouble(): number
        public readLine(): java.lang.String
        public readUTF(): java.lang.String
        public readFully(
          arg0: number[] | java.lang.Byte[],
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): void
        public readFully(arg0: number[] | java.lang.Byte[]): void
        public readFully(
          arg0: number[] | java.lang.Short[],
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): void
        public readFully(
          arg0: string[] | java.lang.Character[],
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): void
        public readFully(
          arg0: number[] | java.lang.Integer[],
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): void
        public readFully(
          arg0: number[] | java.lang.Long[],
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): void
        public readFully(
          arg0: number[] | java.lang.Float[],
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): void
        public readFully(
          arg0: number[] | java.lang.Double[],
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): void
        public getStreamPosition(): number
        public getBitOffset(): number
        public setBitOffset(arg0: number | java.lang.Integer): void
        public readBit(): number
        public readBits(arg0: number | java.lang.Integer): number
        public length(): number
        public skipBytes(arg0: number | java.lang.Integer): number
        public skipBytes(arg0: number | java.lang.Long): number
        public seek(arg0: number | java.lang.Long): void
        public mark(): void
        public reset(): void
        public flushBefore(arg0: number | java.lang.Long): void
        public flush(): void
        public getFlushedPosition(): number
        public isCached(): boolean
        public isCachedMemory(): boolean
        public isCachedFile(): boolean
        public close(): void
        protected finalize(): void
      }
    }
  }
}
