declare namespace javax {
  namespace sql {
    namespace rowset {
      namespace serial {
        class SQLInputImpl implements java.sql.SQLInput {
          public constructor(
            arg0: java.lang.Object[] | any[],
            arg1: java.util.Map<java.lang.String, java.lang.Class<unknown>>
          )
          public readString(): java.lang.String
          public readBoolean(): boolean
          public readByte(): number
          public readShort(): number
          public readInt(): number
          public readLong(): number
          public readFloat(): number
          public readDouble(): number
          public readBigDecimal(): java.math.BigDecimal
          public readBytes(): number[]
          public readDate(): java.sql.Date
          public readTime(): java.sql.Time
          public readTimestamp(): java.sql.Timestamp
          public readCharacterStream(): java.io.Reader
          public readAsciiStream(): java.io.InputStream
          public readBinaryStream(): java.io.InputStream
          public readObject(): java.lang.Object
          public readRef(): java.sql.Ref
          public readBlob(): java.sql.Blob
          public readClob(): java.sql.Clob
          public readArray(): java.sql.Array
          public wasNull(): boolean
          public readURL(): java.net.URL
          public readNClob(): java.sql.NClob
          public readNString(): java.lang.String
          public readSQLXML(): java.sql.SQLXML
          public readRowId(): java.sql.RowId
        }
      }
    }
  }
}
