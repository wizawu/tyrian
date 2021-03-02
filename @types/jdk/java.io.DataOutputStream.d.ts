declare namespace java {
  namespace io {

    class DataOutputStream extends java.io.FilterOutputStream implements java.io.DataOutput {
      protected written: int
      public constructor(arg0: java.io.OutputStream)
      public write(arg0: int): void
      public write(arg0: byte[], arg1: int, arg2: int): void
      public flush(): void
      public writeBoolean(arg0: boolean): void
      public writeByte(arg0: int): void
      public writeShort(arg0: int): void
      public writeChar(arg0: int): void
      public writeInt(arg0: int): void
      public writeLong(arg0: long): void
      public writeFloat(arg0: float): void
      public writeDouble(arg0: double): void
      public writeBytes(arg0: java.lang.String): void
      public writeChars(arg0: java.lang.String): void
      public writeUTF(arg0: java.lang.String): void
      static writeUTF(arg0: java.lang.String, arg1: java.io.DataOutput): int
      public size(): int
    }

  }
}
