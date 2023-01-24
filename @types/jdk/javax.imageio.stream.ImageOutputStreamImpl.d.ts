declare namespace javax {
  namespace imageio {
    namespace stream {
      abstract class ImageOutputStreamImpl
        extends javax.imageio.stream.ImageInputStreamImpl
        implements javax.imageio.stream.ImageOutputStream
      {
        public constructor()
        public abstract write(arg0: number | java.lang.Integer): void
        public write(arg0: number[] | java.lang.Byte[]): void
        public abstract write(
          arg0: number[] | java.lang.Byte[],
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): void
        public writeBoolean(arg0: boolean | java.lang.Boolean): void
        public writeByte(arg0: number | java.lang.Integer): void
        public writeShort(arg0: number | java.lang.Integer): void
        public writeChar(arg0: number | java.lang.Integer): void
        public writeInt(arg0: number | java.lang.Integer): void
        public writeLong(arg0: number | java.lang.Long): void
        public writeFloat(arg0: number | java.lang.Float): void
        public writeDouble(arg0: number | java.lang.Double): void
        public writeBytes(arg0: java.lang.String | string): void
        public writeChars(arg0: java.lang.String | string): void
        public writeUTF(arg0: java.lang.String | string): void
        public writeShorts(
          arg0: number[] | java.lang.Short[],
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): void
        public writeChars(
          arg0: string[] | java.lang.Character[],
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): void
        public writeInts(
          arg0: number[] | java.lang.Integer[],
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): void
        public writeLongs(
          arg0: number[] | java.lang.Long[],
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): void
        public writeFloats(
          arg0: number[] | java.lang.Float[],
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): void
        public writeDoubles(
          arg0: number[] | java.lang.Double[],
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): void
        public writeBit(arg0: number | java.lang.Integer): void
        public writeBits(arg0: number | java.lang.Long, arg1: number | java.lang.Integer): void
        protected flushBits(): void
      }
    }
  }
}
