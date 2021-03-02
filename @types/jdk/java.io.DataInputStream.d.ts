declare namespace java {
  namespace io {

    class DataInputStream extends java.io.FilterInputStream implements java.io.DataInput {
      public constructor(arg0: java.io.InputStream)
      public read(arg0: byte[]): number
      public read(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
      public readFully(arg0: byte[]): void
      public readFully(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public skipBytes(arg0: number | java.lang.Integer): number
      public readBoolean(): boolean
      public readByte(): number
      public readUnsignedByte(): number
      public readShort(): number
      public readUnsignedShort(): number
      public readChar(): string
      public readInt(): number
      public readLong(): number
      public readFloat(): number
      public readDouble(): number
      public readLine(): java.lang.String
      public readUTF(): java.lang.String
      public static readUTF(arg0: java.io.DataInput): java.lang.String
    }

  }
}
