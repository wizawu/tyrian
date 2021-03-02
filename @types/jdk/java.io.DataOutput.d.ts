declare namespace java {
  namespace io {

    interface DataOutput {
      write(arg0: int): void
      write(arg0: byte[]): void
      write(arg0: byte[], arg1: int, arg2: int): void
      writeBoolean(arg0: boolean): void
      writeByte(arg0: int): void
      writeShort(arg0: int): void
      writeChar(arg0: int): void
      writeInt(arg0: int): void
      writeLong(arg0: long): void
      writeFloat(arg0: float): void
      writeDouble(arg0: double): void
      writeBytes(arg0: java.lang.String): void
      writeChars(arg0: java.lang.String): void
      writeUTF(arg0: java.lang.String): void
    }

  }
}
