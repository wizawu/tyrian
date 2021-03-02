declare namespace javax {
  namespace sql {
    namespace rowset {

      abstract class BaseRowSet implements java.io.Serializable, java.lang.Cloneable {
        public static readonly UNICODE_STREAM_PARAM: int
        public static readonly BINARY_STREAM_PARAM: int
        public static readonly ASCII_STREAM_PARAM: int
        protected binaryStream: java.io.InputStream
        protected unicodeStream: java.io.InputStream
        protected asciiStream: java.io.InputStream
        protected charStream: java.io.Reader
        static readonly serialVersionUID: long
        public constructor()
        protected initParams(): void
        public addRowSetListener(arg0: javax.sql.RowSetListener): void
        public removeRowSetListener(arg0: javax.sql.RowSetListener): void
        protected notifyCursorMoved(): void
        protected notifyRowChanged(): void
        protected notifyRowSetChanged(): void
        public getCommand(): java.lang.String
        public setCommand(arg0: java.lang.String): void
        public getUrl(): java.lang.String
        public setUrl(arg0: java.lang.String): void
        public getDataSourceName(): java.lang.String
        public setDataSourceName(arg0: java.lang.String): void
        public getUsername(): java.lang.String
        public setUsername(arg0: java.lang.String): void
        public getPassword(): java.lang.String
        public setPassword(arg0: java.lang.String): void
        public setType(arg0: int): void
        public getType(): int
        public setConcurrency(arg0: int): void
        public isReadOnly(): boolean
        public setReadOnly(arg0: boolean): void
        public getTransactionIsolation(): int
        public setTransactionIsolation(arg0: int): void
        public getTypeMap(): java.util.Map<java.lang.String,java.lang.Class<unknown>>
        public setTypeMap(arg0: java.util.Map<java.lang.String,java.lang.Class<unknown>>): void
        public getMaxFieldSize(): int
        public setMaxFieldSize(arg0: int): void
        public getMaxRows(): int
        public setMaxRows(arg0: int): void
        public setEscapeProcessing(arg0: boolean): void
        public getQueryTimeout(): int
        public setQueryTimeout(arg0: int): void
        public getShowDeleted(): boolean
        public setShowDeleted(arg0: boolean): void
        public getEscapeProcessing(): boolean
        public setFetchDirection(arg0: int): void
        public getFetchDirection(): int
        public setFetchSize(arg0: int): void
        public getFetchSize(): int
        public getConcurrency(): int
        public setNull(arg0: int, arg1: int): void
        public setNull(arg0: int, arg1: int, arg2: java.lang.String): void
        public setBoolean(arg0: int, arg1: boolean): void
        public setByte(arg0: int, arg1: byte): void
        public setShort(arg0: int, arg1: short): void
        public setInt(arg0: int, arg1: int): void
        public setLong(arg0: int, arg1: long): void
        public setFloat(arg0: int, arg1: float): void
        public setDouble(arg0: int, arg1: double): void
        public setBigDecimal(arg0: int, arg1: java.math.BigDecimal): void
        public setString(arg0: int, arg1: java.lang.String): void
        public setBytes(arg0: int, arg1: byte[]): void
        public setDate(arg0: int, arg1: java.sql.Date): void
        public setTime(arg0: int, arg1: java.sql.Time): void
        public setTimestamp(arg0: int, arg1: java.sql.Timestamp): void
        public setAsciiStream(arg0: int, arg1: java.io.InputStream, arg2: int): void
        public setAsciiStream(arg0: int, arg1: java.io.InputStream): void
        public setBinaryStream(arg0: int, arg1: java.io.InputStream, arg2: int): void
        public setBinaryStream(arg0: int, arg1: java.io.InputStream): void
        public setUnicodeStream(arg0: int, arg1: java.io.InputStream, arg2: int): void
        public setCharacterStream(arg0: int, arg1: java.io.Reader, arg2: int): void
        public setCharacterStream(arg0: int, arg1: java.io.Reader): void
        public setObject(arg0: int, arg1: java.lang.Object, arg2: int, arg3: int): void
        public setObject(arg0: int, arg1: java.lang.Object, arg2: int): void
        public setObject(arg0: int, arg1: java.lang.Object): void
        public setRef(arg0: int, arg1: java.sql.Ref): void
        public setBlob(arg0: int, arg1: java.sql.Blob): void
        public setClob(arg0: int, arg1: java.sql.Clob): void
        public setArray(arg0: int, arg1: java.sql.Array): void
        public setDate(arg0: int, arg1: java.sql.Date, arg2: java.util.Calendar): void
        public setTime(arg0: int, arg1: java.sql.Time, arg2: java.util.Calendar): void
        public setTimestamp(arg0: int, arg1: java.sql.Timestamp, arg2: java.util.Calendar): void
        public clearParameters(): void
        public getParams(): java.lang.Object[]
        public setNull(arg0: java.lang.String, arg1: int): void
        public setNull(arg0: java.lang.String, arg1: int, arg2: java.lang.String): void
        public setBoolean(arg0: java.lang.String, arg1: boolean): void
        public setByte(arg0: java.lang.String, arg1: byte): void
        public setShort(arg0: java.lang.String, arg1: short): void
        public setInt(arg0: java.lang.String, arg1: int): void
        public setLong(arg0: java.lang.String, arg1: long): void
        public setFloat(arg0: java.lang.String, arg1: float): void
        public setDouble(arg0: java.lang.String, arg1: double): void
        public setBigDecimal(arg0: java.lang.String, arg1: java.math.BigDecimal): void
        public setString(arg0: java.lang.String, arg1: java.lang.String): void
        public setBytes(arg0: java.lang.String, arg1: byte[]): void
        public setTimestamp(arg0: java.lang.String, arg1: java.sql.Timestamp): void
        public setAsciiStream(arg0: java.lang.String, arg1: java.io.InputStream, arg2: int): void
        public setBinaryStream(arg0: java.lang.String, arg1: java.io.InputStream, arg2: int): void
        public setCharacterStream(arg0: java.lang.String, arg1: java.io.Reader, arg2: int): void
        public setAsciiStream(arg0: java.lang.String, arg1: java.io.InputStream): void
        public setBinaryStream(arg0: java.lang.String, arg1: java.io.InputStream): void
        public setCharacterStream(arg0: java.lang.String, arg1: java.io.Reader): void
        public setNCharacterStream(arg0: int, arg1: java.io.Reader): void
        public setObject(arg0: java.lang.String, arg1: java.lang.Object, arg2: int, arg3: int): void
        public setObject(arg0: java.lang.String, arg1: java.lang.Object, arg2: int): void
        public setObject(arg0: java.lang.String, arg1: java.lang.Object): void
        public setBlob(arg0: int, arg1: java.io.InputStream, arg2: long): void
        public setBlob(arg0: int, arg1: java.io.InputStream): void
        public setBlob(arg0: java.lang.String, arg1: java.io.InputStream, arg2: long): void
        public setBlob(arg0: java.lang.String, arg1: java.sql.Blob): void
        public setBlob(arg0: java.lang.String, arg1: java.io.InputStream): void
        public setClob(arg0: int, arg1: java.io.Reader, arg2: long): void
        public setClob(arg0: int, arg1: java.io.Reader): void
        public setClob(arg0: java.lang.String, arg1: java.io.Reader, arg2: long): void
        public setClob(arg0: java.lang.String, arg1: java.sql.Clob): void
        public setClob(arg0: java.lang.String, arg1: java.io.Reader): void
        public setDate(arg0: java.lang.String, arg1: java.sql.Date): void
        public setDate(arg0: java.lang.String, arg1: java.sql.Date, arg2: java.util.Calendar): void
        public setTime(arg0: java.lang.String, arg1: java.sql.Time): void
        public setTime(arg0: java.lang.String, arg1: java.sql.Time, arg2: java.util.Calendar): void
        public setTimestamp(arg0: java.lang.String, arg1: java.sql.Timestamp, arg2: java.util.Calendar): void
        public setSQLXML(arg0: int, arg1: java.sql.SQLXML): void
        public setSQLXML(arg0: java.lang.String, arg1: java.sql.SQLXML): void
        public setRowId(arg0: int, arg1: java.sql.RowId): void
        public setRowId(arg0: java.lang.String, arg1: java.sql.RowId): void
        public setNString(arg0: int, arg1: java.lang.String): void
        public setNString(arg0: java.lang.String, arg1: java.lang.String): void
        public setNCharacterStream(arg0: int, arg1: java.io.Reader, arg2: long): void
        public setNCharacterStream(arg0: java.lang.String, arg1: java.io.Reader, arg2: long): void
        public setNCharacterStream(arg0: java.lang.String, arg1: java.io.Reader): void
        public setNClob(arg0: java.lang.String, arg1: java.sql.NClob): void
        public setNClob(arg0: java.lang.String, arg1: java.io.Reader, arg2: long): void
        public setNClob(arg0: java.lang.String, arg1: java.io.Reader): void
        public setNClob(arg0: int, arg1: java.io.Reader, arg2: long): void
        public setNClob(arg0: int, arg1: java.sql.NClob): void
        public setNClob(arg0: int, arg1: java.io.Reader): void
        public setURL(arg0: int, arg1: java.net.URL): void
      }

    }
  }
}
