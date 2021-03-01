declare namespace java {
  namespace io {

    class DataOutputStream extends java.io.FilterOutputStream implements java.io.DataOutput {

      protected written: int
      public constructor(arg0: java.io.OutputStream)
      public write(arg0: int): void
      public write(arg0: byte[], arg1: int, arg2: int): void
      public flush(): void
      public readonly writeBoolean(arg0: boolean): void
      public readonly writeByte(arg0: int): void
      public readonly writeShort(arg0: int): void
      public readonly writeChar(arg0: int): void
      public readonly writeInt(arg0: int): void
      public readonly writeLong(arg0: long): void
      public readonly writeFloat(arg0: float): void
      public readonly writeDouble(arg0: double): void
      public readonly writeBytes(arg0: java.lang.String): void
      public readonly writeChars(arg0: java.lang.String): void
      public readonly writeUTF(arg0: java.lang.String): void
      static writeUTF(arg0: java.lang.String, arg1: java.io.DataOutput): int
      public readonly size(): int
    }

  }
}
