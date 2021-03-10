declare namespace java {
  namespace io {

    interface DataInput {
      readFully(arg0: number[] | java.lang.Byte[]): void
      readFully(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      skipBytes(arg0: number | java.lang.Integer): number
      readBoolean(): boolean
      readByte(): number
      readUnsignedByte(): number
      readShort(): number
      readUnsignedShort(): number
      readChar(): string
      readInt(): number
      readLong(): number
      readFloat(): number
      readDouble(): number
      readLine(): java.lang.String
      readUTF(): java.lang.String
    }

  }
}
