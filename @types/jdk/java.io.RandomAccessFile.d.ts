declare namespace java {
  namespace io {

    class RandomAccessFile implements java.io.DataOutput, java.io.DataInput, java.io.Closeable {

      public constructor(arg0: java.lang.String, arg1: java.lang.String)
      public constructor(arg0: java.io.File, arg1: java.lang.String)
      public readonly getFD(): java.io.FileDescriptor
      public readonly getChannel(): java.nio.channels.FileChannel
      public read(): int
      public read(arg0: byte[], arg1: int, arg2: int): int
      public read(arg0: byte[]): int
      public readonly readFully(arg0: byte[]): void
      public readonly readFully(arg0: byte[], arg1: int, arg2: int): void
      public skipBytes(arg0: int): int
      public write(arg0: int): void
      public write(arg0: byte[]): void
      public write(arg0: byte[], arg1: int, arg2: int): void
      public getFilePointer(): long
      public seek(arg0: long): void
      public length(): long
      public setLength(arg0: long): void
      public close(): void
      public readonly readBoolean(): boolean
      public readonly readByte(): byte
      public readonly readUnsignedByte(): int
      public readonly readShort(): short
      public readonly readUnsignedShort(): int
      public readonly readChar(): char
      public readonly readInt(): int
      public readonly readLong(): long
      public readonly readFloat(): float
      public readonly readDouble(): double
      public readonly readLine(): java.lang.String
      public readonly readUTF(): java.lang.String
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
    }

  }
}
