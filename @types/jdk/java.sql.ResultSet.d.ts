declare namespace java {
  namespace sql {
    interface ResultSet extends java.sql.Wrapper, java.lang.AutoCloseable {
      readonly FETCH_FORWARD: int
      readonly FETCH_REVERSE: int
      readonly FETCH_UNKNOWN: int
      readonly TYPE_FORWARD_ONLY: int
      readonly TYPE_SCROLL_INSENSITIVE: int
      readonly TYPE_SCROLL_SENSITIVE: int
      readonly CONCUR_READ_ONLY: int
      readonly CONCUR_UPDATABLE: int
      readonly HOLD_CURSORS_OVER_COMMIT: int
      readonly CLOSE_CURSORS_AT_COMMIT: int
      next(): boolean
      close(): void
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
      getAsciiStream(arg0: number | java.lang.Integer): java.io.InputStream
      getUnicodeStream(arg0: number | java.lang.Integer): java.io.InputStream
      getBinaryStream(arg0: number | java.lang.Integer): java.io.InputStream
      getString(arg0: java.lang.String | string): java.lang.String
      getBoolean(arg0: java.lang.String | string): boolean
      getByte(arg0: java.lang.String | string): number
      getShort(arg0: java.lang.String | string): number
      getInt(arg0: java.lang.String | string): number
      getLong(arg0: java.lang.String | string): number
      getFloat(arg0: java.lang.String | string): number
      getDouble(arg0: java.lang.String | string): number
      getBigDecimal(arg0: java.lang.String | string, arg1: number | java.lang.Integer): java.math.BigDecimal
      getBytes(arg0: java.lang.String | string): number[]
      getDate(arg0: java.lang.String | string): java.sql.Date
      getTime(arg0: java.lang.String | string): java.sql.Time
      getTimestamp(arg0: java.lang.String | string): java.sql.Timestamp
      getAsciiStream(arg0: java.lang.String | string): java.io.InputStream
      getUnicodeStream(arg0: java.lang.String | string): java.io.InputStream
      getBinaryStream(arg0: java.lang.String | string): java.io.InputStream
      getWarnings(): java.sql.SQLWarning
      clearWarnings(): void
      getCursorName(): java.lang.String
      getMetaData(): java.sql.ResultSetMetaData
      getObject(arg0: number | java.lang.Integer): java.lang.Object
      getObject(arg0: java.lang.String | string): java.lang.Object
      findColumn(arg0: java.lang.String | string): number
      getCharacterStream(arg0: number | java.lang.Integer): java.io.Reader
      getCharacterStream(arg0: java.lang.String | string): java.io.Reader
      getBigDecimal(arg0: number | java.lang.Integer): java.math.BigDecimal
      getBigDecimal(arg0: java.lang.String | string): java.math.BigDecimal
      isBeforeFirst(): boolean
      isAfterLast(): boolean
      isFirst(): boolean
      isLast(): boolean
      beforeFirst(): void
      afterLast(): void
      first(): boolean
      last(): boolean
      getRow(): number
      absolute(arg0: number | java.lang.Integer): boolean
      relative(arg0: number | java.lang.Integer): boolean
      previous(): boolean
      setFetchDirection(arg0: number | java.lang.Integer): void
      getFetchDirection(): number
      setFetchSize(arg0: number | java.lang.Integer): void
      getFetchSize(): number
      getType(): number
      getConcurrency(): number
      rowUpdated(): boolean
      rowInserted(): boolean
      rowDeleted(): boolean
      updateNull(arg0: number | java.lang.Integer): void
      updateBoolean(arg0: number | java.lang.Integer, arg1: boolean | java.lang.Boolean): void
      updateByte(arg0: number | java.lang.Integer, arg1: number | java.lang.Byte): void
      updateShort(arg0: number | java.lang.Integer, arg1: number | java.lang.Short): void
      updateInt(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      updateLong(arg0: number | java.lang.Integer, arg1: number | java.lang.Long): void
      updateFloat(arg0: number | java.lang.Integer, arg1: number | java.lang.Float): void
      updateDouble(arg0: number | java.lang.Integer, arg1: number | java.lang.Double): void
      updateBigDecimal(arg0: number | java.lang.Integer, arg1: java.math.BigDecimal): void
      updateString(arg0: number | java.lang.Integer, arg1: java.lang.String | string): void
      updateBytes(arg0: number | java.lang.Integer, arg1: number[] | java.lang.Byte[]): void
      updateDate(arg0: number | java.lang.Integer, arg1: java.sql.Date): void
      updateTime(arg0: number | java.lang.Integer, arg1: java.sql.Time): void
      updateTimestamp(arg0: number | java.lang.Integer, arg1: java.sql.Timestamp): void
      updateAsciiStream(
        arg0: number | java.lang.Integer,
        arg1: java.io.InputStream,
        arg2: number | java.lang.Integer
      ): void
      updateBinaryStream(
        arg0: number | java.lang.Integer,
        arg1: java.io.InputStream,
        arg2: number | java.lang.Integer
      ): void
      updateCharacterStream(
        arg0: number | java.lang.Integer,
        arg1: java.io.Reader,
        arg2: number | java.lang.Integer
      ): void
      updateObject(
        arg0: number | java.lang.Integer,
        arg1: java.lang.Object | any,
        arg2: number | java.lang.Integer
      ): void
      updateObject(arg0: number | java.lang.Integer, arg1: java.lang.Object | any): void
      updateNull(arg0: java.lang.String | string): void
      updateBoolean(arg0: java.lang.String | string, arg1: boolean | java.lang.Boolean): void
      updateByte(arg0: java.lang.String | string, arg1: number | java.lang.Byte): void
      updateShort(arg0: java.lang.String | string, arg1: number | java.lang.Short): void
      updateInt(arg0: java.lang.String | string, arg1: number | java.lang.Integer): void
      updateLong(arg0: java.lang.String | string, arg1: number | java.lang.Long): void
      updateFloat(arg0: java.lang.String | string, arg1: number | java.lang.Float): void
      updateDouble(arg0: java.lang.String | string, arg1: number | java.lang.Double): void
      updateBigDecimal(arg0: java.lang.String | string, arg1: java.math.BigDecimal): void
      updateString(arg0: java.lang.String | string, arg1: java.lang.String | string): void
      updateBytes(arg0: java.lang.String | string, arg1: number[] | java.lang.Byte[]): void
      updateDate(arg0: java.lang.String | string, arg1: java.sql.Date): void
      updateTime(arg0: java.lang.String | string, arg1: java.sql.Time): void
      updateTimestamp(arg0: java.lang.String | string, arg1: java.sql.Timestamp): void
      updateAsciiStream(
        arg0: java.lang.String | string,
        arg1: java.io.InputStream,
        arg2: number | java.lang.Integer
      ): void
      updateBinaryStream(
        arg0: java.lang.String | string,
        arg1: java.io.InputStream,
        arg2: number | java.lang.Integer
      ): void
      updateCharacterStream(
        arg0: java.lang.String | string,
        arg1: java.io.Reader,
        arg2: number | java.lang.Integer
      ): void
      updateObject(
        arg0: java.lang.String | string,
        arg1: java.lang.Object | any,
        arg2: number | java.lang.Integer
      ): void
      updateObject(arg0: java.lang.String | string, arg1: java.lang.Object | any): void
      insertRow(): void
      updateRow(): void
      deleteRow(): void
      refreshRow(): void
      cancelRowUpdates(): void
      moveToInsertRow(): void
      moveToCurrentRow(): void
      getStatement(): java.sql.Statement
      getObject(
        arg0: number | java.lang.Integer,
        arg1: java.util.Map<java.lang.String, java.lang.Class<unknown>>
      ): java.lang.Object
      getRef(arg0: number | java.lang.Integer): java.sql.Ref
      getBlob(arg0: number | java.lang.Integer): java.sql.Blob
      getClob(arg0: number | java.lang.Integer): java.sql.Clob
      getArray(arg0: number | java.lang.Integer): java.sql.Array
      getObject(
        arg0: java.lang.String | string,
        arg1: java.util.Map<java.lang.String, java.lang.Class<unknown>>
      ): java.lang.Object
      getRef(arg0: java.lang.String | string): java.sql.Ref
      getBlob(arg0: java.lang.String | string): java.sql.Blob
      getClob(arg0: java.lang.String | string): java.sql.Clob
      getArray(arg0: java.lang.String | string): java.sql.Array
      getDate(arg0: number | java.lang.Integer, arg1: java.util.Calendar): java.sql.Date
      getDate(arg0: java.lang.String | string, arg1: java.util.Calendar): java.sql.Date
      getTime(arg0: number | java.lang.Integer, arg1: java.util.Calendar): java.sql.Time
      getTime(arg0: java.lang.String | string, arg1: java.util.Calendar): java.sql.Time
      getTimestamp(arg0: number | java.lang.Integer, arg1: java.util.Calendar): java.sql.Timestamp
      getTimestamp(arg0: java.lang.String | string, arg1: java.util.Calendar): java.sql.Timestamp
      getURL(arg0: number | java.lang.Integer): java.net.URL
      getURL(arg0: java.lang.String | string): java.net.URL
      updateRef(arg0: number | java.lang.Integer, arg1: java.sql.Ref): void
      updateRef(arg0: java.lang.String | string, arg1: java.sql.Ref): void
      updateBlob(arg0: number | java.lang.Integer, arg1: java.sql.Blob): void
      updateBlob(arg0: java.lang.String | string, arg1: java.sql.Blob): void
      updateClob(arg0: number | java.lang.Integer, arg1: java.sql.Clob): void
      updateClob(arg0: java.lang.String | string, arg1: java.sql.Clob): void
      updateArray(arg0: number | java.lang.Integer, arg1: java.sql.Array): void
      updateArray(arg0: java.lang.String | string, arg1: java.sql.Array): void
      getRowId(arg0: number | java.lang.Integer): java.sql.RowId
      getRowId(arg0: java.lang.String | string): java.sql.RowId
      updateRowId(arg0: number | java.lang.Integer, arg1: java.sql.RowId): void
      updateRowId(arg0: java.lang.String | string, arg1: java.sql.RowId): void
      getHoldability(): number
      isClosed(): boolean
      updateNString(arg0: number | java.lang.Integer, arg1: java.lang.String | string): void
      updateNString(arg0: java.lang.String | string, arg1: java.lang.String | string): void
      updateNClob(arg0: number | java.lang.Integer, arg1: java.sql.NClob): void
      updateNClob(arg0: java.lang.String | string, arg1: java.sql.NClob): void
      getNClob(arg0: number | java.lang.Integer): java.sql.NClob
      getNClob(arg0: java.lang.String | string): java.sql.NClob
      getSQLXML(arg0: number | java.lang.Integer): java.sql.SQLXML
      getSQLXML(arg0: java.lang.String | string): java.sql.SQLXML
      updateSQLXML(arg0: number | java.lang.Integer, arg1: java.sql.SQLXML): void
      updateSQLXML(arg0: java.lang.String | string, arg1: java.sql.SQLXML): void
      getNString(arg0: number | java.lang.Integer): java.lang.String
      getNString(arg0: java.lang.String | string): java.lang.String
      getNCharacterStream(arg0: number | java.lang.Integer): java.io.Reader
      getNCharacterStream(arg0: java.lang.String | string): java.io.Reader
      updateNCharacterStream(
        arg0: number | java.lang.Integer,
        arg1: java.io.Reader,
        arg2: number | java.lang.Long
      ): void
      updateNCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: number | java.lang.Long): void
      updateAsciiStream(
        arg0: number | java.lang.Integer,
        arg1: java.io.InputStream,
        arg2: number | java.lang.Long
      ): void
      updateBinaryStream(
        arg0: number | java.lang.Integer,
        arg1: java.io.InputStream,
        arg2: number | java.lang.Long
      ): void
      updateCharacterStream(arg0: number | java.lang.Integer, arg1: java.io.Reader, arg2: number | java.lang.Long): void
      updateAsciiStream(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: number | java.lang.Long): void
      updateBinaryStream(
        arg0: java.lang.String | string,
        arg1: java.io.InputStream,
        arg2: number | java.lang.Long
      ): void
      updateCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: number | java.lang.Long): void
      updateBlob(arg0: number | java.lang.Integer, arg1: java.io.InputStream, arg2: number | java.lang.Long): void
      updateBlob(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: number | java.lang.Long): void
      updateClob(arg0: number | java.lang.Integer, arg1: java.io.Reader, arg2: number | java.lang.Long): void
      updateClob(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: number | java.lang.Long): void
      updateNClob(arg0: number | java.lang.Integer, arg1: java.io.Reader, arg2: number | java.lang.Long): void
      updateNClob(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: number | java.lang.Long): void
      updateNCharacterStream(arg0: number | java.lang.Integer, arg1: java.io.Reader): void
      updateNCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader): void
      updateAsciiStream(arg0: number | java.lang.Integer, arg1: java.io.InputStream): void
      updateBinaryStream(arg0: number | java.lang.Integer, arg1: java.io.InputStream): void
      updateCharacterStream(arg0: number | java.lang.Integer, arg1: java.io.Reader): void
      updateAsciiStream(arg0: java.lang.String | string, arg1: java.io.InputStream): void
      updateBinaryStream(arg0: java.lang.String | string, arg1: java.io.InputStream): void
      updateCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader): void
      updateBlob(arg0: number | java.lang.Integer, arg1: java.io.InputStream): void
      updateBlob(arg0: java.lang.String | string, arg1: java.io.InputStream): void
      updateClob(arg0: number | java.lang.Integer, arg1: java.io.Reader): void
      updateClob(arg0: java.lang.String | string, arg1: java.io.Reader): void
      updateNClob(arg0: number | java.lang.Integer, arg1: java.io.Reader): void
      updateNClob(arg0: java.lang.String | string, arg1: java.io.Reader): void
      getObject<T>(arg0: number | java.lang.Integer, arg1: java.lang.Class<T>): T
      getObject<T>(arg0: java.lang.String | string, arg1: java.lang.Class<T>): T
      updateObject(
        arg0: number | java.lang.Integer,
        arg1: java.lang.Object | any,
        arg2: java.sql.SQLType,
        arg3: number | java.lang.Integer
      ): void
      updateObject(
        arg0: java.lang.String | string,
        arg1: java.lang.Object | any,
        arg2: java.sql.SQLType,
        arg3: number | java.lang.Integer
      ): void
      updateObject(arg0: number | java.lang.Integer, arg1: java.lang.Object | any, arg2: java.sql.SQLType): void
      updateObject(arg0: java.lang.String | string, arg1: java.lang.Object | any, arg2: java.sql.SQLType): void
    }
  }
}
