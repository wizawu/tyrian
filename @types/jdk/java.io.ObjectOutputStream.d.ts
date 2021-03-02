declare namespace java {
  namespace io {

    class ObjectOutputStream extends java.io.OutputStream implements java.io.ObjectOutput, java.io.ObjectStreamConstants {
      public constructor(arg0: java.io.OutputStream)
      protected constructor()
      public useProtocolVersion(arg0: number | java.lang.Integer): void
      public writeObject(arg0: java.lang.Object | any): void
      protected writeObjectOverride(arg0: java.lang.Object | any): void
      public writeUnshared(arg0: java.lang.Object | any): void
      public defaultWriteObject(): void
      public putFields(): java.io.ObjectOutputStream$PutField
      public writeFields(): void
      public reset(): void
      protected annotateClass(arg0: java.lang.Class<unknown>): void
      protected annotateProxyClass(arg0: java.lang.Class<unknown>): void
      protected replaceObject(arg0: java.lang.Object | any): java.lang.Object
      protected enableReplaceObject(arg0: boolean | java.lang.Boolean): boolean
      protected writeStreamHeader(): void
      protected writeClassDescriptor(arg0: java.io.ObjectStreamClass): void
      public write(arg0: number | java.lang.Integer): void
      public write(arg0: byte[]): void
      public write(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public flush(): void
      protected drain(): void
      public close(): void
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
      getProtocolVersion(): number
      writeTypeString(arg0: java.lang.String | string): void
    }

  }
}
