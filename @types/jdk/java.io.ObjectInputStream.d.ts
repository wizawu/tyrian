declare namespace java {
  namespace io {
    class ObjectInputStream extends java.io.InputStream implements java.io.ObjectInput, java.io.ObjectStreamConstants {
      public constructor(arg0: java.io.InputStream)
      protected constructor()
      public readObject(): java.lang.Object
      protected readObjectOverride(): java.lang.Object
      public readUnshared(): java.lang.Object
      public defaultReadObject(): void
      public readFields(): java.io.ObjectInputStream$GetField
      public registerValidation(
        arg0: java.io.ObjectInputValidation | java.io.ObjectInputValidation$$lambda,
        arg1: number | java.lang.Integer
      ): void
      protected resolveClass(arg0: java.io.ObjectStreamClass): java.lang.Class<unknown>
      protected resolveProxyClass(arg0: java.lang.String[] | string[]): java.lang.Class<unknown>
      protected resolveObject(arg0: java.lang.Object | any): java.lang.Object
      protected enableResolveObject(arg0: boolean | java.lang.Boolean): boolean
      protected readStreamHeader(): void
      protected readClassDescriptor(): java.io.ObjectStreamClass
      public read(): number
      public read(
        arg0: number[] | java.lang.Byte[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): number
      public available(): number
      public close(): void
      public readBoolean(): boolean
      public readByte(): number
      public readUnsignedByte(): number
      public readChar(): string
      public readShort(): number
      public readUnsignedShort(): number
      public readInt(): number
      public readLong(): number
      public readFloat(): number
      public readDouble(): number
      public readFully(arg0: number[] | java.lang.Byte[]): void
      public readFully(
        arg0: number[] | java.lang.Byte[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): void
      public skipBytes(arg0: number | java.lang.Integer): number
      public readLine(): java.lang.String
      public readUTF(): java.lang.String
      public getObjectInputFilter(): java.io.ObjectInputFilter
      public setObjectInputFilter(arg0: java.io.ObjectInputFilter | java.io.ObjectInputFilter$$lambda): void
      readTypeString(): java.lang.String
    }
  }
}
