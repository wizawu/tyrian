declare namespace java {
  namespace sql {

    interface CallableStatement extends java.sql.PreparedStatement {
      registerOutParameter(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      registerOutParameter(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      wasNull(): boolean
      getString(arg0: number | java.lang.Integer): java.lang.String
      getBoolean(arg0: number | java.lang.Integer): boolean
      getByte(arg0: number | java.lang.Integer): number
      getShort(arg0: number | java.lang.Integer): number
      getInt(arg0: number | java.lang.Integer): number
      getLong(arg0: number | java.lang.Integer): number
      getFloat(arg0: number | java.lang.Integer): number
      getDouble(arg0: number | java.lang.Integer): number
      getBigDecimal(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.math.BigDecimal
      getBytes(arg0: number | java.lang.Integer): number[]
      getDate(arg0: number | java.lang.Integer): java.sql.Date
      getTime(arg0: number | java.lang.Integer): java.sql.Time
      getTimestamp(arg0: number | java.lang.Integer): java.sql.Timestamp
      getObject(arg0: number | java.lang.Integer): java.lang.Object
      getBigDecimal(arg0: number | java.lang.Integer): java.math.BigDecimal
      getObject(arg0: number | java.lang.Integer, arg1: java.util.Map<java.lang.String,java.lang.Class<unknown>>): java.lang.Object
      getRef(arg0: number | java.lang.Integer): java.sql.Ref
      getBlob(arg0: number | java.lang.Integer): java.sql.Blob
      getClob(arg0: number | java.lang.Integer): java.sql.Clob
      getArray(arg0: number | java.lang.Integer): java.sql.Array
      getDate(arg0: number | java.lang.Integer, arg1: java.util.Calendar): java.sql.Date
      getTime(arg0: number | java.lang.Integer, arg1: java.util.Calendar): java.sql.Time
      getTimestamp(arg0: number | java.lang.Integer, arg1: java.util.Calendar): java.sql.Timestamp
      registerOutParameter(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: java.lang.String | string): void
      registerOutParameter(arg0: java.lang.String | string, arg1: number | java.lang.Integer): void
      registerOutParameter(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      registerOutParameter(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: java.lang.String | string): void
      getURL(arg0: number | java.lang.Integer): java.net.URL
      setURL(arg0: java.lang.String | string, arg1: java.net.URL): void
      setNull(arg0: java.lang.String | string, arg1: number | java.lang.Integer): void
      setBoolean(arg0: java.lang.String | string, arg1: boolean | java.lang.Boolean): void
      setByte(arg0: java.lang.String | string, arg1: number | java.lang.Byte): void
      setShort(arg0: java.lang.String | string, arg1: number | java.lang.Short): void
      setInt(arg0: java.lang.String | string, arg1: number | java.lang.Integer): void
      setLong(arg0: java.lang.String | string, arg1: number | java.lang.Long): void
      setFloat(arg0: java.lang.String | string, arg1: number | java.lang.Float): void
      setDouble(arg0: java.lang.String | string, arg1: number | java.lang.Double): void
      setBigDecimal(arg0: java.lang.String | string, arg1: java.math.BigDecimal): void
      setString(arg0: java.lang.String | string, arg1: java.lang.String | string): void
      setBytes(arg0: java.lang.String | string, arg1: number[] | java.lang.Byte[]): void
      setDate(arg0: java.lang.String | string, arg1: java.sql.Date): void
      setTime(arg0: java.lang.String | string, arg1: java.sql.Time): void
      setTimestamp(arg0: java.lang.String | string, arg1: java.sql.Timestamp): void
      setAsciiStream(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: number | java.lang.Integer): void
      setBinaryStream(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: number | java.lang.Integer): void
      setObject(arg0: java.lang.String | string, arg1: java.lang.Object | any, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): void
      setObject(arg0: java.lang.String | string, arg1: java.lang.Object | any, arg2: number | java.lang.Integer): void
      setObject(arg0: java.lang.String | string, arg1: java.lang.Object | any): void
      setCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: number | java.lang.Integer): void
      setDate(arg0: java.lang.String | string, arg1: java.sql.Date, arg2: java.util.Calendar): void
      setTime(arg0: java.lang.String | string, arg1: java.sql.Time, arg2: java.util.Calendar): void
      setTimestamp(arg0: java.lang.String | string, arg1: java.sql.Timestamp, arg2: java.util.Calendar): void
      setNull(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: java.lang.String | string): void
      getString(arg0: java.lang.String | string): java.lang.String
      getBoolean(arg0: java.lang.String | string): boolean
      getByte(arg0: java.lang.String | string): number
      getShort(arg0: java.lang.String | string): number
      getInt(arg0: java.lang.String | string): number
      getLong(arg0: java.lang.String | string): number
      getFloat(arg0: java.lang.String | string): number
      getDouble(arg0: java.lang.String | string): number
      getBytes(arg0: java.lang.String | string): number[]
      getDate(arg0: java.lang.String | string): java.sql.Date
      getTime(arg0: java.lang.String | string): java.sql.Time
      getTimestamp(arg0: java.lang.String | string): java.sql.Timestamp
      getObject(arg0: java.lang.String | string): java.lang.Object
      getBigDecimal(arg0: java.lang.String | string): java.math.BigDecimal
      getObject(arg0: java.lang.String | string, arg1: java.util.Map<java.lang.String,java.lang.Class<unknown>>): java.lang.Object
      getRef(arg0: java.lang.String | string): java.sql.Ref
      getBlob(arg0: java.lang.String | string): java.sql.Blob
      getClob(arg0: java.lang.String | string): java.sql.Clob
      getArray(arg0: java.lang.String | string): java.sql.Array
      getDate(arg0: java.lang.String | string, arg1: java.util.Calendar): java.sql.Date
      getTime(arg0: java.lang.String | string, arg1: java.util.Calendar): java.sql.Time
      getTimestamp(arg0: java.lang.String | string, arg1: java.util.Calendar): java.sql.Timestamp
      getURL(arg0: java.lang.String | string): java.net.URL
      getRowId(arg0: number | java.lang.Integer): java.sql.RowId
      getRowId(arg0: java.lang.String | string): java.sql.RowId
      setRowId(arg0: java.lang.String | string, arg1: java.sql.RowId): void
      setNString(arg0: java.lang.String | string, arg1: java.lang.String | string): void
      setNCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: number | java.lang.Long): void
      setNClob(arg0: java.lang.String | string, arg1: java.sql.NClob): void
      setClob(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: number | java.lang.Long): void
      setBlob(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: number | java.lang.Long): void
      setNClob(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: number | java.lang.Long): void
      getNClob(arg0: number | java.lang.Integer): java.sql.NClob
      getNClob(arg0: java.lang.String | string): java.sql.NClob
      setSQLXML(arg0: java.lang.String | string, arg1: java.sql.SQLXML): void
      getSQLXML(arg0: number | java.lang.Integer): java.sql.SQLXML
      getSQLXML(arg0: java.lang.String | string): java.sql.SQLXML
      getNString(arg0: number | java.lang.Integer): java.lang.String
      getNString(arg0: java.lang.String | string): java.lang.String
      getNCharacterStream(arg0: number | java.lang.Integer): java.io.Reader
      getNCharacterStream(arg0: java.lang.String | string): java.io.Reader
      getCharacterStream(arg0: number | java.lang.Integer): java.io.Reader
      getCharacterStream(arg0: java.lang.String | string): java.io.Reader
      setBlob(arg0: java.lang.String | string, arg1: java.sql.Blob): void
      setClob(arg0: java.lang.String | string, arg1: java.sql.Clob): void
      setAsciiStream(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: number | java.lang.Long): void
      setBinaryStream(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: number | java.lang.Long): void
      setCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: number | java.lang.Long): void
      setAsciiStream(arg0: java.lang.String | string, arg1: java.io.InputStream): void
      setBinaryStream(arg0: java.lang.String | string, arg1: java.io.InputStream): void
      setCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader): void
      setNCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader): void
      setClob(arg0: java.lang.String | string, arg1: java.io.Reader): void
      setBlob(arg0: java.lang.String | string, arg1: java.io.InputStream): void
      setNClob(arg0: java.lang.String | string, arg1: java.io.Reader): void
      getObject<T>(arg0: number | java.lang.Integer, arg1: java.lang.Class<T>): T
      getObject<T>(arg0: java.lang.String | string, arg1: java.lang.Class<T>): T
      setObject(arg0: java.lang.String | string, arg1: java.lang.Object | any, arg2: java.sql.SQLType, arg3: number | java.lang.Integer): void
      setObject(arg0: java.lang.String | string, arg1: java.lang.Object | any, arg2: java.sql.SQLType): void
      registerOutParameter(arg0: number | java.lang.Integer, arg1: java.sql.SQLType): void
      registerOutParameter(arg0: number | java.lang.Integer, arg1: java.sql.SQLType, arg2: number | java.lang.Integer): void
      registerOutParameter(arg0: number | java.lang.Integer, arg1: java.sql.SQLType, arg2: java.lang.String | string): void
      registerOutParameter(arg0: java.lang.String | string, arg1: java.sql.SQLType): void
      registerOutParameter(arg0: java.lang.String | string, arg1: java.sql.SQLType, arg2: number | java.lang.Integer): void
      registerOutParameter(arg0: java.lang.String | string, arg1: java.sql.SQLType, arg2: java.lang.String | string): void
    }

  }
}
