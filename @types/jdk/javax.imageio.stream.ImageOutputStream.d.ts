declare namespace javax {
  namespace imageio {
    namespace stream {

      interface ImageOutputStream extends javax.imageio.stream.ImageInputStream, java.io.DataOutput {
        write(arg0: number | java.lang.Integer): void
        write(arg0: number[] | java.lang.Byte[]): void
        write(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
        writeBoolean(arg0: boolean | java.lang.Boolean): void
        writeByte(arg0: number | java.lang.Integer): void
        writeShort(arg0: number | java.lang.Integer): void
        writeChar(arg0: number | java.lang.Integer): void
        writeInt(arg0: number | java.lang.Integer): void
        writeLong(arg0: number | java.lang.Long): void
        writeFloat(arg0: number | java.lang.Float): void
        writeDouble(arg0: number | java.lang.Double): void
        writeBytes(arg0: java.lang.String | string): void
        writeChars(arg0: java.lang.String | string): void
        writeUTF(arg0: java.lang.String | string): void
        writeShorts(arg0: number[] | java.lang.Short[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
        writeChars(arg0: string[] | java.lang.Character[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
        writeInts(arg0: number[] | java.lang.Integer[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
        writeLongs(arg0: number[] | java.lang.Long[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
        writeFloats(arg0: number[] | java.lang.Float[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
        writeDoubles(arg0: number[] | java.lang.Double[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
        writeBit(arg0: number | java.lang.Integer): void
        writeBits(arg0: number | java.lang.Long, arg1: number | java.lang.Integer): void
        flushBefore(arg0: number | java.lang.Long): void
      }

    }
  }
}
