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
        public setCommand(arg0: java.lang.String | string): void
        public getUrl(): java.lang.String
        public setUrl(arg0: java.lang.String | string): void
        public getDataSourceName(): java.lang.String
        public setDataSourceName(arg0: java.lang.String | string): void
        public getUsername(): java.lang.String
        public setUsername(arg0: java.lang.String | string): void
        public getPassword(): java.lang.String
        public setPassword(arg0: java.lang.String | string): void
        public setType(arg0: number | java.lang.Integer): void
        public getType(): number
        public setConcurrency(arg0: number | java.lang.Integer): void
        public isReadOnly(): boolean
        public setReadOnly(arg0: boolean | java.lang.Boolean): void
        public getTransactionIsolation(): number
        public setTransactionIsolation(arg0: number | java.lang.Integer): void
        public getTypeMap(): java.util.Map<java.lang.String,java.lang.Class<unknown>>
        public setTypeMap(arg0: java.util.Map<java.lang.String,java.lang.Class<unknown>>): void
        public getMaxFieldSize(): number
        public setMaxFieldSize(arg0: number | java.lang.Integer): void
        public getMaxRows(): number
        public setMaxRows(arg0: number | java.lang.Integer): void
        public setEscapeProcessing(arg0: boolean | java.lang.Boolean): void
        public getQueryTimeout(): number
        public setQueryTimeout(arg0: number | java.lang.Integer): void
        public getShowDeleted(): boolean
        public setShowDeleted(arg0: boolean | java.lang.Boolean): void
        public getEscapeProcessing(): boolean
        public setFetchDirection(arg0: number | java.lang.Integer): void
        public getFetchDirection(): number
        public setFetchSize(arg0: number | java.lang.Integer): void
        public getFetchSize(): number
        public getConcurrency(): number
        public setNull(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
        public setNull(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: java.lang.String | string): void
        public setBoolean(arg0: number | java.lang.Integer, arg1: boolean | java.lang.Boolean): void
        public setByte(arg0: number | java.lang.Integer, arg1: number | java.lang.Byte): void
        public setShort(arg0: number | java.lang.Integer, arg1: number | java.lang.Short): void
        public setInt(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
        public setLong(arg0: number | java.lang.Integer, arg1: number | java.lang.Long): void
        public setFloat(arg0: number | java.lang.Integer, arg1: number | java.lang.Float): void
        public setDouble(arg0: number | java.lang.Integer, arg1: number | java.lang.Double): void
        public setBigDecimal(arg0: number | java.lang.Integer, arg1: java.math.BigDecimal): void
        public setString(arg0: number | java.lang.Integer, arg1: java.lang.String | string): void
        public setBytes(arg0: number | java.lang.Integer, arg1: number[] | java.lang.Byte[]): void
        public setDate(arg0: number | java.lang.Integer, arg1: java.sql.Date): void
        public setTime(arg0: number | java.lang.Integer, arg1: java.sql.Time): void
        public setTimestamp(arg0: number | java.lang.Integer, arg1: java.sql.Timestamp): void
        public setAsciiStream(arg0: number | java.lang.Integer, arg1: java.io.InputStream, arg2: number | java.lang.Integer): void
        public setAsciiStream(arg0: number | java.lang.Integer, arg1: java.io.InputStream): void
        public setBinaryStream(arg0: number | java.lang.Integer, arg1: java.io.InputStream, arg2: number | java.lang.Integer): void
        public setBinaryStream(arg0: number | java.lang.Integer, arg1: java.io.InputStream): void
        public setUnicodeStream(arg0: number | java.lang.Integer, arg1: java.io.InputStream, arg2: number | java.lang.Integer): void
        public setCharacterStream(arg0: number | java.lang.Integer, arg1: java.io.Reader, arg2: number | java.lang.Integer): void
        public setCharacterStream(arg0: number | java.lang.Integer, arg1: java.io.Reader): void
        public setObject(arg0: number | java.lang.Integer, arg1: java.lang.Object | any, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): void
        public setObject(arg0: number | java.lang.Integer, arg1: java.lang.Object | any, arg2: number | java.lang.Integer): void
        public setObject(arg0: number | java.lang.Integer, arg1: java.lang.Object | any): void
        public setRef(arg0: number | java.lang.Integer, arg1: java.sql.Ref): void
        public setBlob(arg0: number | java.lang.Integer, arg1: java.sql.Blob): void
        public setClob(arg0: number | java.lang.Integer, arg1: java.sql.Clob): void
        public setArray(arg0: number | java.lang.Integer, arg1: java.sql.Array): void
        public setDate(arg0: number | java.lang.Integer, arg1: java.sql.Date, arg2: java.util.Calendar): void
        public setTime(arg0: number | java.lang.Integer, arg1: java.sql.Time, arg2: java.util.Calendar): void
        public setTimestamp(arg0: number | java.lang.Integer, arg1: java.sql.Timestamp, arg2: java.util.Calendar): void
        public clearParameters(): void
        public getParams(): java.lang.Object[]
        public setNull(arg0: java.lang.String | string, arg1: number | java.lang.Integer): void
        public setNull(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: java.lang.String | string): void
        public setBoolean(arg0: java.lang.String | string, arg1: boolean | java.lang.Boolean): void
        public setByte(arg0: java.lang.String | string, arg1: number | java.lang.Byte): void
        public setShort(arg0: java.lang.String | string, arg1: number | java.lang.Short): void
        public setInt(arg0: java.lang.String | string, arg1: number | java.lang.Integer): void
        public setLong(arg0: java.lang.String | string, arg1: number | java.lang.Long): void
        public setFloat(arg0: java.lang.String | string, arg1: number | java.lang.Float): void
        public setDouble(arg0: java.lang.String | string, arg1: number | java.lang.Double): void
        public setBigDecimal(arg0: java.lang.String | string, arg1: java.math.BigDecimal): void
        public setString(arg0: java.lang.String | string, arg1: java.lang.String | string): void
        public setBytes(arg0: java.lang.String | string, arg1: number[] | java.lang.Byte[]): void
        public setTimestamp(arg0: java.lang.String | string, arg1: java.sql.Timestamp): void
        public setAsciiStream(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: number | java.lang.Integer): void
        public setBinaryStream(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: number | java.lang.Integer): void
        public setCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: number | java.lang.Integer): void
        public setAsciiStream(arg0: java.lang.String | string, arg1: java.io.InputStream): void
        public setBinaryStream(arg0: java.lang.String | string, arg1: java.io.InputStream): void
        public setCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader): void
        public setNCharacterStream(arg0: number | java.lang.Integer, arg1: java.io.Reader): void
        public setObject(arg0: java.lang.String | string, arg1: java.lang.Object | any, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): void
        public setObject(arg0: java.lang.String | string, arg1: java.lang.Object | any, arg2: number | java.lang.Integer): void
        public setObject(arg0: java.lang.String | string, arg1: java.lang.Object | any): void
        public setBlob(arg0: number | java.lang.Integer, arg1: java.io.InputStream, arg2: number | java.lang.Long): void
        public setBlob(arg0: number | java.lang.Integer, arg1: java.io.InputStream): void
        public setBlob(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: number | java.lang.Long): void
        public setBlob(arg0: java.lang.String | string, arg1: java.sql.Blob): void
        public setBlob(arg0: java.lang.String | string, arg1: java.io.InputStream): void
        public setClob(arg0: number | java.lang.Integer, arg1: java.io.Reader, arg2: number | java.lang.Long): void
        public setClob(arg0: number | java.lang.Integer, arg1: java.io.Reader): void
        public setClob(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: number | java.lang.Long): void
        public setClob(arg0: java.lang.String | string, arg1: java.sql.Clob): void
        public setClob(arg0: java.lang.String | string, arg1: java.io.Reader): void
        public setDate(arg0: java.lang.String | string, arg1: java.sql.Date): void
        public setDate(arg0: java.lang.String | string, arg1: java.sql.Date, arg2: java.util.Calendar): void
        public setTime(arg0: java.lang.String | string, arg1: java.sql.Time): void
        public setTime(arg0: java.lang.String | string, arg1: java.sql.Time, arg2: java.util.Calendar): void
        public setTimestamp(arg0: java.lang.String | string, arg1: java.sql.Timestamp, arg2: java.util.Calendar): void
        public setSQLXML(arg0: number | java.lang.Integer, arg1: java.sql.SQLXML): void
        public setSQLXML(arg0: java.lang.String | string, arg1: java.sql.SQLXML): void
        public setRowId(arg0: number | java.lang.Integer, arg1: java.sql.RowId): void
        public setRowId(arg0: java.lang.String | string, arg1: java.sql.RowId): void
        public setNString(arg0: number | java.lang.Integer, arg1: java.lang.String | string): void
        public setNString(arg0: java.lang.String | string, arg1: java.lang.String | string): void
        public setNCharacterStream(arg0: number | java.lang.Integer, arg1: java.io.Reader, arg2: number | java.lang.Long): void
        public setNCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: number | java.lang.Long): void
        public setNCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader): void
        public setNClob(arg0: java.lang.String | string, arg1: java.sql.NClob): void
        public setNClob(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: number | java.lang.Long): void
        public setNClob(arg0: java.lang.String | string, arg1: java.io.Reader): void
        public setNClob(arg0: number | java.lang.Integer, arg1: java.io.Reader, arg2: number | java.lang.Long): void
        public setNClob(arg0: number | java.lang.Integer, arg1: java.sql.NClob): void
        public setNClob(arg0: number | java.lang.Integer, arg1: java.io.Reader): void
        public setURL(arg0: number | java.lang.Integer, arg1: java.net.URL): void
      }

    }
  }
}
