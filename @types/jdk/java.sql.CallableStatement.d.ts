declare namespace java {
  namespace sql {

    interface CallableStatement extends java.sql.PreparedStatement {
      registerOutParameter(arg0: int, arg1: int): void
      registerOutParameter(arg0: int, arg1: int, arg2: int): void
      wasNull(): boolean
      getString(arg0: int): java.lang.String
      getBoolean(arg0: int): boolean
      getByte(arg0: int): byte
      getShort(arg0: int): short
      getInt(arg0: int): int
      getLong(arg0: int): long
      getFloat(arg0: int): float
      getDouble(arg0: int): double
      getBigDecimal(arg0: int, arg1: int): java.math.BigDecimal
      getBytes(arg0: int): byte[]
      getDate(arg0: int): java.sql.Date
      getTime(arg0: int): java.sql.Time
      getTimestamp(arg0: int): java.sql.Timestamp
      getObject(arg0: int): java.lang.Object
      getBigDecimal(arg0: int): java.math.BigDecimal
      getObject(arg0: int, arg1: java.util.Map<java.lang.String,java.lang.Class<unknown>>): java.lang.Object
      getRef(arg0: int): java.sql.Ref
      getBlob(arg0: int): java.sql.Blob
      getClob(arg0: int): java.sql.Clob
      getArray(arg0: int): java.sql.Array
      getDate(arg0: int, arg1: java.util.Calendar): java.sql.Date
      getTime(arg0: int, arg1: java.util.Calendar): java.sql.Time
      getTimestamp(arg0: int, arg1: java.util.Calendar): java.sql.Timestamp
      registerOutParameter(arg0: int, arg1: int, arg2: java.lang.String): void
      registerOutParameter(arg0: java.lang.String, arg1: int): void
      registerOutParameter(arg0: java.lang.String, arg1: int, arg2: int): void
      registerOutParameter(arg0: java.lang.String, arg1: int, arg2: java.lang.String): void
      getURL(arg0: int): java.net.URL
      setURL(arg0: java.lang.String, arg1: java.net.URL): void
      setNull(arg0: java.lang.String, arg1: int): void
      setBoolean(arg0: java.lang.String, arg1: boolean): void
      setByte(arg0: java.lang.String, arg1: byte): void
      setShort(arg0: java.lang.String, arg1: short): void
      setInt(arg0: java.lang.String, arg1: int): void
      setLong(arg0: java.lang.String, arg1: long): void
      setFloat(arg0: java.lang.String, arg1: float): void
      setDouble(arg0: java.lang.String, arg1: double): void
      setBigDecimal(arg0: java.lang.String, arg1: java.math.BigDecimal): void
      setString(arg0: java.lang.String, arg1: java.lang.String): void
      setBytes(arg0: java.lang.String, arg1: byte[]): void
      setDate(arg0: java.lang.String, arg1: java.sql.Date): void
      setTime(arg0: java.lang.String, arg1: java.sql.Time): void
      setTimestamp(arg0: java.lang.String, arg1: java.sql.Timestamp): void
      setAsciiStream(arg0: java.lang.String, arg1: java.io.InputStream, arg2: int): void
      setBinaryStream(arg0: java.lang.String, arg1: java.io.InputStream, arg2: int): void
      setObject(arg0: java.lang.String, arg1: java.lang.Object, arg2: int, arg3: int): void
      setObject(arg0: java.lang.String, arg1: java.lang.Object, arg2: int): void
      setObject(arg0: java.lang.String, arg1: java.lang.Object): void
      setCharacterStream(arg0: java.lang.String, arg1: java.io.Reader, arg2: int): void
      setDate(arg0: java.lang.String, arg1: java.sql.Date, arg2: java.util.Calendar): void
      setTime(arg0: java.lang.String, arg1: java.sql.Time, arg2: java.util.Calendar): void
      setTimestamp(arg0: java.lang.String, arg1: java.sql.Timestamp, arg2: java.util.Calendar): void
      setNull(arg0: java.lang.String, arg1: int, arg2: java.lang.String): void
      getString(arg0: java.lang.String): java.lang.String
      getBoolean(arg0: java.lang.String): boolean
      getByte(arg0: java.lang.String): byte
      getShort(arg0: java.lang.String): short
      getInt(arg0: java.lang.String): int
      getLong(arg0: java.lang.String): long
      getFloat(arg0: java.lang.String): float
      getDouble(arg0: java.lang.String): double
      getBytes(arg0: java.lang.String): byte[]
      getDate(arg0: java.lang.String): java.sql.Date
      getTime(arg0: java.lang.String): java.sql.Time
      getTimestamp(arg0: java.lang.String): java.sql.Timestamp
      getObject(arg0: java.lang.String): java.lang.Object
      getBigDecimal(arg0: java.lang.String): java.math.BigDecimal
      getObject(arg0: java.lang.String, arg1: java.util.Map<java.lang.String,java.lang.Class<unknown>>): java.lang.Object
      getRef(arg0: java.lang.String): java.sql.Ref
      getBlob(arg0: java.lang.String): java.sql.Blob
      getClob(arg0: java.lang.String): java.sql.Clob
      getArray(arg0: java.lang.String): java.sql.Array
      getDate(arg0: java.lang.String, arg1: java.util.Calendar): java.sql.Date
      getTime(arg0: java.lang.String, arg1: java.util.Calendar): java.sql.Time
      getTimestamp(arg0: java.lang.String, arg1: java.util.Calendar): java.sql.Timestamp
      getURL(arg0: java.lang.String): java.net.URL
      getRowId(arg0: int): java.sql.RowId
      getRowId(arg0: java.lang.String): java.sql.RowId
      setRowId(arg0: java.lang.String, arg1: java.sql.RowId): void
      setNString(arg0: java.lang.String, arg1: java.lang.String): void
      setNCharacterStream(arg0: java.lang.String, arg1: java.io.Reader, arg2: long): void
      setNClob(arg0: java.lang.String, arg1: java.sql.NClob): void
      setClob(arg0: java.lang.String, arg1: java.io.Reader, arg2: long): void
      setBlob(arg0: java.lang.String, arg1: java.io.InputStream, arg2: long): void
      setNClob(arg0: java.lang.String, arg1: java.io.Reader, arg2: long): void
      getNClob(arg0: int): java.sql.NClob
      getNClob(arg0: java.lang.String): java.sql.NClob
      setSQLXML(arg0: java.lang.String, arg1: java.sql.SQLXML): void
      getSQLXML(arg0: int): java.sql.SQLXML
      getSQLXML(arg0: java.lang.String): java.sql.SQLXML
      getNString(arg0: int): java.lang.String
      getNString(arg0: java.lang.String): java.lang.String
      getNCharacterStream(arg0: int): java.io.Reader
      getNCharacterStream(arg0: java.lang.String): java.io.Reader
      getCharacterStream(arg0: int): java.io.Reader
      getCharacterStream(arg0: java.lang.String): java.io.Reader
      setBlob(arg0: java.lang.String, arg1: java.sql.Blob): void
      setClob(arg0: java.lang.String, arg1: java.sql.Clob): void
      setAsciiStream(arg0: java.lang.String, arg1: java.io.InputStream, arg2: long): void
      setBinaryStream(arg0: java.lang.String, arg1: java.io.InputStream, arg2: long): void
      setCharacterStream(arg0: java.lang.String, arg1: java.io.Reader, arg2: long): void
      setAsciiStream(arg0: java.lang.String, arg1: java.io.InputStream): void
      setBinaryStream(arg0: java.lang.String, arg1: java.io.InputStream): void
      setCharacterStream(arg0: java.lang.String, arg1: java.io.Reader): void
      setNCharacterStream(arg0: java.lang.String, arg1: java.io.Reader): void
      setClob(arg0: java.lang.String, arg1: java.io.Reader): void
      setBlob(arg0: java.lang.String, arg1: java.io.InputStream): void
      setNClob(arg0: java.lang.String, arg1: java.io.Reader): void
      getObject<T>(arg0: int, arg1: java.lang.Class<T>): T
      getObject<T>(arg0: java.lang.String, arg1: java.lang.Class<T>): T
      setObject(arg0: java.lang.String, arg1: java.lang.Object, arg2: java.sql.SQLType, arg3: int): void
      setObject(arg0: java.lang.String, arg1: java.lang.Object, arg2: java.sql.SQLType): void
      registerOutParameter(arg0: int, arg1: java.sql.SQLType): void
      registerOutParameter(arg0: int, arg1: java.sql.SQLType, arg2: int): void
      registerOutParameter(arg0: int, arg1: java.sql.SQLType, arg2: java.lang.String): void
      registerOutParameter(arg0: java.lang.String, arg1: java.sql.SQLType): void
      registerOutParameter(arg0: java.lang.String, arg1: java.sql.SQLType, arg2: int): void
      registerOutParameter(arg0: java.lang.String, arg1: java.sql.SQLType, arg2: java.lang.String): void
    }

  }
}
