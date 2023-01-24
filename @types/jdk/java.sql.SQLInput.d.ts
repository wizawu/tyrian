declare namespace java {
  namespace sql {
    interface SQLInput {
      readString(): java.lang.String
      readBoolean(): boolean
      readByte(): number
      readShort(): number
      readInt(): number
      readLong(): number
      readFloat(): number
      readDouble(): number
      readBigDecimal(): java.math.BigDecimal
      readBytes(): number[]
      readDate(): java.sql.Date
      readTime(): java.sql.Time
      readTimestamp(): java.sql.Timestamp
      readCharacterStream(): java.io.Reader
      readAsciiStream(): java.io.InputStream
      readBinaryStream(): java.io.InputStream
      readObject(): java.lang.Object
      readRef(): java.sql.Ref
      readBlob(): java.sql.Blob
      readClob(): java.sql.Clob
      readArray(): java.sql.Array
      wasNull(): boolean
      readURL(): java.net.URL
      readNClob(): java.sql.NClob
      readNString(): java.lang.String
      readSQLXML(): java.sql.SQLXML
      readRowId(): java.sql.RowId
      readObject<T>(arg0: java.lang.Class<T>): T
    }
  }
}
