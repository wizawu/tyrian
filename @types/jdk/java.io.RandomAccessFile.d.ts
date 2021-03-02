declare namespace java {
  namespace io {

    class RandomAccessFile implements java.io.DataOutput, java.io.DataInput, java.io.Closeable {
      public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
      public constructor(arg0: java.io.File, arg1: java.lang.String | string)
      public getFD(): java.io.FileDescriptor
      public getChannel(): java.nio.channels.FileChannel
      public read(): number
      public read(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
      public read(arg0: byte[]): number
      public readFully(arg0: byte[]): void
      public readFully(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public skipBytes(arg0: number | java.lang.Integer): number
      public write(arg0: number | java.lang.Integer): void
      public write(arg0: byte[]): void
      public write(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public getFilePointer(): number
      public seek(arg0: number | java.lang.Long): void
      public length(): number
      public setLength(arg0: number | java.lang.Long): void
      public close(): void
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
    }

  }
}
