declare namespace java {
  namespace sql {

    interface SQLOutput {
      writeString(arg0: java.lang.String | string): void
      writeBoolean(arg0: boolean | java.lang.Boolean): void
      writeByte(arg0: number | java.lang.Byte): void
      writeShort(arg0: number | java.lang.Short): void
      writeInt(arg0: number | java.lang.Integer): void
      writeLong(arg0: number | java.lang.Long): void
      writeFloat(arg0: number | java.lang.Float): void
      writeDouble(arg0: number | java.lang.Double): void
      writeBigDecimal(arg0: java.math.BigDecimal): void
      writeBytes(arg0: number[] | java.lang.Byte[]): void
      writeDate(arg0: java.sql.Date): void
      writeTime(arg0: java.sql.Time): void
      writeTimestamp(arg0: java.sql.Timestamp): void
      writeCharacterStream(arg0: java.io.Reader): void
      writeAsciiStream(arg0: java.io.InputStream): void
      writeBinaryStream(arg0: java.io.InputStream): void
      writeObject(arg0: java.sql.SQLData): void
      writeRef(arg0: java.sql.Ref): void
      writeBlob(arg0: java.sql.Blob): void
      writeClob(arg0: java.sql.Clob): void
      writeStruct(arg0: java.sql.Struct): void
      writeArray(arg0: java.sql.Array): void
      writeURL(arg0: java.net.URL): void
      writeNString(arg0: java.lang.String | string): void
      writeNClob(arg0: java.sql.NClob): void
      writeRowId(arg0: java.sql.RowId): void
      writeSQLXML(arg0: java.sql.SQLXML): void
      writeObject(arg0: java.lang.Object | any, arg1: java.sql.SQLType): void
    }

  }
}
