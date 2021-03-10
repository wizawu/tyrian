declare namespace javax {
  namespace sql {
    namespace rowset {
      namespace serial {

        class SerialBlob implements java.sql.Blob, java.io.Serializable, java.lang.Cloneable {
          static readonly serialVersionUID: long
          public constructor(arg0: number[] | java.lang.Byte[])
          public constructor(arg0: java.sql.Blob)
          public getBytes(arg0: number | java.lang.Long, arg1: number | java.lang.Integer): number[]
          public length(): number
          public getBinaryStream(): java.io.InputStream
          public position(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Long): number
          public position(arg0: java.sql.Blob, arg1: number | java.lang.Long): number
          public setBytes(arg0: number | java.lang.Long, arg1: number[] | java.lang.Byte[]): number
          public setBytes(arg0: number | java.lang.Long, arg1: number[] | java.lang.Byte[], arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): number
          public setBinaryStream(arg0: number | java.lang.Long): java.io.OutputStream
          public truncate(arg0: number | java.lang.Long): void
          public getBinaryStream(arg0: number | java.lang.Long, arg1: number | java.lang.Long): java.io.InputStream
          public free(): void
          public equals(arg0: java.lang.Object | any): boolean
          public hashCode(): number
          public clone(): java.lang.Object
        }

      }
    }
  }
}
