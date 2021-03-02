declare namespace javax {
  namespace sql {

    interface RowSet extends java.sql.ResultSet {
      getUrl(): java.lang.String
      setUrl(arg0: java.lang.String): void
      getDataSourceName(): java.lang.String
      setDataSourceName(arg0: java.lang.String): void
      getUsername(): java.lang.String
      setUsername(arg0: java.lang.String): void
      getPassword(): java.lang.String
      setPassword(arg0: java.lang.String): void
      getTransactionIsolation(): int
      setTransactionIsolation(arg0: int): void
      getTypeMap(): java.util.Map<java.lang.String,java.lang.Class<unknown>>
      setTypeMap(arg0: java.util.Map<java.lang.String,java.lang.Class<unknown>>): void
      getCommand(): java.lang.String
      setCommand(arg0: java.lang.String): void
      isReadOnly(): boolean
      setReadOnly(arg0: boolean): void
      getMaxFieldSize(): int
      setMaxFieldSize(arg0: int): void
      getMaxRows(): int
      setMaxRows(arg0: int): void
      getEscapeProcessing(): boolean
      setEscapeProcessing(arg0: boolean): void
      getQueryTimeout(): int
      setQueryTimeout(arg0: int): void
      setType(arg0: int): void
      setConcurrency(arg0: int): void
      setNull(arg0: int, arg1: int): void
      setNull(arg0: java.lang.String, arg1: int): void
      setNull(arg0: int, arg1: int, arg2: java.lang.String): void
      setNull(arg0: java.lang.String, arg1: int, arg2: java.lang.String): void
      setBoolean(arg0: int, arg1: boolean): void
      setBoolean(arg0: java.lang.String, arg1: boolean): void
      setByte(arg0: int, arg1: byte): void
      setByte(arg0: java.lang.String, arg1: byte): void
      setShort(arg0: int, arg1: short): void
      setShort(arg0: java.lang.String, arg1: short): void
      setInt(arg0: int, arg1: int): void
      setInt(arg0: java.lang.String, arg1: int): void
      setLong(arg0: int, arg1: long): void
      setLong(arg0: java.lang.String, arg1: long): void
      setFloat(arg0: int, arg1: float): void
      setFloat(arg0: java.lang.String, arg1: float): void
      setDouble(arg0: int, arg1: double): void
      setDouble(arg0: java.lang.String, arg1: double): void
      setBigDecimal(arg0: int, arg1: java.math.BigDecimal): void
      setBigDecimal(arg0: java.lang.String, arg1: java.math.BigDecimal): void
      setString(arg0: int, arg1: java.lang.String): void
      setString(arg0: java.lang.String, arg1: java.lang.String): void
      setBytes(arg0: int, arg1: byte[]): void
      setBytes(arg0: java.lang.String, arg1: byte[]): void
      setDate(arg0: int, arg1: java.sql.Date): void
      setTime(arg0: int, arg1: java.sql.Time): void
      setTimestamp(arg0: int, arg1: java.sql.Timestamp): void
      setTimestamp(arg0: java.lang.String, arg1: java.sql.Timestamp): void
      setAsciiStream(arg0: int, arg1: java.io.InputStream, arg2: int): void
      setAsciiStream(arg0: java.lang.String, arg1: java.io.InputStream, arg2: int): void
      setBinaryStream(arg0: int, arg1: java.io.InputStream, arg2: int): void
      setBinaryStream(arg0: java.lang.String, arg1: java.io.InputStream, arg2: int): void
      setCharacterStream(arg0: int, arg1: java.io.Reader, arg2: int): void
      setCharacterStream(arg0: java.lang.String, arg1: java.io.Reader, arg2: int): void
      setAsciiStream(arg0: int, arg1: java.io.InputStream): void
      setAsciiStream(arg0: java.lang.String, arg1: java.io.InputStream): void
      setBinaryStream(arg0: int, arg1: java.io.InputStream): void
      setBinaryStream(arg0: java.lang.String, arg1: java.io.InputStream): void
      setCharacterStream(arg0: int, arg1: java.io.Reader): void
      setCharacterStream(arg0: java.lang.String, arg1: java.io.Reader): void
      setNCharacterStream(arg0: int, arg1: java.io.Reader): void
      setObject(arg0: int, arg1: java.lang.Object, arg2: int, arg3: int): void
      setObject(arg0: java.lang.String, arg1: java.lang.Object, arg2: int, arg3: int): void
      setObject(arg0: int, arg1: java.lang.Object, arg2: int): void
      setObject(arg0: java.lang.String, arg1: java.lang.Object, arg2: int): void
      setObject(arg0: java.lang.String, arg1: java.lang.Object): void
      setObject(arg0: int, arg1: java.lang.Object): void
      setRef(arg0: int, arg1: java.sql.Ref): void
      setBlob(arg0: int, arg1: java.sql.Blob): void
      setBlob(arg0: int, arg1: java.io.InputStream, arg2: long): void
      setBlob(arg0: int, arg1: java.io.InputStream): void
      setBlob(arg0: java.lang.String, arg1: java.io.InputStream, arg2: long): void
      setBlob(arg0: java.lang.String, arg1: java.sql.Blob): void
      setBlob(arg0: java.lang.String, arg1: java.io.InputStream): void
      setClob(arg0: int, arg1: java.sql.Clob): void
      setClob(arg0: int, arg1: java.io.Reader, arg2: long): void
      setClob(arg0: int, arg1: java.io.Reader): void
      setClob(arg0: java.lang.String, arg1: java.io.Reader, arg2: long): void
      setClob(arg0: java.lang.String, arg1: java.sql.Clob): void
      setClob(arg0: java.lang.String, arg1: java.io.Reader): void
      setArray(arg0: int, arg1: java.sql.Array): void
      setDate(arg0: int, arg1: java.sql.Date, arg2: java.util.Calendar): void
      setDate(arg0: java.lang.String, arg1: java.sql.Date): void
      setDate(arg0: java.lang.String, arg1: java.sql.Date, arg2: java.util.Calendar): void
      setTime(arg0: int, arg1: java.sql.Time, arg2: java.util.Calendar): void
      setTime(arg0: java.lang.String, arg1: java.sql.Time): void
      setTime(arg0: java.lang.String, arg1: java.sql.Time, arg2: java.util.Calendar): void
      setTimestamp(arg0: int, arg1: java.sql.Timestamp, arg2: java.util.Calendar): void
      setTimestamp(arg0: java.lang.String, arg1: java.sql.Timestamp, arg2: java.util.Calendar): void
      clearParameters(): void
      execute(): void
      addRowSetListener(arg0: javax.sql.RowSetListener): void
      removeRowSetListener(arg0: javax.sql.RowSetListener): void
      setSQLXML(arg0: int, arg1: java.sql.SQLXML): void
      setSQLXML(arg0: java.lang.String, arg1: java.sql.SQLXML): void
      setRowId(arg0: int, arg1: java.sql.RowId): void
      setRowId(arg0: java.lang.String, arg1: java.sql.RowId): void
      setNString(arg0: int, arg1: java.lang.String): void
      setNString(arg0: java.lang.String, arg1: java.lang.String): void
      setNCharacterStream(arg0: int, arg1: java.io.Reader, arg2: long): void
      setNCharacterStream(arg0: java.lang.String, arg1: java.io.Reader, arg2: long): void
      setNCharacterStream(arg0: java.lang.String, arg1: java.io.Reader): void
      setNClob(arg0: java.lang.String, arg1: java.sql.NClob): void
      setNClob(arg0: java.lang.String, arg1: java.io.Reader, arg2: long): void
      setNClob(arg0: java.lang.String, arg1: java.io.Reader): void
      setNClob(arg0: int, arg1: java.io.Reader, arg2: long): void
      setNClob(arg0: int, arg1: java.sql.NClob): void
      setNClob(arg0: int, arg1: java.io.Reader): void
      setURL(arg0: int, arg1: java.net.URL): void
    }

  }
}
