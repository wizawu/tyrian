declare namespace java {
  namespace io {

    class DataOutputStream extends java.io.FilterOutputStream implements java.io.DataOutput {
      protected written: int
      public constructor(arg0: java.io.OutputStream)
      public write(arg0: number | java.lang.Integer): void
      public write(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public flush(): void
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
      static writeUTF(arg0: java.lang.String | string, arg1: java.io.DataOutput): number
      public size(): number
    }

  }
}
