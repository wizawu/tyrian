declare namespace java {
  namespace io {
    interface DataOutput {
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
    }
  }
}
