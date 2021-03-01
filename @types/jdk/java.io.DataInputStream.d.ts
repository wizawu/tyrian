declare namespace java {
  namespace io {

    class DataInputStream extends java.io.FilterInputStream implements java.io.DataInput {

      public constructor(arg0: java.io.InputStream)
      public readonly read(arg0: byte[]): int
      public readonly read(arg0: byte[], arg1: int, arg2: int): int
      public readonly readFully(arg0: byte[]): void
      public readonly readFully(arg0: byte[], arg1: int, arg2: int): void
      public readonly skipBytes(arg0: int): int
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
      public static readonly readUTF(arg0: java.io.DataInput): java.lang.String
    }

  }
}
