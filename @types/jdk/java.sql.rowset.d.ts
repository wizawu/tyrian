declare namespace com {
    namespace sun {
        namespace rowset {
            class CachedRowSetImpl extends javax.sql.rowset.BaseRowSet implements javax.sql.RowSet , javax.sql.RowSetInternal , java.io.Serializable , java.lang.Cloneable , javax.sql.rowset.CachedRowSet {
                protected resBundle: com.sun.rowset.JdbcRowSetResourceBundle
                public constructor()
                public constructor(arg0: java.util.Hashtable)
                public setCommand(arg0: java.lang.String | string): void
                public populate(arg0: java.sql.ResultSet): void
                public execute(arg0: java.sql.Connection): void
                public acceptChanges(): void
                public acceptChanges(arg0: java.sql.Connection): void
                public restoreOriginal(): void
                public release(): void
                public undoDelete(): void
                public undoInsert(): void
                public undoUpdate(): void
                public createShared(): javax.sql.RowSet
                protected clone(): java.lang.Object
                public createCopy(): javax.sql.rowset.CachedRowSet
                public createCopySchema(): javax.sql.rowset.CachedRowSet
                public createCopyNoConstraints(): javax.sql.rowset.CachedRowSet
                public toCollection(): java.util.Collection<any>
                public toCollection(arg0: int): java.util.Collection<any>
                public toCollection(arg0: java.lang.String | string): java.util.Collection<any>
                public getSyncProvider(): javax.sql.rowset.spi.SyncProvider
                public setSyncProvider(arg0: java.lang.String | string): void
                public execute(): void
                public next(): boolean
                protected internalNext(): boolean
                public close(): void
                public wasNull(): boolean
                protected getCurrentRow(): com.sun.rowset.internal.BaseRow
                protected removeCurrentRow(): void
                public getString(arg0: int): string
                public getBoolean(arg0: int): boolean
                public getByte(arg0: int): byte
                public getShort(arg0: int): short
                public getInt(arg0: int): int
                public getLong(arg0: int): long
                public getFloat(arg0: int): float
                public getDouble(arg0: int): double
                public getBigDecimal(arg0: int, arg1: int): java.math.BigDecimal
                public getBytes(arg0: int): byte[]
                public getDate(arg0: int): java.sql.Date
                public getTime(arg0: int): java.sql.Time
                public getTimestamp(arg0: int): java.sql.Timestamp
                public getAsciiStream(arg0: int): java.io.InputStream
                public getUnicodeStream(arg0: int): java.io.InputStream
                public getBinaryStream(arg0: int): java.io.InputStream
                public getString(arg0: java.lang.String | string): string
                public getBoolean(arg0: java.lang.String | string): boolean
                public getByte(arg0: java.lang.String | string): byte
                public getShort(arg0: java.lang.String | string): short
                public getInt(arg0: java.lang.String | string): int
                public getLong(arg0: java.lang.String | string): long
                public getFloat(arg0: java.lang.String | string): float
                public getDouble(arg0: java.lang.String | string): double
                public getBigDecimal(arg0: java.lang.String | string, arg1: int): java.math.BigDecimal
                public getBytes(arg0: java.lang.String | string): byte[]
                public getDate(arg0: java.lang.String | string): java.sql.Date
                public getTime(arg0: java.lang.String | string): java.sql.Time
                public getTimestamp(arg0: java.lang.String | string): java.sql.Timestamp
                public getAsciiStream(arg0: java.lang.String | string): java.io.InputStream
                public getUnicodeStream(arg0: java.lang.String | string): java.io.InputStream
                public getBinaryStream(arg0: java.lang.String | string): java.io.InputStream
                public getWarnings(): java.sql.SQLWarning
                public clearWarnings(): void
                public getCursorName(): string
                public getMetaData(): java.sql.ResultSetMetaData
                public getObject(arg0: int): java.lang.Object
                public getObject(arg0: java.lang.String | string): java.lang.Object
                public findColumn(arg0: java.lang.String | string): int
                public getCharacterStream(arg0: int): java.io.Reader
                public getCharacterStream(arg0: java.lang.String | string): java.io.Reader
                public getBigDecimal(arg0: int): java.math.BigDecimal
                public getBigDecimal(arg0: java.lang.String | string): java.math.BigDecimal
                public size(): int
                public isBeforeFirst(): boolean
                public isAfterLast(): boolean
                public isFirst(): boolean
                public isLast(): boolean
                public beforeFirst(): void
                public afterLast(): void
                public first(): boolean
                protected internalFirst(): boolean
                public last(): boolean
                protected internalLast(): boolean
                public getRow(): int
                public absolute(arg0: int): boolean
                public relative(arg0: int): boolean
                public previous(): boolean
                protected internalPrevious(): boolean
                public rowUpdated(): boolean
                public columnUpdated(arg0: int): boolean
                public columnUpdated(arg0: java.lang.String | string): boolean
                public rowInserted(): boolean
                public rowDeleted(): boolean
                public updateNull(arg0: int): void
                public updateBoolean(arg0: int, arg1: boolean): void
                public updateByte(arg0: int, arg1: byte): void
                public updateShort(arg0: int, arg1: short): void
                public updateInt(arg0: int, arg1: int): void
                public updateLong(arg0: int, arg1: long): void
                public updateFloat(arg0: int, arg1: float): void
                public updateDouble(arg0: int, arg1: double): void
                public updateBigDecimal(arg0: int, arg1: java.math.BigDecimal): void
                public updateString(arg0: int, arg1: java.lang.String | string): void
                public updateBytes(arg0: int, arg1: byte[]): void
                public updateDate(arg0: int, arg1: java.sql.Date): void
                public updateTime(arg0: int, arg1: java.sql.Time): void
                public updateTimestamp(arg0: int, arg1: java.sql.Timestamp): void
                public updateAsciiStream(arg0: int, arg1: java.io.InputStream, arg2: int): void
                public updateBinaryStream(arg0: int, arg1: java.io.InputStream, arg2: int): void
                public updateCharacterStream(arg0: int, arg1: java.io.Reader, arg2: int): void
                public updateObject(arg0: int, arg1: java.lang.Object, arg2: int): void
                public updateObject(arg0: int, arg1: java.lang.Object): void
                public updateNull(arg0: java.lang.String | string): void
                public updateBoolean(arg0: java.lang.String | string, arg1: boolean): void
                public updateByte(arg0: java.lang.String | string, arg1: byte): void
                public updateShort(arg0: java.lang.String | string, arg1: short): void
                public updateInt(arg0: java.lang.String | string, arg1: int): void
                public updateLong(arg0: java.lang.String | string, arg1: long): void
                public updateFloat(arg0: java.lang.String | string, arg1: float): void
                public updateDouble(arg0: java.lang.String | string, arg1: double): void
                public updateBigDecimal(arg0: java.lang.String | string, arg1: java.math.BigDecimal): void
                public updateString(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                public updateBytes(arg0: java.lang.String | string, arg1: byte[]): void
                public updateDate(arg0: java.lang.String | string, arg1: java.sql.Date): void
                public updateTime(arg0: java.lang.String | string, arg1: java.sql.Time): void
                public updateTimestamp(arg0: java.lang.String | string, arg1: java.sql.Timestamp): void
                public updateAsciiStream(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: int): void
                public updateBinaryStream(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: int): void
                public updateCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: int): void
                public updateObject(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: int): void
                public updateObject(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public insertRow(): void
                public updateRow(): void
                public deleteRow(): void
                public refreshRow(): void
                public cancelRowUpdates(): void
                public moveToInsertRow(): void
                public moveToCurrentRow(): void
                public getStatement(): java.sql.Statement
                public getObject(arg0: int, arg1: java.util.Map<java.lang.String, java.lang.Class<any>>): java.lang.Object
                public getRef(arg0: int): java.sql.Ref
                public getBlob(arg0: int): java.sql.Blob
                public getClob(arg0: int): java.sql.Clob
                public getArray(arg0: int): java.sql.Array
                public getObject(arg0: java.lang.String | string, arg1: java.util.Map<java.lang.String, java.lang.Class<any>>): java.lang.Object
                public getRef(arg0: java.lang.String | string): java.sql.Ref
                public getBlob(arg0: java.lang.String | string): java.sql.Blob
                public getClob(arg0: java.lang.String | string): java.sql.Clob
                public getArray(arg0: java.lang.String | string): java.sql.Array
                public getDate(arg0: int, arg1: java.util.Calendar): java.sql.Date
                public getDate(arg0: java.lang.String | string, arg1: java.util.Calendar): java.sql.Date
                public getTime(arg0: int, arg1: java.util.Calendar): java.sql.Time
                public getTime(arg0: java.lang.String | string, arg1: java.util.Calendar): java.sql.Time
                public getTimestamp(arg0: int, arg1: java.util.Calendar): java.sql.Timestamp
                public getTimestamp(arg0: java.lang.String | string, arg1: java.util.Calendar): java.sql.Timestamp
                public getConnection(): java.sql.Connection
                public setMetaData(arg0: javax.sql.RowSetMetaData): void
                public getOriginal(): java.sql.ResultSet
                public getOriginalRow(): java.sql.ResultSet
                public setOriginalRow(): void
                public setOriginal(): void
                public getTableName(): string
                public setTableName(arg0: java.lang.String | string): void
                public getKeyColumns(): int[]
                public setKeyColumns(arg0: int[]): void
                public updateRef(arg0: int, arg1: java.sql.Ref): void
                public updateRef(arg0: java.lang.String | string, arg1: java.sql.Ref): void
                public updateClob(arg0: int, arg1: java.sql.Clob): void
                public updateClob(arg0: java.lang.String | string, arg1: java.sql.Clob): void
                public updateBlob(arg0: int, arg1: java.sql.Blob): void
                public updateBlob(arg0: java.lang.String | string, arg1: java.sql.Blob): void
                public updateArray(arg0: int, arg1: java.sql.Array): void
                public updateArray(arg0: java.lang.String | string, arg1: java.sql.Array): void
                public getURL(arg0: int): java.net.URL
                public getURL(arg0: java.lang.String | string): java.net.URL
                public getRowSetWarnings(): javax.sql.rowset.RowSetWarning
                public commit(): void
                public rollback(): void
                public rollback(arg0: java.sql.Savepoint): void
                public unsetMatchColumn(arg0: int[]): void
                public unsetMatchColumn(arg0: java.lang.String[]): void
                public getMatchColumnNames(): java.lang.String[]
                public getMatchColumnIndexes(): int[]
                public setMatchColumn(arg0: int[]): void
                public setMatchColumn(arg0: java.lang.String[]): void
                public setMatchColumn(arg0: int): void
                public setMatchColumn(arg0: java.lang.String | string): void
                public unsetMatchColumn(arg0: int): void
                public unsetMatchColumn(arg0: java.lang.String | string): void
                public rowSetPopulated(arg0: javax.sql.RowSetEvent, arg1: int): void
                public populate(arg0: java.sql.ResultSet, arg1: int): void
                public nextPage(): boolean
                public setPageSize(arg0: int): void
                public getPageSize(): int
                public previousPage(): boolean
                public setRowInserted(arg0: boolean): void
                public getSQLXML(arg0: int): java.sql.SQLXML
                public getSQLXML(arg0: java.lang.String | string): java.sql.SQLXML
                public getRowId(arg0: int): java.sql.RowId
                public getRowId(arg0: java.lang.String | string): java.sql.RowId
                public updateRowId(arg0: int, arg1: java.sql.RowId): void
                public updateRowId(arg0: java.lang.String | string, arg1: java.sql.RowId): void
                public getHoldability(): int
                public isClosed(): boolean
                public updateNString(arg0: int, arg1: java.lang.String | string): void
                public updateNString(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                public updateNClob(arg0: int, arg1: java.sql.NClob): void
                public updateNClob(arg0: java.lang.String | string, arg1: java.sql.NClob): void
                public getNClob(arg0: int): java.sql.NClob
                public getNClob(arg0: java.lang.String | string): java.sql.NClob
                public unwrap<T>(arg0: java.lang.Class<T>): T
                public isWrapperFor<T>(arg0: java.lang.Class<any>): boolean
                public setSQLXML<T>(arg0: int, arg1: java.sql.SQLXML): void
                public setSQLXML<T>(arg0: java.lang.String | string, arg1: java.sql.SQLXML): void
                public setRowId<T>(arg0: int, arg1: java.sql.RowId): void
                public setRowId<T>(arg0: java.lang.String | string, arg1: java.sql.RowId): void
                public setNCharacterStream<T>(arg0: int, arg1: java.io.Reader): void
                public setNClob<T>(arg0: java.lang.String | string, arg1: java.sql.NClob): void
                public getNCharacterStream<T>(arg0: int): java.io.Reader
                public getNCharacterStream<T>(arg0: java.lang.String | string): java.io.Reader
                public updateSQLXML<T>(arg0: int, arg1: java.sql.SQLXML): void
                public updateSQLXML<T>(arg0: java.lang.String | string, arg1: java.sql.SQLXML): void
                public getNString<T>(arg0: int): string
                public getNString<T>(arg0: java.lang.String | string): string
                public updateNCharacterStream<T>(arg0: int, arg1: java.io.Reader, arg2: long): void
                public updateNCharacterStream<T>(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: long): void
                public updateNCharacterStream<T>(arg0: int, arg1: java.io.Reader): void
                public updateNCharacterStream<T>(arg0: java.lang.String | string, arg1: java.io.Reader): void
                public updateBlob<T>(arg0: int, arg1: java.io.InputStream, arg2: long): void
                public updateBlob<T>(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: long): void
                public updateBlob<T>(arg0: int, arg1: java.io.InputStream): void
                public updateBlob<T>(arg0: java.lang.String | string, arg1: java.io.InputStream): void
                public updateClob<T>(arg0: int, arg1: java.io.Reader, arg2: long): void
                public updateClob<T>(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: long): void
                public updateClob<T>(arg0: int, arg1: java.io.Reader): void
                public updateClob<T>(arg0: java.lang.String | string, arg1: java.io.Reader): void
                public updateNClob<T>(arg0: int, arg1: java.io.Reader, arg2: long): void
                public updateNClob<T>(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: long): void
                public updateNClob<T>(arg0: int, arg1: java.io.Reader): void
                public updateNClob<T>(arg0: java.lang.String | string, arg1: java.io.Reader): void
                public updateAsciiStream<T>(arg0: int, arg1: java.io.InputStream, arg2: long): void
                public updateBinaryStream<T>(arg0: int, arg1: java.io.InputStream, arg2: long): void
                public updateCharacterStream<T>(arg0: int, arg1: java.io.Reader, arg2: long): void
                public updateCharacterStream<T>(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: long): void
                public updateAsciiStream<T>(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: long): void
                public updateBinaryStream<T>(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: long): void
                public updateBinaryStream<T>(arg0: int, arg1: java.io.InputStream): void
                public updateBinaryStream<T>(arg0: java.lang.String | string, arg1: java.io.InputStream): void
                public updateCharacterStream<T>(arg0: int, arg1: java.io.Reader): void
                public updateCharacterStream<T>(arg0: java.lang.String | string, arg1: java.io.Reader): void
                public updateAsciiStream<T>(arg0: int, arg1: java.io.InputStream): void
                public updateAsciiStream<T>(arg0: java.lang.String | string, arg1: java.io.InputStream): void
                public setURL<T>(arg0: int, arg1: java.net.URL): void
                public setNClob<T>(arg0: int, arg1: java.io.Reader): void
                public setNClob<T>(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: long): void
                public setNClob<T>(arg0: java.lang.String | string, arg1: java.io.Reader): void
                public setNClob<T>(arg0: int, arg1: java.io.Reader, arg2: long): void
                public setNClob<T>(arg0: int, arg1: java.sql.NClob): void
                public setNString<T>(arg0: int, arg1: java.lang.String | string): void
                public setNString<T>(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                public setNCharacterStream<T>(arg0: int, arg1: java.io.Reader, arg2: long): void
                public setNCharacterStream<T>(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: long): void
                public setNCharacterStream<T>(arg0: java.lang.String | string, arg1: java.io.Reader): void
                public setTimestamp<T>(arg0: java.lang.String | string, arg1: java.sql.Timestamp, arg2: java.util.Calendar): void
                public setClob<T>(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: long): void
                public setClob<T>(arg0: java.lang.String | string, arg1: java.sql.Clob): void
                public setClob<T>(arg0: java.lang.String | string, arg1: java.io.Reader): void
                public setDate<T>(arg0: java.lang.String | string, arg1: java.sql.Date): void
                public setDate<T>(arg0: java.lang.String | string, arg1: java.sql.Date, arg2: java.util.Calendar): void
                public setTime<T>(arg0: java.lang.String | string, arg1: java.sql.Time): void
                public setTime<T>(arg0: java.lang.String | string, arg1: java.sql.Time, arg2: java.util.Calendar): void
                public setClob<T>(arg0: int, arg1: java.io.Reader): void
                public setClob<T>(arg0: int, arg1: java.io.Reader, arg2: long): void
                public setBlob<T>(arg0: int, arg1: java.io.InputStream, arg2: long): void
                public setBlob<T>(arg0: int, arg1: java.io.InputStream): void
                public setBlob<T>(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: long): void
                public setBlob<T>(arg0: java.lang.String | string, arg1: java.sql.Blob): void
                public setBlob<T>(arg0: java.lang.String | string, arg1: java.io.InputStream): void
                public setObject<T>(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: int, arg3: int): void
                public setObject<T>(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: int): void
                public setObject<T>(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public setAsciiStream<T>(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: int): void
                public setBinaryStream<T>(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: int): void
                public setCharacterStream<T>(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: int): void
                public setAsciiStream<T>(arg0: java.lang.String | string, arg1: java.io.InputStream): void
                public setBinaryStream<T>(arg0: java.lang.String | string, arg1: java.io.InputStream): void
                public setCharacterStream<T>(arg0: java.lang.String | string, arg1: java.io.Reader): void
                public setBigDecimal<T>(arg0: java.lang.String | string, arg1: java.math.BigDecimal): void
                public setString<T>(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                public setBytes<T>(arg0: java.lang.String | string, arg1: byte[]): void
                public setTimestamp<T>(arg0: java.lang.String | string, arg1: java.sql.Timestamp): void
                public setNull<T>(arg0: java.lang.String | string, arg1: int): void
                public setNull<T>(arg0: java.lang.String | string, arg1: int, arg2: java.lang.String | string): void
                public setBoolean<T>(arg0: java.lang.String | string, arg1: boolean): void
                public setByte<T>(arg0: java.lang.String | string, arg1: byte): void
                public setShort<T>(arg0: java.lang.String | string, arg1: short): void
                public setInt<T>(arg0: java.lang.String | string, arg1: int): void
                public setLong<T>(arg0: java.lang.String | string, arg1: long): void
                public setFloat<T>(arg0: java.lang.String | string, arg1: float): void
                public setDouble<T>(arg0: java.lang.String | string, arg1: double): void
                public getObject<T>(arg0: int, arg1: java.lang.Class<T>): T
                public getObject<T>(arg0: java.lang.String | string, arg1: java.lang.Class<T>): T
                public static class: java.lang.Class<any>
            }
            class FilteredRowSetImpl extends com.sun.rowset.WebRowSetImpl implements java.io.Serializable , java.lang.Cloneable , javax.sql.rowset.FilteredRowSet {
                public constructor()
                public constructor(arg0: java.util.Hashtable)
                public setFilter(arg0: javax.sql.rowset.Predicate): void
                public getFilter(): javax.sql.rowset.Predicate
                protected internalNext(): boolean
                protected internalPrevious(): boolean
                protected internalFirst(): boolean
                protected internalLast(): boolean
                public relative(arg0: int): boolean
                public absolute(arg0: int): boolean
                public moveToInsertRow(): void
                public updateInt(arg0: int, arg1: int): void
                public updateInt(arg0: java.lang.String | string, arg1: int): void
                public updateBoolean(arg0: int, arg1: boolean): void
                public updateBoolean(arg0: java.lang.String | string, arg1: boolean): void
                public updateByte(arg0: int, arg1: byte): void
                public updateByte(arg0: java.lang.String | string, arg1: byte): void
                public updateShort(arg0: int, arg1: short): void
                public updateShort(arg0: java.lang.String | string, arg1: short): void
                public updateLong(arg0: int, arg1: long): void
                public updateLong(arg0: java.lang.String | string, arg1: long): void
                public updateFloat(arg0: int, arg1: float): void
                public updateFloat(arg0: java.lang.String | string, arg1: float): void
                public updateDouble(arg0: int, arg1: double): void
                public updateDouble(arg0: java.lang.String | string, arg1: double): void
                public updateBigDecimal(arg0: int, arg1: java.math.BigDecimal): void
                public updateBigDecimal(arg0: java.lang.String | string, arg1: java.math.BigDecimal): void
                public updateString(arg0: int, arg1: java.lang.String | string): void
                public updateString(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                public updateBytes(arg0: int, arg1: byte[]): void
                public updateBytes(arg0: java.lang.String | string, arg1: byte[]): void
                public updateDate(arg0: int, arg1: java.sql.Date): void
                public updateDate(arg0: java.lang.String | string, arg1: java.sql.Date): void
                public updateTime(arg0: int, arg1: java.sql.Time): void
                public updateTime(arg0: java.lang.String | string, arg1: java.sql.Time): void
                public updateTimestamp(arg0: int, arg1: java.sql.Timestamp): void
                public updateTimestamp(arg0: java.lang.String | string, arg1: java.sql.Timestamp): void
                public updateAsciiStream(arg0: int, arg1: java.io.InputStream, arg2: int): void
                public updateAsciiStream(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: int): void
                public updateCharacterStream(arg0: int, arg1: java.io.Reader, arg2: int): void
                public updateCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: int): void
                public updateBinaryStream(arg0: int, arg1: java.io.InputStream, arg2: int): void
                public updateBinaryStream(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: int): void
                public updateObject(arg0: int, arg1: java.lang.Object): void
                public updateObject(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public updateObject(arg0: int, arg1: java.lang.Object, arg2: int): void
                public updateObject(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: int): void
                public insertRow(): void
                public static class: java.lang.Class<any>
            }
            class JdbcRowSetImpl extends javax.sql.rowset.BaseRowSet implements javax.sql.rowset.JdbcRowSet , javax.sql.rowset.Joinable {
                protected resBundle: com.sun.rowset.JdbcRowSetResourceBundle
                public constructor()
                public constructor(arg0: java.sql.Connection)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string)
                public constructor(arg0: java.sql.ResultSet)
                protected initMetaData(arg0: javax.sql.RowSetMetaData, arg1: java.sql.ResultSetMetaData): void
                protected checkState(): void
                public execute(): void
                protected setProperties(arg0: java.sql.PreparedStatement): void
                protected prepare(): java.sql.PreparedStatement
                public next(): boolean
                public close(): void
                public wasNull(): boolean
                public getString(arg0: int): string
                public getBoolean(arg0: int): boolean
                public getByte(arg0: int): byte
                public getShort(arg0: int): short
                public getInt(arg0: int): int
                public getLong(arg0: int): long
                public getFloat(arg0: int): float
                public getDouble(arg0: int): double
                public getBigDecimal(arg0: int, arg1: int): java.math.BigDecimal
                public getBytes(arg0: int): byte[]
                public getDate(arg0: int): java.sql.Date
                public getTime(arg0: int): java.sql.Time
                public getTimestamp(arg0: int): java.sql.Timestamp
                public getAsciiStream(arg0: int): java.io.InputStream
                public getUnicodeStream(arg0: int): java.io.InputStream
                public getBinaryStream(arg0: int): java.io.InputStream
                public getString(arg0: java.lang.String | string): string
                public getBoolean(arg0: java.lang.String | string): boolean
                public getByte(arg0: java.lang.String | string): byte
                public getShort(arg0: java.lang.String | string): short
                public getInt(arg0: java.lang.String | string): int
                public getLong(arg0: java.lang.String | string): long
                public getFloat(arg0: java.lang.String | string): float
                public getDouble(arg0: java.lang.String | string): double
                public getBigDecimal(arg0: java.lang.String | string, arg1: int): java.math.BigDecimal
                public getBytes(arg0: java.lang.String | string): byte[]
                public getDate(arg0: java.lang.String | string): java.sql.Date
                public getTime(arg0: java.lang.String | string): java.sql.Time
                public getTimestamp(arg0: java.lang.String | string): java.sql.Timestamp
                public getAsciiStream(arg0: java.lang.String | string): java.io.InputStream
                public getUnicodeStream(arg0: java.lang.String | string): java.io.InputStream
                public getBinaryStream(arg0: java.lang.String | string): java.io.InputStream
                public getWarnings(): java.sql.SQLWarning
                public clearWarnings(): void
                public getCursorName(): string
                public getMetaData(): java.sql.ResultSetMetaData
                public getObject(arg0: int): java.lang.Object
                public getObject(arg0: java.lang.String | string): java.lang.Object
                public findColumn(arg0: java.lang.String | string): int
                public getCharacterStream(arg0: int): java.io.Reader
                public getCharacterStream(arg0: java.lang.String | string): java.io.Reader
                public getBigDecimal(arg0: int): java.math.BigDecimal
                public getBigDecimal(arg0: java.lang.String | string): java.math.BigDecimal
                public isBeforeFirst(): boolean
                public isAfterLast(): boolean
                public isFirst(): boolean
                public isLast(): boolean
                public beforeFirst(): void
                public afterLast(): void
                public first(): boolean
                public last(): boolean
                public getRow(): int
                public absolute(arg0: int): boolean
                public relative(arg0: int): boolean
                public previous(): boolean
                public setFetchDirection(arg0: int): void
                public getFetchDirection(): int
                public setFetchSize(arg0: int): void
                public getType(): int
                public getConcurrency(): int
                public rowUpdated(): boolean
                public rowInserted(): boolean
                public rowDeleted(): boolean
                public updateNull(arg0: int): void
                public updateBoolean(arg0: int, arg1: boolean): void
                public updateByte(arg0: int, arg1: byte): void
                public updateShort(arg0: int, arg1: short): void
                public updateInt(arg0: int, arg1: int): void
                public updateLong(arg0: int, arg1: long): void
                public updateFloat(arg0: int, arg1: float): void
                public updateDouble(arg0: int, arg1: double): void
                public updateBigDecimal(arg0: int, arg1: java.math.BigDecimal): void
                public updateString(arg0: int, arg1: java.lang.String | string): void
                public updateBytes(arg0: int, arg1: byte[]): void
                public updateDate(arg0: int, arg1: java.sql.Date): void
                public updateTime(arg0: int, arg1: java.sql.Time): void
                public updateTimestamp(arg0: int, arg1: java.sql.Timestamp): void
                public updateAsciiStream(arg0: int, arg1: java.io.InputStream, arg2: int): void
                public updateBinaryStream(arg0: int, arg1: java.io.InputStream, arg2: int): void
                public updateCharacterStream(arg0: int, arg1: java.io.Reader, arg2: int): void
                public updateObject(arg0: int, arg1: java.lang.Object, arg2: int): void
                public updateObject(arg0: int, arg1: java.lang.Object): void
                public updateNull(arg0: java.lang.String | string): void
                public updateBoolean(arg0: java.lang.String | string, arg1: boolean): void
                public updateByte(arg0: java.lang.String | string, arg1: byte): void
                public updateShort(arg0: java.lang.String | string, arg1: short): void
                public updateInt(arg0: java.lang.String | string, arg1: int): void
                public updateLong(arg0: java.lang.String | string, arg1: long): void
                public updateFloat(arg0: java.lang.String | string, arg1: float): void
                public updateDouble(arg0: java.lang.String | string, arg1: double): void
                public updateBigDecimal(arg0: java.lang.String | string, arg1: java.math.BigDecimal): void
                public updateString(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                public updateBytes(arg0: java.lang.String | string, arg1: byte[]): void
                public updateDate(arg0: java.lang.String | string, arg1: java.sql.Date): void
                public updateTime(arg0: java.lang.String | string, arg1: java.sql.Time): void
                public updateTimestamp(arg0: java.lang.String | string, arg1: java.sql.Timestamp): void
                public updateAsciiStream(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: int): void
                public updateBinaryStream(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: int): void
                public updateCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: int): void
                public updateObject(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: int): void
                public updateObject(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public insertRow(): void
                public updateRow(): void
                public deleteRow(): void
                public refreshRow(): void
                public cancelRowUpdates(): void
                public moveToInsertRow(): void
                public moveToCurrentRow(): void
                public getStatement(): java.sql.Statement
                public getObject(arg0: int, arg1: java.util.Map<java.lang.String, java.lang.Class<any>>): java.lang.Object
                public getRef(arg0: int): java.sql.Ref
                public getBlob(arg0: int): java.sql.Blob
                public getClob(arg0: int): java.sql.Clob
                public getArray(arg0: int): java.sql.Array
                public getObject(arg0: java.lang.String | string, arg1: java.util.Map<java.lang.String, java.lang.Class<any>>): java.lang.Object
                public getRef(arg0: java.lang.String | string): java.sql.Ref
                public getBlob(arg0: java.lang.String | string): java.sql.Blob
                public getClob(arg0: java.lang.String | string): java.sql.Clob
                public getArray(arg0: java.lang.String | string): java.sql.Array
                public getDate(arg0: int, arg1: java.util.Calendar): java.sql.Date
                public getDate(arg0: java.lang.String | string, arg1: java.util.Calendar): java.sql.Date
                public getTime(arg0: int, arg1: java.util.Calendar): java.sql.Time
                public getTime(arg0: java.lang.String | string, arg1: java.util.Calendar): java.sql.Time
                public getTimestamp(arg0: int, arg1: java.util.Calendar): java.sql.Timestamp
                public getTimestamp(arg0: java.lang.String | string, arg1: java.util.Calendar): java.sql.Timestamp
                public updateRef(arg0: int, arg1: java.sql.Ref): void
                public updateRef(arg0: java.lang.String | string, arg1: java.sql.Ref): void
                public updateClob(arg0: int, arg1: java.sql.Clob): void
                public updateClob(arg0: java.lang.String | string, arg1: java.sql.Clob): void
                public updateBlob(arg0: int, arg1: java.sql.Blob): void
                public updateBlob(arg0: java.lang.String | string, arg1: java.sql.Blob): void
                public updateArray(arg0: int, arg1: java.sql.Array): void
                public updateArray(arg0: java.lang.String | string, arg1: java.sql.Array): void
                public getURL(arg0: int): java.net.URL
                public getURL(arg0: java.lang.String | string): java.net.URL
                public getRowSetWarnings(): javax.sql.rowset.RowSetWarning
                public unsetMatchColumn(arg0: int[]): void
                public unsetMatchColumn(arg0: java.lang.String[]): void
                public getMatchColumnNames(): java.lang.String[]
                public getMatchColumnIndexes(): int[]
                public setMatchColumn(arg0: int[]): void
                public setMatchColumn(arg0: java.lang.String[]): void
                public setMatchColumn(arg0: int): void
                public setMatchColumn(arg0: java.lang.String | string): void
                public unsetMatchColumn(arg0: int): void
                public unsetMatchColumn(arg0: java.lang.String | string): void
                public getDatabaseMetaData(): java.sql.DatabaseMetaData
                public getParameterMetaData(): java.sql.ParameterMetaData
                public commit(): void
                public setAutoCommit(arg0: boolean): void
                public getAutoCommit(): boolean
                public rollback(): void
                public rollback(arg0: java.sql.Savepoint): void
                protected setParams(): void
                protected getConnection(): java.sql.Connection
                protected setConnection(arg0: java.sql.Connection): void
                protected getPreparedStatement(): java.sql.PreparedStatement
                protected setPreparedStatement(arg0: java.sql.PreparedStatement): void
                protected getResultSet(): java.sql.ResultSet
                protected setResultSet(arg0: java.sql.ResultSet): void
                public setCommand(arg0: java.lang.String | string): void
                public setDataSourceName(arg0: java.lang.String | string): void
                public setUrl(arg0: java.lang.String | string): void
                public setUsername(arg0: java.lang.String | string): void
                public setPassword(arg0: java.lang.String | string): void
                public setType(arg0: int): void
                public setConcurrency(arg0: int): void
                public getSQLXML(arg0: int): java.sql.SQLXML
                public getSQLXML(arg0: java.lang.String | string): java.sql.SQLXML
                public getRowId(arg0: int): java.sql.RowId
                public getRowId(arg0: java.lang.String | string): java.sql.RowId
                public updateRowId(arg0: int, arg1: java.sql.RowId): void
                public updateRowId(arg0: java.lang.String | string, arg1: java.sql.RowId): void
                public getHoldability(): int
                public isClosed(): boolean
                public updateNString(arg0: int, arg1: java.lang.String | string): void
                public updateNString(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                public updateNClob(arg0: int, arg1: java.sql.NClob): void
                public updateNClob(arg0: java.lang.String | string, arg1: java.sql.NClob): void
                public getNClob(arg0: int): java.sql.NClob
                public getNClob(arg0: java.lang.String | string): java.sql.NClob
                public unwrap<T>(arg0: java.lang.Class<T>): T
                public isWrapperFor<T>(arg0: java.lang.Class<any>): boolean
                public setSQLXML<T>(arg0: int, arg1: java.sql.SQLXML): void
                public setSQLXML<T>(arg0: java.lang.String | string, arg1: java.sql.SQLXML): void
                public setRowId<T>(arg0: int, arg1: java.sql.RowId): void
                public setRowId<T>(arg0: java.lang.String | string, arg1: java.sql.RowId): void
                public setNString<T>(arg0: int, arg1: java.lang.String | string): void
                public setNCharacterStream<T>(arg0: int, arg1: java.io.Reader): void
                public setNClob<T>(arg0: java.lang.String | string, arg1: java.sql.NClob): void
                public getNCharacterStream<T>(arg0: int): java.io.Reader
                public getNCharacterStream<T>(arg0: java.lang.String | string): java.io.Reader
                public updateSQLXML<T>(arg0: int, arg1: java.sql.SQLXML): void
                public updateSQLXML<T>(arg0: java.lang.String | string, arg1: java.sql.SQLXML): void
                public getNString<T>(arg0: int): string
                public getNString<T>(arg0: java.lang.String | string): string
                public updateNCharacterStream<T>(arg0: int, arg1: java.io.Reader, arg2: long): void
                public updateNCharacterStream<T>(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: long): void
                public updateNCharacterStream<T>(arg0: int, arg1: java.io.Reader): void
                public updateNCharacterStream<T>(arg0: java.lang.String | string, arg1: java.io.Reader): void
                public updateBlob<T>(arg0: int, arg1: java.io.InputStream, arg2: long): void
                public updateBlob<T>(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: long): void
                public updateBlob<T>(arg0: int, arg1: java.io.InputStream): void
                public updateBlob<T>(arg0: java.lang.String | string, arg1: java.io.InputStream): void
                public updateClob<T>(arg0: int, arg1: java.io.Reader, arg2: long): void
                public updateClob<T>(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: long): void
                public updateClob<T>(arg0: int, arg1: java.io.Reader): void
                public updateClob<T>(arg0: java.lang.String | string, arg1: java.io.Reader): void
                public updateNClob<T>(arg0: int, arg1: java.io.Reader, arg2: long): void
                public updateNClob<T>(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: long): void
                public updateNClob<T>(arg0: int, arg1: java.io.Reader): void
                public updateNClob<T>(arg0: java.lang.String | string, arg1: java.io.Reader): void
                public updateAsciiStream<T>(arg0: int, arg1: java.io.InputStream, arg2: long): void
                public updateBinaryStream<T>(arg0: int, arg1: java.io.InputStream, arg2: long): void
                public updateCharacterStream<T>(arg0: int, arg1: java.io.Reader, arg2: long): void
                public updateAsciiStream<T>(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: long): void
                public updateAsciiStream<T>(arg0: int, arg1: java.io.InputStream): void
                public updateAsciiStream<T>(arg0: java.lang.String | string, arg1: java.io.InputStream): void
                public updateBinaryStream<T>(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: long): void
                public updateBinaryStream<T>(arg0: int, arg1: java.io.InputStream): void
                public updateBinaryStream<T>(arg0: java.lang.String | string, arg1: java.io.InputStream): void
                public updateCharacterStream<T>(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: long): void
                public updateCharacterStream<T>(arg0: int, arg1: java.io.Reader): void
                public updateCharacterStream<T>(arg0: java.lang.String | string, arg1: java.io.Reader): void
                public setURL<T>(arg0: int, arg1: java.net.URL): void
                public setNClob<T>(arg0: int, arg1: java.io.Reader): void
                public setNClob<T>(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: long): void
                public setNClob<T>(arg0: java.lang.String | string, arg1: java.io.Reader): void
                public setNClob<T>(arg0: int, arg1: java.io.Reader, arg2: long): void
                public setNClob<T>(arg0: int, arg1: java.sql.NClob): void
                public setNString<T>(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                public setNCharacterStream<T>(arg0: int, arg1: java.io.Reader, arg2: long): void
                public setNCharacterStream<T>(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: long): void
                public setNCharacterStream<T>(arg0: java.lang.String | string, arg1: java.io.Reader): void
                public setTimestamp<T>(arg0: java.lang.String | string, arg1: java.sql.Timestamp, arg2: java.util.Calendar): void
                public setClob<T>(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: long): void
                public setClob<T>(arg0: java.lang.String | string, arg1: java.sql.Clob): void
                public setClob<T>(arg0: java.lang.String | string, arg1: java.io.Reader): void
                public setDate<T>(arg0: java.lang.String | string, arg1: java.sql.Date): void
                public setDate<T>(arg0: java.lang.String | string, arg1: java.sql.Date, arg2: java.util.Calendar): void
                public setTime<T>(arg0: java.lang.String | string, arg1: java.sql.Time): void
                public setTime<T>(arg0: java.lang.String | string, arg1: java.sql.Time, arg2: java.util.Calendar): void
                public setClob<T>(arg0: int, arg1: java.io.Reader): void
                public setClob<T>(arg0: int, arg1: java.io.Reader, arg2: long): void
                public setBlob<T>(arg0: int, arg1: java.io.InputStream, arg2: long): void
                public setBlob<T>(arg0: int, arg1: java.io.InputStream): void
                public setBlob<T>(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: long): void
                public setBlob<T>(arg0: java.lang.String | string, arg1: java.sql.Blob): void
                public setBlob<T>(arg0: java.lang.String | string, arg1: java.io.InputStream): void
                public setObject<T>(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: int, arg3: int): void
                public setObject<T>(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: int): void
                public setObject<T>(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public setAsciiStream<T>(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: int): void
                public setBinaryStream<T>(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: int): void
                public setCharacterStream<T>(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: int): void
                public setAsciiStream<T>(arg0: java.lang.String | string, arg1: java.io.InputStream): void
                public setBinaryStream<T>(arg0: java.lang.String | string, arg1: java.io.InputStream): void
                public setCharacterStream<T>(arg0: java.lang.String | string, arg1: java.io.Reader): void
                public setBigDecimal<T>(arg0: java.lang.String | string, arg1: java.math.BigDecimal): void
                public setString<T>(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                public setBytes<T>(arg0: java.lang.String | string, arg1: byte[]): void
                public setTimestamp<T>(arg0: java.lang.String | string, arg1: java.sql.Timestamp): void
                public setNull<T>(arg0: java.lang.String | string, arg1: int): void
                public setNull<T>(arg0: java.lang.String | string, arg1: int, arg2: java.lang.String | string): void
                public setBoolean<T>(arg0: java.lang.String | string, arg1: boolean): void
                public setByte<T>(arg0: java.lang.String | string, arg1: byte): void
                public setShort<T>(arg0: java.lang.String | string, arg1: short): void
                public setInt<T>(arg0: java.lang.String | string, arg1: int): void
                public setLong<T>(arg0: java.lang.String | string, arg1: long): void
                public setFloat<T>(arg0: java.lang.String | string, arg1: float): void
                public setDouble<T>(arg0: java.lang.String | string, arg1: double): void
                public getObject<T>(arg0: int, arg1: java.lang.Class<T>): T
                public getObject<T>(arg0: java.lang.String | string, arg1: java.lang.Class<T>): T
                public static class: java.lang.Class<any>
            }
            class JdbcRowSetResourceBundle implements java.io.Serializable {
                public static getJdbcRowSetResourceBundle(): com.sun.rowset.JdbcRowSetResourceBundle
                public getKeys(): java.util.Enumeration
                public handleGetObject(arg0: java.lang.String | string): java.lang.Object
                public static class: java.lang.Class<any>
            }
            class JoinRowSetImpl extends com.sun.rowset.WebRowSetImpl implements javax.sql.rowset.JoinRowSet {
                public constructor()
                public addRowSet(arg0: javax.sql.rowset.Joinable): void
                public addRowSet(arg0: javax.sql.RowSet, arg1: int): void
                public addRowSet(arg0: javax.sql.RowSet, arg1: java.lang.String | string): void
                public addRowSet(arg0: javax.sql.RowSet[], arg1: int[]): void
                public addRowSet(arg0: javax.sql.RowSet[], arg1: java.lang.String[]): void
                public getRowSets(): java.util.Collection
                public getRowSetNames(): java.lang.String[]
                public toCachedRowSet(): javax.sql.rowset.CachedRowSet
                public supportsCrossJoin(): boolean
                public supportsInnerJoin(): boolean
                public supportsLeftOuterJoin(): boolean
                public supportsRightOuterJoin(): boolean
                public supportsFullJoin(): boolean
                public setJoinType(arg0: int): void
                public getWhereClause(): string
                public next(): boolean
                public close(): void
                public wasNull(): boolean
                public getString(arg0: int): string
                public getBoolean(arg0: int): boolean
                public getByte(arg0: int): byte
                public getShort(arg0: int): short
                public getInt(arg0: int): int
                public getLong(arg0: int): long
                public getFloat(arg0: int): float
                public getDouble(arg0: int): double
                public getBigDecimal(arg0: int, arg1: int): java.math.BigDecimal
                public getBytes(arg0: int): byte[]
                public getDate(arg0: int): java.sql.Date
                public getTime(arg0: int): java.sql.Time
                public getTimestamp(arg0: int): java.sql.Timestamp
                public getAsciiStream(arg0: int): java.io.InputStream
                public getUnicodeStream(arg0: int): java.io.InputStream
                public getBinaryStream(arg0: int): java.io.InputStream
                public getString(arg0: java.lang.String | string): string
                public getBoolean(arg0: java.lang.String | string): boolean
                public getByte(arg0: java.lang.String | string): byte
                public getShort(arg0: java.lang.String | string): short
                public getInt(arg0: java.lang.String | string): int
                public getLong(arg0: java.lang.String | string): long
                public getFloat(arg0: java.lang.String | string): float
                public getDouble(arg0: java.lang.String | string): double
                public getBigDecimal(arg0: java.lang.String | string, arg1: int): java.math.BigDecimal
                public getBytes(arg0: java.lang.String | string): byte[]
                public getDate(arg0: java.lang.String | string): java.sql.Date
                public getTime(arg0: java.lang.String | string): java.sql.Time
                public getTimestamp(arg0: java.lang.String | string): java.sql.Timestamp
                public getAsciiStream(arg0: java.lang.String | string): java.io.InputStream
                public getUnicodeStream(arg0: java.lang.String | string): java.io.InputStream
                public getBinaryStream(arg0: java.lang.String | string): java.io.InputStream
                public getWarnings(): java.sql.SQLWarning
                public clearWarnings(): void
                public getCursorName(): string
                public getMetaData(): java.sql.ResultSetMetaData
                public getObject(arg0: int): java.lang.Object
                public getObject(arg0: int, arg1: java.util.Map<java.lang.String, java.lang.Class<any>>): java.lang.Object
                public getObject(arg0: java.lang.String | string): java.lang.Object
                public getObject(arg0: java.lang.String | string, arg1: java.util.Map<java.lang.String, java.lang.Class<any>>): java.lang.Object
                public getCharacterStream(arg0: int): java.io.Reader
                public getCharacterStream(arg0: java.lang.String | string): java.io.Reader
                public getBigDecimal(arg0: int): java.math.BigDecimal
                public getBigDecimal(arg0: java.lang.String | string): java.math.BigDecimal
                public size(): int
                public isBeforeFirst(): boolean
                public isAfterLast(): boolean
                public isFirst(): boolean
                public isLast(): boolean
                public beforeFirst(): void
                public afterLast(): void
                public first(): boolean
                public last(): boolean
                public getRow(): int
                public absolute(arg0: int): boolean
                public relative(arg0: int): boolean
                public previous(): boolean
                public findColumn(arg0: java.lang.String | string): int
                public rowUpdated(): boolean
                public columnUpdated(arg0: int): boolean
                public rowInserted(): boolean
                public rowDeleted(): boolean
                public updateNull(arg0: int): void
                public updateBoolean(arg0: int, arg1: boolean): void
                public updateByte(arg0: int, arg1: byte): void
                public updateShort(arg0: int, arg1: short): void
                public updateInt(arg0: int, arg1: int): void
                public updateLong(arg0: int, arg1: long): void
                public updateFloat(arg0: int, arg1: float): void
                public updateDouble(arg0: int, arg1: double): void
                public updateBigDecimal(arg0: int, arg1: java.math.BigDecimal): void
                public updateString(arg0: int, arg1: java.lang.String | string): void
                public updateBytes(arg0: int, arg1: byte[]): void
                public updateDate(arg0: int, arg1: java.sql.Date): void
                public updateTime(arg0: int, arg1: java.sql.Time): void
                public updateTimestamp(arg0: int, arg1: java.sql.Timestamp): void
                public updateAsciiStream(arg0: int, arg1: java.io.InputStream, arg2: int): void
                public updateBinaryStream(arg0: int, arg1: java.io.InputStream, arg2: int): void
                public updateCharacterStream(arg0: int, arg1: java.io.Reader, arg2: int): void
                public updateObject(arg0: int, arg1: java.lang.Object, arg2: int): void
                public updateObject(arg0: int, arg1: java.lang.Object): void
                public updateNull(arg0: java.lang.String | string): void
                public updateBoolean(arg0: java.lang.String | string, arg1: boolean): void
                public updateByte(arg0: java.lang.String | string, arg1: byte): void
                public updateShort(arg0: java.lang.String | string, arg1: short): void
                public updateInt(arg0: java.lang.String | string, arg1: int): void
                public updateLong(arg0: java.lang.String | string, arg1: long): void
                public updateFloat(arg0: java.lang.String | string, arg1: float): void
                public updateDouble(arg0: java.lang.String | string, arg1: double): void
                public updateBigDecimal(arg0: java.lang.String | string, arg1: java.math.BigDecimal): void
                public updateString(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                public updateBytes(arg0: java.lang.String | string, arg1: byte[]): void
                public updateDate(arg0: java.lang.String | string, arg1: java.sql.Date): void
                public updateTime(arg0: java.lang.String | string, arg1: java.sql.Time): void
                public updateTimestamp(arg0: java.lang.String | string, arg1: java.sql.Timestamp): void
                public updateAsciiStream(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: int): void
                public updateBinaryStream(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: int): void
                public updateCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: int): void
                public updateObject(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: int): void
                public updateObject(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public insertRow(): void
                public updateRow(): void
                public deleteRow(): void
                public refreshRow(): void
                public cancelRowUpdates(): void
                public moveToInsertRow(): void
                public moveToCurrentRow(): void
                public getStatement(): java.sql.Statement
                public getRef(arg0: int): java.sql.Ref
                public getBlob(arg0: int): java.sql.Blob
                public getClob(arg0: int): java.sql.Clob
                public getArray(arg0: int): java.sql.Array
                public getRef(arg0: java.lang.String | string): java.sql.Ref
                public getBlob(arg0: java.lang.String | string): java.sql.Blob
                public getClob(arg0: java.lang.String | string): java.sql.Clob
                public getArray(arg0: java.lang.String | string): java.sql.Array
                public getDate(arg0: int, arg1: java.util.Calendar): java.sql.Date
                public getDate(arg0: java.lang.String | string, arg1: java.util.Calendar): java.sql.Date
                public getTime(arg0: int, arg1: java.util.Calendar): java.sql.Time
                public getTime(arg0: java.lang.String | string, arg1: java.util.Calendar): java.sql.Time
                public getTimestamp(arg0: int, arg1: java.util.Calendar): java.sql.Timestamp
                public getTimestamp(arg0: java.lang.String | string, arg1: java.util.Calendar): java.sql.Timestamp
                public setMetaData(arg0: javax.sql.RowSetMetaData): void
                public getOriginal(): java.sql.ResultSet
                public getOriginalRow(): java.sql.ResultSet
                public setOriginalRow(): void
                public getKeyColumns(): int[]
                public setKeyColumns(arg0: int[]): void
                public updateRef(arg0: int, arg1: java.sql.Ref): void
                public updateRef(arg0: java.lang.String | string, arg1: java.sql.Ref): void
                public updateClob(arg0: int, arg1: java.sql.Clob): void
                public updateClob(arg0: java.lang.String | string, arg1: java.sql.Clob): void
                public updateBlob(arg0: int, arg1: java.sql.Blob): void
                public updateBlob(arg0: java.lang.String | string, arg1: java.sql.Blob): void
                public updateArray(arg0: int, arg1: java.sql.Array): void
                public updateArray(arg0: java.lang.String | string, arg1: java.sql.Array): void
                public execute(): void
                public execute(arg0: java.sql.Connection): void
                public getURL(arg0: int): java.net.URL
                public getURL(arg0: java.lang.String | string): java.net.URL
                public writeXml(arg0: java.sql.ResultSet, arg1: java.io.Writer | java.io.Writer$$Lambda): void
                public writeXml(arg0: java.io.Writer | java.io.Writer$$Lambda): void
                public readXml(arg0: java.io.Reader): void
                public readXml(arg0: java.io.InputStream): void
                public writeXml(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                public writeXml(arg0: java.sql.ResultSet, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                public getJoinType(): int
                public addRowSetListener(arg0: javax.sql.RowSetListener): void
                public removeRowSetListener(arg0: javax.sql.RowSetListener): void
                public toCollection(): java.util.Collection<any>
                public toCollection(arg0: int): java.util.Collection<any>
                public toCollection(arg0: java.lang.String | string): java.util.Collection<any>
                public createCopySchema(): javax.sql.rowset.CachedRowSet
                public setSyncProvider(arg0: java.lang.String | string): void
                public acceptChanges(): void
                public getSyncProvider(): javax.sql.rowset.spi.SyncProvider
                public static class: java.lang.Class<any>
            }
            class RowSetFactoryImpl implements javax.sql.rowset.RowSetFactory {
                public constructor()
                public createCachedRowSet(): javax.sql.rowset.CachedRowSet
                public createFilteredRowSet(): javax.sql.rowset.FilteredRowSet
                public createJdbcRowSet(): javax.sql.rowset.JdbcRowSet
                public createJoinRowSet(): javax.sql.rowset.JoinRowSet
                public createWebRowSet(): javax.sql.rowset.WebRowSet
                public static class: java.lang.Class<any>
            }
            class WebRowSetImpl extends com.sun.rowset.CachedRowSetImpl implements javax.sql.rowset.WebRowSet {
                public constructor()
                public constructor(arg0: java.util.Hashtable)
                public writeXml(arg0: java.sql.ResultSet, arg1: java.io.Writer | java.io.Writer$$Lambda): void
                public writeXml(arg0: java.io.Writer | java.io.Writer$$Lambda): void
                public readXml(arg0: java.io.Reader): void
                public readXml(arg0: java.io.InputStream): void
                public writeXml(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                public writeXml(arg0: java.sql.ResultSet, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                public static class: java.lang.Class<any>
            }
            namespace internal {
                abstract class BaseRow implements java.io.Serializable , java.lang.Cloneable {
                    protected origVals: java.lang.Object[]
                    public constructor()
                    public getOrigRow(): java.lang.Object[]
                    public getColumnObject(arg0: int): java.lang.Object
                    public setColumnObject(arg0: int, arg1: java.lang.Object): void
                    public static class: java.lang.Class<any>
                }
                class CachedRowSetReader implements javax.sql.RowSetReader , java.io.Serializable {
                    public constructor()
                    public readData(arg0: javax.sql.RowSetInternal): void
                    public reset(): boolean
                    public connect(arg0: javax.sql.RowSetInternal): java.sql.Connection
                    protected getCloseConnection(): boolean
                    public setStartPosition(arg0: int): void
                    public static class: java.lang.Class<any>
                }
                class CachedRowSetWriter implements javax.sql.rowset.spi.TransactionalWriter , java.io.Serializable {
                    public constructor()
                    public writeData(arg0: javax.sql.RowSetInternal): boolean
                    public setReader(arg0: com.sun.rowset.internal.CachedRowSetReader): void
                    public getReader(): com.sun.rowset.internal.CachedRowSetReader
                    public commit(): void
                    public commit(arg0: com.sun.rowset.CachedRowSetImpl, arg1: boolean): void
                    public rollback(): void
                    public rollback(arg0: java.sql.Savepoint): void
                    public static class: java.lang.Class<any>
                }
                class InsertRow extends com.sun.rowset.internal.BaseRow implements java.io.Serializable , java.lang.Cloneable {
                    public constructor(arg0: int)
                    protected markColInserted(arg0: int): void
                    public isCompleteRow(arg0: javax.sql.RowSetMetaData): boolean
                    public initInsertRow(): void
                    public getColumnObject(arg0: int): java.lang.Object
                    public setColumnObject(arg0: int, arg1: java.lang.Object): void
                    public static class: java.lang.Class<any>
                }
                class Row extends com.sun.rowset.internal.BaseRow implements java.io.Serializable , java.lang.Cloneable {
                    public constructor(arg0: int)
                    public constructor(arg0: int, arg1: java.lang.Object[])
                    public initColumnObject(arg0: int, arg1: java.lang.Object): void
                    public setColumnObject(arg0: int, arg1: java.lang.Object): void
                    public getColumnObject(arg0: int): java.lang.Object
                    public getColUpdated(arg0: int): boolean
                    public setDeleted(): void
                    public getDeleted(): boolean
                    public clearDeleted(): void
                    public setInserted(): void
                    public getInserted(): boolean
                    public clearInserted(): void
                    public getUpdated(): boolean
                    public setUpdated(): void
                    public clearUpdated(): void
                    public moveCurrentToOrig(): void
                    public getCurrentRow(): com.sun.rowset.internal.BaseRow
                    public static class: java.lang.Class<any>
                }
                class SyncResolverImpl extends com.sun.rowset.CachedRowSetImpl implements javax.sql.rowset.spi.SyncResolver {
                    public constructor()
                    public getStatus(): int
                    public getConflictValue(arg0: int): java.lang.Object
                    public getConflictValue(arg0: java.lang.String | string): java.lang.Object
                    public setResolvedValue(arg0: int, arg1: java.lang.Object): void
                    public setResolvedValue(arg0: java.lang.String | string, arg1: java.lang.Object): void
                    public nextConflict(): boolean
                    public previousConflict(): boolean
                    public setCommand(arg0: java.lang.String | string): void
                    public populate(arg0: java.sql.ResultSet): void
                    public execute(arg0: java.sql.Connection): void
                    public acceptChanges(): void
                    public acceptChanges(arg0: java.sql.Connection): void
                    public restoreOriginal(): void
                    public release(): void
                    public undoDelete(): void
                    public undoInsert(): void
                    public undoUpdate(): void
                    public createShared(): javax.sql.RowSet
                    protected clone(): java.lang.Object
                    public createCopy(): javax.sql.rowset.CachedRowSet
                    public createCopySchema(): javax.sql.rowset.CachedRowSet
                    public createCopyNoConstraints(): javax.sql.rowset.CachedRowSet
                    public toCollection(): java.util.Collection
                    public toCollection(arg0: int): java.util.Collection
                    public toCollection(arg0: java.lang.String | string): java.util.Collection
                    public getSyncProvider(): javax.sql.rowset.spi.SyncProvider
                    public setSyncProvider(arg0: java.lang.String | string): void
                    public execute(): void
                    public next(): boolean
                    protected internalNext(): boolean
                    public close(): void
                    public wasNull(): boolean
                    protected getCurrentRow(): com.sun.rowset.internal.BaseRow
                    protected removeCurrentRow(): void
                    public getString(arg0: int): string
                    public getBoolean(arg0: int): boolean
                    public getByte(arg0: int): byte
                    public getShort(arg0: int): short
                    public getInt(arg0: int): int
                    public getLong(arg0: int): long
                    public getFloat(arg0: int): float
                    public getDouble(arg0: int): double
                    public getBigDecimal(arg0: int, arg1: int): java.math.BigDecimal
                    public getBytes(arg0: int): byte[]
                    public getDate(arg0: int): java.sql.Date
                    public getTime(arg0: int): java.sql.Time
                    public getTimestamp(arg0: int): java.sql.Timestamp
                    public getAsciiStream(arg0: int): java.io.InputStream
                    public getUnicodeStream(arg0: int): java.io.InputStream
                    public getBinaryStream(arg0: int): java.io.InputStream
                    public getString(arg0: java.lang.String | string): string
                    public getBoolean(arg0: java.lang.String | string): boolean
                    public getByte(arg0: java.lang.String | string): byte
                    public getShort(arg0: java.lang.String | string): short
                    public getInt(arg0: java.lang.String | string): int
                    public getLong(arg0: java.lang.String | string): long
                    public getFloat(arg0: java.lang.String | string): float
                    public getDouble(arg0: java.lang.String | string): double
                    public getBigDecimal(arg0: java.lang.String | string, arg1: int): java.math.BigDecimal
                    public getBytes(arg0: java.lang.String | string): byte[]
                    public getDate(arg0: java.lang.String | string): java.sql.Date
                    public getTime(arg0: java.lang.String | string): java.sql.Time
                    public getTimestamp(arg0: java.lang.String | string): java.sql.Timestamp
                    public getAsciiStream(arg0: java.lang.String | string): java.io.InputStream
                    public getUnicodeStream(arg0: java.lang.String | string): java.io.InputStream
                    public getBinaryStream(arg0: java.lang.String | string): java.io.InputStream
                    public getWarnings(): java.sql.SQLWarning
                    public clearWarnings(): void
                    public getCursorName(): string
                    public getMetaData(): java.sql.ResultSetMetaData
                    public getObject(arg0: int): java.lang.Object
                    public getObject(arg0: java.lang.String | string): java.lang.Object
                    public findColumn(arg0: java.lang.String | string): int
                    public getCharacterStream(arg0: int): java.io.Reader
                    public getCharacterStream(arg0: java.lang.String | string): java.io.Reader
                    public getBigDecimal(arg0: int): java.math.BigDecimal
                    public getBigDecimal(arg0: java.lang.String | string): java.math.BigDecimal
                    public size(): int
                    public isBeforeFirst(): boolean
                    public isAfterLast(): boolean
                    public isFirst(): boolean
                    public isLast(): boolean
                    public beforeFirst(): void
                    public afterLast(): void
                    public first(): boolean
                    protected internalFirst(): boolean
                    public last(): boolean
                    protected internalLast(): boolean
                    public getRow(): int
                    public absolute(arg0: int): boolean
                    public relative(arg0: int): boolean
                    public previous(): boolean
                    protected internalPrevious(): boolean
                    public rowUpdated(): boolean
                    public columnUpdated(arg0: int): boolean
                    public columnUpdated(arg0: java.lang.String | string): boolean
                    public rowInserted(): boolean
                    public rowDeleted(): boolean
                    public updateNull(arg0: int): void
                    public updateBoolean(arg0: int, arg1: boolean): void
                    public updateByte(arg0: int, arg1: byte): void
                    public updateShort(arg0: int, arg1: short): void
                    public updateInt(arg0: int, arg1: int): void
                    public updateLong(arg0: int, arg1: long): void
                    public updateFloat(arg0: int, arg1: float): void
                    public updateDouble(arg0: int, arg1: double): void
                    public updateBigDecimal(arg0: int, arg1: java.math.BigDecimal): void
                    public updateString(arg0: int, arg1: java.lang.String | string): void
                    public updateBytes(arg0: int, arg1: byte[]): void
                    public updateDate(arg0: int, arg1: java.sql.Date): void
                    public updateTime(arg0: int, arg1: java.sql.Time): void
                    public updateTimestamp(arg0: int, arg1: java.sql.Timestamp): void
                    public updateAsciiStream(arg0: int, arg1: java.io.InputStream, arg2: int): void
                    public updateBinaryStream(arg0: int, arg1: java.io.InputStream, arg2: int): void
                    public updateCharacterStream(arg0: int, arg1: java.io.Reader, arg2: int): void
                    public updateObject(arg0: int, arg1: java.lang.Object, arg2: int): void
                    public updateObject(arg0: int, arg1: java.lang.Object): void
                    public updateNull(arg0: java.lang.String | string): void
                    public updateBoolean(arg0: java.lang.String | string, arg1: boolean): void
                    public updateByte(arg0: java.lang.String | string, arg1: byte): void
                    public updateShort(arg0: java.lang.String | string, arg1: short): void
                    public updateInt(arg0: java.lang.String | string, arg1: int): void
                    public updateLong(arg0: java.lang.String | string, arg1: long): void
                    public updateFloat(arg0: java.lang.String | string, arg1: float): void
                    public updateDouble(arg0: java.lang.String | string, arg1: double): void
                    public updateBigDecimal(arg0: java.lang.String | string, arg1: java.math.BigDecimal): void
                    public updateString(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                    public updateBytes(arg0: java.lang.String | string, arg1: byte[]): void
                    public updateDate(arg0: java.lang.String | string, arg1: java.sql.Date): void
                    public updateTime(arg0: java.lang.String | string, arg1: java.sql.Time): void
                    public updateTimestamp(arg0: java.lang.String | string, arg1: java.sql.Timestamp): void
                    public updateAsciiStream(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: int): void
                    public updateBinaryStream(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: int): void
                    public updateCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: int): void
                    public updateObject(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: int): void
                    public updateObject(arg0: java.lang.String | string, arg1: java.lang.Object): void
                    public insertRow(): void
                    public updateRow(): void
                    public deleteRow(): void
                    public refreshRow(): void
                    public cancelRowUpdates(): void
                    public moveToInsertRow(): void
                    public moveToCurrentRow(): void
                    public getStatement(): java.sql.Statement
                    public getObject(arg0: int, arg1: java.util.Map<java.lang.String, java.lang.Class<any>>): java.lang.Object
                    public getRef(arg0: int): java.sql.Ref
                    public getBlob(arg0: int): java.sql.Blob
                    public getClob(arg0: int): java.sql.Clob
                    public getArray(arg0: int): java.sql.Array
                    public getObject(arg0: java.lang.String | string, arg1: java.util.Map<java.lang.String, java.lang.Class<any>>): java.lang.Object
                    public getRef(arg0: java.lang.String | string): java.sql.Ref
                    public getBlob(arg0: java.lang.String | string): java.sql.Blob
                    public getClob(arg0: java.lang.String | string): java.sql.Clob
                    public getArray(arg0: java.lang.String | string): java.sql.Array
                    public getDate(arg0: int, arg1: java.util.Calendar): java.sql.Date
                    public getDate(arg0: java.lang.String | string, arg1: java.util.Calendar): java.sql.Date
                    public getTime(arg0: int, arg1: java.util.Calendar): java.sql.Time
                    public getTime(arg0: java.lang.String | string, arg1: java.util.Calendar): java.sql.Time
                    public getTimestamp(arg0: int, arg1: java.util.Calendar): java.sql.Timestamp
                    public getTimestamp(arg0: java.lang.String | string, arg1: java.util.Calendar): java.sql.Timestamp
                    public getConnection(): java.sql.Connection
                    public setMetaData(arg0: javax.sql.RowSetMetaData): void
                    public getOriginal(): java.sql.ResultSet
                    public getOriginalRow(): java.sql.ResultSet
                    public setOriginalRow(): void
                    public setOriginal(): void
                    public getTableName(): string
                    public setTableName(arg0: java.lang.String | string): void
                    public getKeyColumns(): int[]
                    public setKeyColumns(arg0: int[]): void
                    public updateRef(arg0: int, arg1: java.sql.Ref): void
                    public updateRef(arg0: java.lang.String | string, arg1: java.sql.Ref): void
                    public updateClob(arg0: int, arg1: java.sql.Clob): void
                    public updateClob(arg0: java.lang.String | string, arg1: java.sql.Clob): void
                    public updateBlob(arg0: int, arg1: java.sql.Blob): void
                    public updateBlob(arg0: java.lang.String | string, arg1: java.sql.Blob): void
                    public updateArray(arg0: int, arg1: java.sql.Array): void
                    public updateArray(arg0: java.lang.String | string, arg1: java.sql.Array): void
                    public getURL(arg0: int): java.net.URL
                    public getURL(arg0: java.lang.String | string): java.net.URL
                    public getRowSetWarnings(): javax.sql.rowset.RowSetWarning
                    public commit(): void
                    public rollback(): void
                    public rollback(arg0: java.sql.Savepoint): void
                    public unsetMatchColumn(arg0: int[]): void
                    public unsetMatchColumn(arg0: java.lang.String[]): void
                    public getMatchColumnNames(): java.lang.String[]
                    public getMatchColumnIndexes(): int[]
                    public setMatchColumn(arg0: int[]): void
                    public setMatchColumn(arg0: java.lang.String[]): void
                    public setMatchColumn(arg0: int): void
                    public setMatchColumn(arg0: java.lang.String | string): void
                    public unsetMatchColumn(arg0: int): void
                    public unsetMatchColumn(arg0: java.lang.String | string): void
                    public rowSetPopulated(arg0: javax.sql.RowSetEvent, arg1: int): void
                    public populate(arg0: java.sql.ResultSet, arg1: int): void
                    public nextPage(): boolean
                    public setPageSize(arg0: int): void
                    public getPageSize(): int
                    public previousPage(): boolean
                    public updateNCharacterStream(arg0: int, arg1: java.io.Reader, arg2: int): void
                    public updateNCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: int): void
                    public static class: java.lang.Class<any>
                }
                class WebRowSetXmlReader implements javax.sql.rowset.spi.XmlReader , java.io.Serializable {
                    public constructor()
                    public readXML(arg0: javax.sql.rowset.WebRowSet, arg1: java.io.Reader): void
                    public readXML(arg0: javax.sql.rowset.WebRowSet, arg1: java.io.InputStream): void
                    public readData(arg0: javax.sql.RowSetInternal): void
                    public static class: java.lang.Class<any>
                }
                class WebRowSetXmlWriter implements javax.sql.rowset.spi.XmlWriter , java.io.Serializable {
                    public constructor()
                    public writeXML(arg0: javax.sql.rowset.WebRowSet, arg1: java.io.Writer | java.io.Writer$$Lambda): void
                    public writeXML(arg0: javax.sql.rowset.WebRowSet, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                    public writeData(arg0: javax.sql.RowSetInternal): boolean
                    public static class: java.lang.Class<any>
                }
                class XmlErrorHandler extends org.xml.sax.helpers.DefaultHandler {
                    public errorCounter: int
                    public constructor()
                    public error(arg0: org.xml.sax.SAXParseException): void
                    public fatalError(arg0: org.xml.sax.SAXParseException): void
                    public warning(arg0: org.xml.sax.SAXParseException): void
                    public static class: java.lang.Class<any>
                }
                class XmlReaderContentHandler extends org.xml.sax.helpers.DefaultHandler {
                    public constructor(arg0: javax.sql.RowSet)
                    public startDocument(): void
                    public endDocument(): void
                    public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
                    public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                    public characters(arg0: char[], arg1: int, arg2: int): void
                    public error(arg0: org.xml.sax.SAXParseException): void
                    public warning(arg0: org.xml.sax.SAXParseException): void
                    public notationDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                    public unparsedEntityDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
                    public static class: java.lang.Class<any>
                }
                class XmlResolver implements org.xml.sax.EntityResolver {
                    public constructor()
                    public resolveEntity(arg0: java.lang.String | string, arg1: java.lang.String | string): org.xml.sax.InputSource
                    public static class: java.lang.Class<any>
                }
                class XmlResolver$$Lambda implements org.xml.sax.EntityResolver {
                    public constructor()
                }
            }
            namespace providers {
                class RIOptimisticProvider extends javax.sql.rowset.spi.SyncProvider implements java.io.Serializable {
                    public constructor()
                    public getProviderID(): string
                    public getRowSetWriter(): javax.sql.RowSetWriter
                    public getRowSetReader(): javax.sql.RowSetReader
                    public getProviderGrade(): int
                    public setDataSourceLock(arg0: int): void
                    public getDataSourceLock(): int
                    public supportsUpdatableView(): int
                    public getVersion(): string
                    public getVendor(): string
                    public static class: java.lang.Class<any>
                }
                class RIXMLProvider extends javax.sql.rowset.spi.SyncProvider {
                    public constructor()
                    public getProviderID(): string
                    public setXmlReader(arg0: javax.sql.rowset.spi.XmlReader): void
                    public setXmlWriter(arg0: javax.sql.rowset.spi.XmlWriter): void
                    public getXmlReader(): javax.sql.rowset.spi.XmlReader
                    public getXmlWriter(): javax.sql.rowset.spi.XmlWriter
                    public getProviderGrade(): int
                    public supportsUpdatableView(): int
                    public getDataSourceLock(): int
                    public setDataSourceLock(arg0: int): void
                    public getRowSetWriter(): javax.sql.RowSetWriter
                    public getRowSetReader(): javax.sql.RowSetReader
                    public getVersion(): string
                    public getVendor(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}
declare namespace javax {
    namespace sql {
        namespace rowset {
            abstract class BaseRowSet implements java.io.Serializable , java.lang.Cloneable {
                public static UNICODE_STREAM_PARAM: int
                public static BINARY_STREAM_PARAM: int
                public static ASCII_STREAM_PARAM: int
                protected binaryStream: java.io.InputStream
                protected unicodeStream: java.io.InputStream
                protected asciiStream: java.io.InputStream
                protected charStream: java.io.Reader
                public constructor()
                protected initParams(): void
                public addRowSetListener(arg0: javax.sql.RowSetListener): void
                public removeRowSetListener(arg0: javax.sql.RowSetListener): void
                protected notifyCursorMoved(): void
                protected notifyRowChanged(): void
                protected notifyRowSetChanged(): void
                public getCommand(): string
                public setCommand(arg0: java.lang.String | string): void
                public getUrl(): string
                public setUrl(arg0: java.lang.String | string): void
                public getDataSourceName(): string
                public setDataSourceName(arg0: java.lang.String | string): void
                public getUsername(): string
                public setUsername(arg0: java.lang.String | string): void
                public getPassword(): string
                public setPassword(arg0: java.lang.String | string): void
                public setType(arg0: int): void
                public getType(): int
                public setConcurrency(arg0: int): void
                public isReadOnly(): boolean
                public setReadOnly(arg0: boolean): void
                public getTransactionIsolation(): int
                public setTransactionIsolation(arg0: int): void
                public getTypeMap(): java.util.Map<java.lang.String, java.lang.Class<any>>
                public setTypeMap(arg0: java.util.Map<java.lang.String, java.lang.Class<any>>): void
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
                public setNull(arg0: int, arg1: int, arg2: java.lang.String | string): void
                public setBoolean(arg0: int, arg1: boolean): void
                public setByte(arg0: int, arg1: byte): void
                public setShort(arg0: int, arg1: short): void
                public setInt(arg0: int, arg1: int): void
                public setLong(arg0: int, arg1: long): void
                public setFloat(arg0: int, arg1: float): void
                public setDouble(arg0: int, arg1: double): void
                public setBigDecimal(arg0: int, arg1: java.math.BigDecimal): void
                public setString(arg0: int, arg1: java.lang.String | string): void
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
                public setNull(arg0: java.lang.String | string, arg1: int): void
                public setNull(arg0: java.lang.String | string, arg1: int, arg2: java.lang.String | string): void
                public setBoolean(arg0: java.lang.String | string, arg1: boolean): void
                public setByte(arg0: java.lang.String | string, arg1: byte): void
                public setShort(arg0: java.lang.String | string, arg1: short): void
                public setInt(arg0: java.lang.String | string, arg1: int): void
                public setLong(arg0: java.lang.String | string, arg1: long): void
                public setFloat(arg0: java.lang.String | string, arg1: float): void
                public setDouble(arg0: java.lang.String | string, arg1: double): void
                public setBigDecimal(arg0: java.lang.String | string, arg1: java.math.BigDecimal): void
                public setString(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                public setBytes(arg0: java.lang.String | string, arg1: byte[]): void
                public setTimestamp(arg0: java.lang.String | string, arg1: java.sql.Timestamp): void
                public setAsciiStream(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: int): void
                public setBinaryStream(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: int): void
                public setCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: int): void
                public setAsciiStream(arg0: java.lang.String | string, arg1: java.io.InputStream): void
                public setBinaryStream(arg0: java.lang.String | string, arg1: java.io.InputStream): void
                public setCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader): void
                public setNCharacterStream(arg0: int, arg1: java.io.Reader): void
                public setObject(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: int, arg3: int): void
                public setObject(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: int): void
                public setObject(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public setBlob(arg0: int, arg1: java.io.InputStream, arg2: long): void
                public setBlob(arg0: int, arg1: java.io.InputStream): void
                public setBlob(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: long): void
                public setBlob(arg0: java.lang.String | string, arg1: java.sql.Blob): void
                public setBlob(arg0: java.lang.String | string, arg1: java.io.InputStream): void
                public setClob(arg0: int, arg1: java.io.Reader, arg2: long): void
                public setClob(arg0: int, arg1: java.io.Reader): void
                public setClob(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: long): void
                public setClob(arg0: java.lang.String | string, arg1: java.sql.Clob): void
                public setClob(arg0: java.lang.String | string, arg1: java.io.Reader): void
                public setDate(arg0: java.lang.String | string, arg1: java.sql.Date): void
                public setDate(arg0: java.lang.String | string, arg1: java.sql.Date, arg2: java.util.Calendar): void
                public setTime(arg0: java.lang.String | string, arg1: java.sql.Time): void
                public setTime(arg0: java.lang.String | string, arg1: java.sql.Time, arg2: java.util.Calendar): void
                public setTimestamp(arg0: java.lang.String | string, arg1: java.sql.Timestamp, arg2: java.util.Calendar): void
                public setSQLXML(arg0: int, arg1: java.sql.SQLXML): void
                public setSQLXML(arg0: java.lang.String | string, arg1: java.sql.SQLXML): void
                public setRowId(arg0: int, arg1: java.sql.RowId): void
                public setRowId(arg0: java.lang.String | string, arg1: java.sql.RowId): void
                public setNString(arg0: int, arg1: java.lang.String | string): void
                public setNString(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                public setNCharacterStream(arg0: int, arg1: java.io.Reader, arg2: long): void
                public setNCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: long): void
                public setNCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader): void
                public setNClob(arg0: java.lang.String | string, arg1: java.sql.NClob): void
                public setNClob(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: long): void
                public setNClob(arg0: java.lang.String | string, arg1: java.io.Reader): void
                public setNClob(arg0: int, arg1: java.io.Reader, arg2: long): void
                public setNClob(arg0: int, arg1: java.sql.NClob): void
                public setNClob(arg0: int, arg1: java.io.Reader): void
                public setURL(arg0: int, arg1: java.net.URL): void
                public static class: java.lang.Class<any>
            }
            interface CachedRowSet extends javax.sql.RowSet , javax.sql.rowset.Joinable {
                COMMIT_ON_ACCEPT_CHANGES: boolean
                populate(arg0: java.sql.ResultSet): void
                execute(arg0: java.sql.Connection): void
                acceptChanges(): void
                acceptChanges(arg0: java.sql.Connection): void
                restoreOriginal(): void
                release(): void
                undoDelete(): void
                undoInsert(): void
                undoUpdate(): void
                columnUpdated(arg0: int): boolean
                columnUpdated(arg0: java.lang.String | string): boolean
                toCollection(): java.util.Collection<any>
                toCollection(arg0: int): java.util.Collection<any>
                toCollection(arg0: java.lang.String | string): java.util.Collection<any>
                getSyncProvider(): javax.sql.rowset.spi.SyncProvider
                setSyncProvider(arg0: java.lang.String | string): void
                size(): int
                setMetaData(arg0: javax.sql.RowSetMetaData): void
                getOriginal(): java.sql.ResultSet
                getOriginalRow(): java.sql.ResultSet
                setOriginalRow(): void
                getTableName(): string
                setTableName(arg0: java.lang.String | string): void
                getKeyColumns(): int[]
                setKeyColumns(arg0: int[]): void
                createShared(): javax.sql.RowSet
                createCopy(): javax.sql.rowset.CachedRowSet
                createCopySchema(): javax.sql.rowset.CachedRowSet
                createCopyNoConstraints(): javax.sql.rowset.CachedRowSet
                getRowSetWarnings(): javax.sql.rowset.RowSetWarning
                getShowDeleted(): boolean
                setShowDeleted(arg0: boolean): void
                commit(): void
                rollback(): void
                rollback(arg0: java.sql.Savepoint): void
                rowSetPopulated(arg0: javax.sql.RowSetEvent, arg1: int): void
                populate(arg0: java.sql.ResultSet, arg1: int): void
                setPageSize(arg0: int): void
                getPageSize(): int
                nextPage(): boolean
                previousPage(): boolean
            }
            interface FilteredRowSet extends javax.sql.rowset.WebRowSet {
                setFilter(arg0: javax.sql.rowset.Predicate): void
                getFilter(): javax.sql.rowset.Predicate
            }
            interface JdbcRowSet extends javax.sql.RowSet , javax.sql.rowset.Joinable {
                getShowDeleted(): boolean
                setShowDeleted(arg0: boolean): void
                getRowSetWarnings(): javax.sql.rowset.RowSetWarning
                commit(): void
                getAutoCommit(): boolean
                setAutoCommit(arg0: boolean): void
                rollback(): void
                rollback(arg0: java.sql.Savepoint): void
            }
            interface JoinRowSet extends javax.sql.rowset.WebRowSet {
                CROSS_JOIN: int
                INNER_JOIN: int
                LEFT_OUTER_JOIN: int
                RIGHT_OUTER_JOIN: int
                FULL_JOIN: int
                addRowSet(arg0: javax.sql.rowset.Joinable): void
                addRowSet(arg0: javax.sql.RowSet, arg1: int): void
                addRowSet(arg0: javax.sql.RowSet, arg1: java.lang.String | string): void
                addRowSet(arg0: javax.sql.RowSet[], arg1: int[]): void
                addRowSet(arg0: javax.sql.RowSet[], arg1: java.lang.String[]): void
                getRowSets(): java.util.Collection<any>
                getRowSetNames(): java.lang.String[]
                toCachedRowSet(): javax.sql.rowset.CachedRowSet
                supportsCrossJoin(): boolean
                supportsInnerJoin(): boolean
                supportsLeftOuterJoin(): boolean
                supportsRightOuterJoin(): boolean
                supportsFullJoin(): boolean
                setJoinType(arg0: int): void
                getWhereClause(): string
                getJoinType(): int
            }
            interface Joinable {
                setMatchColumn(arg0: int): void
                setMatchColumn(arg0: int[]): void
                setMatchColumn(arg0: java.lang.String | string): void
                setMatchColumn(arg0: java.lang.String[]): void
                getMatchColumnIndexes(): int[]
                getMatchColumnNames(): java.lang.String[]
                unsetMatchColumn(arg0: int): void
                unsetMatchColumn(arg0: int[]): void
                unsetMatchColumn(arg0: java.lang.String | string): void
                unsetMatchColumn(arg0: java.lang.String[]): void
            }
            interface Predicate {
                evaluate(arg0: javax.sql.RowSet): boolean
                evaluate(arg0: java.lang.Object, arg1: int): boolean
                evaluate(arg0: java.lang.Object, arg1: java.lang.String | string): boolean
            }
            interface RowSetFactory {
                createCachedRowSet(): javax.sql.rowset.CachedRowSet
                createFilteredRowSet(): javax.sql.rowset.FilteredRowSet
                createJdbcRowSet(): javax.sql.rowset.JdbcRowSet
                createJoinRowSet(): javax.sql.rowset.JoinRowSet
                createWebRowSet(): javax.sql.rowset.WebRowSet
            }
            class RowSetMetaDataImpl implements javax.sql.RowSetMetaData , java.io.Serializable {
                public constructor()
                public setColumnCount(arg0: int): void
                public setAutoIncrement(arg0: int, arg1: boolean): void
                public setCaseSensitive(arg0: int, arg1: boolean): void
                public setSearchable(arg0: int, arg1: boolean): void
                public setCurrency(arg0: int, arg1: boolean): void
                public setNullable(arg0: int, arg1: int): void
                public setSigned(arg0: int, arg1: boolean): void
                public setColumnDisplaySize(arg0: int, arg1: int): void
                public setColumnLabel(arg0: int, arg1: java.lang.String | string): void
                public setColumnName(arg0: int, arg1: java.lang.String | string): void
                public setSchemaName(arg0: int, arg1: java.lang.String | string): void
                public setPrecision(arg0: int, arg1: int): void
                public setScale(arg0: int, arg1: int): void
                public setTableName(arg0: int, arg1: java.lang.String | string): void
                public setCatalogName(arg0: int, arg1: java.lang.String | string): void
                public setColumnType(arg0: int, arg1: int): void
                public setColumnTypeName(arg0: int, arg1: java.lang.String | string): void
                public getColumnCount(): int
                public isAutoIncrement(arg0: int): boolean
                public isCaseSensitive(arg0: int): boolean
                public isSearchable(arg0: int): boolean
                public isCurrency(arg0: int): boolean
                public isNullable(arg0: int): int
                public isSigned(arg0: int): boolean
                public getColumnDisplaySize(arg0: int): int
                public getColumnLabel(arg0: int): string
                public getColumnName(arg0: int): string
                public getSchemaName(arg0: int): string
                public getPrecision(arg0: int): int
                public getScale(arg0: int): int
                public getTableName(arg0: int): string
                public getCatalogName(arg0: int): string
                public getColumnType(arg0: int): int
                public getColumnTypeName(arg0: int): string
                public isReadOnly(arg0: int): boolean
                public isWritable(arg0: int): boolean
                public isDefinitelyWritable(arg0: int): boolean
                public getColumnClassName(arg0: int): string
                public unwrap<T>(arg0: java.lang.Class<T>): T
                public isWrapperFor<T>(arg0: java.lang.Class<any>): boolean
                public static class: java.lang.Class<any>
            }
            class RowSetProvider {
                protected constructor()
                public static newFactory(): javax.sql.rowset.RowSetFactory
                public static newFactory(arg0: java.lang.String | string, arg1: java.lang.ClassLoader): javax.sql.rowset.RowSetFactory
                public static class: java.lang.Class<any>
            }
            class RowSetWarning extends java.sql.SQLException {
                public constructor(arg0: java.lang.String | string)
                public constructor()
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int)
                public getNextWarning(): javax.sql.rowset.RowSetWarning
                public setNextWarning(arg0: javax.sql.rowset.RowSetWarning): void
                public static class: java.lang.Class<any>
            }
            interface WebRowSet extends javax.sql.rowset.CachedRowSet {
                PUBLIC_XML_SCHEMA: string
                SCHEMA_SYSTEM_ID: string
                readXml(arg0: java.io.Reader): void
                readXml(arg0: java.io.InputStream): void
                writeXml(arg0: java.sql.ResultSet, arg1: java.io.Writer | java.io.Writer$$Lambda): void
                writeXml(arg0: java.sql.ResultSet, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                writeXml(arg0: java.io.Writer | java.io.Writer$$Lambda): void
                writeXml(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
            }
            namespace serial {
                class SQLInputImpl implements java.sql.SQLInput {
                    public constructor(arg0: java.lang.Object[], arg1: java.util.Map<java.lang.String, java.lang.Class<any>>)
                    public readString(): string
                    public readBoolean(): boolean
                    public readByte(): byte
                    public readShort(): short
                    public readInt(): int
                    public readLong(): long
                    public readFloat(): float
                    public readDouble(): double
                    public readBigDecimal(): java.math.BigDecimal
                    public readBytes(): byte[]
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
                    public readNString(): string
                    public readSQLXML(): java.sql.SQLXML
                    public readRowId(): java.sql.RowId
                    public static class: java.lang.Class<any>
                }
                class SQLOutputImpl implements java.sql.SQLOutput {
                    public constructor(arg0: java.util.Vector<any>, arg1: java.util.Map<java.lang.String, any>)
                    public writeString(arg0: java.lang.String | string): void
                    public writeBoolean(arg0: boolean): void
                    public writeByte(arg0: byte): void
                    public writeShort(arg0: short): void
                    public writeInt(arg0: int): void
                    public writeLong(arg0: long): void
                    public writeFloat(arg0: float): void
                    public writeDouble(arg0: double): void
                    public writeBigDecimal(arg0: java.math.BigDecimal): void
                    public writeBytes(arg0: byte[]): void
                    public writeDate(arg0: java.sql.Date): void
                    public writeTime(arg0: java.sql.Time): void
                    public writeTimestamp(arg0: java.sql.Timestamp): void
                    public writeCharacterStream(arg0: java.io.Reader): void
                    public writeAsciiStream(arg0: java.io.InputStream): void
                    public writeBinaryStream(arg0: java.io.InputStream): void
                    public writeObject(arg0: java.sql.SQLData): void
                    public writeRef(arg0: java.sql.Ref): void
                    public writeBlob(arg0: java.sql.Blob): void
                    public writeClob(arg0: java.sql.Clob): void
                    public writeStruct(arg0: java.sql.Struct): void
                    public writeArray(arg0: java.sql.Array): void
                    public writeURL(arg0: java.net.URL): void
                    public writeNString(arg0: java.lang.String | string): void
                    public writeNClob(arg0: java.sql.NClob): void
                    public writeRowId(arg0: java.sql.RowId): void
                    public writeSQLXML(arg0: java.sql.SQLXML): void
                    public static class: java.lang.Class<any>
                }
                class SerialArray implements java.sql.Array , java.io.Serializable , java.lang.Cloneable {
                    public constructor(arg0: java.sql.Array, arg1: java.util.Map<java.lang.String, java.lang.Class<any>>)
                    public free(): void
                    public constructor(arg0: java.sql.Array)
                    public getArray(): java.lang.Object
                    public getArray(arg0: java.util.Map<java.lang.String, java.lang.Class<any>>): java.lang.Object
                    public getArray(arg0: long, arg1: int): java.lang.Object
                    public getArray(arg0: long, arg1: int, arg2: java.util.Map<java.lang.String, java.lang.Class<any>>): java.lang.Object
                    public getBaseType(): int
                    public getBaseTypeName(): string
                    public getResultSet(arg0: long, arg1: int): java.sql.ResultSet
                    public getResultSet(arg0: java.util.Map<java.lang.String, java.lang.Class<any>>): java.sql.ResultSet
                    public getResultSet(): java.sql.ResultSet
                    public getResultSet(arg0: long, arg1: int, arg2: java.util.Map<java.lang.String, java.lang.Class<any>>): java.sql.ResultSet
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public clone(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class SerialBlob implements java.sql.Blob , java.io.Serializable , java.lang.Cloneable {
                    public constructor(arg0: byte[])
                    public constructor(arg0: java.sql.Blob)
                    public getBytes(arg0: long, arg1: int): byte[]
                    public length(): long
                    public getBinaryStream(): java.io.InputStream
                    public position(arg0: byte[], arg1: long): long
                    public position(arg0: java.sql.Blob, arg1: long): long
                    public setBytes(arg0: long, arg1: byte[]): int
                    public setBytes(arg0: long, arg1: byte[], arg2: int, arg3: int): int
                    public setBinaryStream(arg0: long): java.io.OutputStream
                    public truncate(arg0: long): void
                    public getBinaryStream(arg0: long, arg1: long): java.io.InputStream
                    public free(): void
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public clone(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class SerialClob implements java.sql.Clob , java.io.Serializable , java.lang.Cloneable {
                    public constructor(arg0: char[])
                    public constructor(arg0: java.sql.Clob)
                    public length(): long
                    public getCharacterStream(): java.io.Reader
                    public getAsciiStream(): java.io.InputStream
                    public getSubString(arg0: long, arg1: int): string
                    public position(arg0: java.lang.String | string, arg1: long): long
                    public position(arg0: java.sql.Clob, arg1: long): long
                    public setString(arg0: long, arg1: java.lang.String | string): int
                    public setString(arg0: long, arg1: java.lang.String | string, arg2: int, arg3: int): int
                    public setAsciiStream(arg0: long): java.io.OutputStream
                    public setCharacterStream(arg0: long): java.io.Writer
                    public truncate(arg0: long): void
                    public getCharacterStream(arg0: long, arg1: long): java.io.Reader
                    public free(): void
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public clone(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class SerialDatalink implements java.io.Serializable , java.lang.Cloneable {
                    public constructor(arg0: java.net.URL)
                    public getDatalink(): java.net.URL
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public clone(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class SerialException extends java.sql.SQLException {
                    public constructor()
                    public constructor(arg0: java.lang.String | string)
                    public static class: java.lang.Class<any>
                }
                class SerialJavaObject implements java.io.Serializable , java.lang.Cloneable {
                    public constructor(arg0: java.lang.Object)
                    public getObject(): java.lang.Object
                    public getFields(): java.lang.reflect.Field[]
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public clone(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class SerialRef implements java.sql.Ref , java.io.Serializable , java.lang.Cloneable {
                    public constructor(arg0: java.sql.Ref)
                    public getBaseTypeName(): string
                    public getObject(arg0: java.util.Map<java.lang.String, java.lang.Class<any>>): java.lang.Object
                    public getObject(): java.lang.Object
                    public setObject(arg0: java.lang.Object): void
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public clone(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class SerialStruct implements java.sql.Struct , java.io.Serializable , java.lang.Cloneable {
                    public constructor(arg0: java.sql.Struct, arg1: java.util.Map<java.lang.String, java.lang.Class<any>>)
                    public constructor(arg0: java.sql.SQLData, arg1: java.util.Map<java.lang.String, java.lang.Class<any>>)
                    public getSQLTypeName(): string
                    public getAttributes(): java.lang.Object[]
                    public getAttributes(arg0: java.util.Map<java.lang.String, java.lang.Class<any>>): java.lang.Object[]
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public clone(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
            }
            namespace spi {
                class SyncFactory {
                    public static ROWSET_SYNC_PROVIDER: string
                    public static ROWSET_SYNC_VENDOR: string
                    public static ROWSET_SYNC_PROVIDER_VERSION: string
                    public static registerProvider(arg0: java.lang.String | string): void
                    public static getSyncFactory(): javax.sql.rowset.spi.SyncFactory
                    public static unregisterProvider(arg0: java.lang.String | string): void
                    public static getInstance(arg0: java.lang.String | string): javax.sql.rowset.spi.SyncProvider
                    public static getRegisteredProviders(): java.util.Enumeration<javax.sql.rowset.spi.SyncProvider>
                    public static setLogger(arg0: java.util.logging.Logger): void
                    public static setLogger(arg0: java.util.logging.Logger, arg1: java.util.logging.Level): void
                    public static getLogger(): java.util.logging.Logger
                    public static setJNDIContext(arg0: javax.naming.Context): void
                    public static class: java.lang.Class<any>
                }
                class SyncFactoryException extends java.sql.SQLException {
                    public constructor()
                    public constructor(arg0: java.lang.String | string)
                    public static class: java.lang.Class<any>
                }
                abstract class SyncProvider {
                    public static GRADE_NONE: int
                    public static GRADE_CHECK_MODIFIED_AT_COMMIT: int
                    public static GRADE_CHECK_ALL_AT_COMMIT: int
                    public static GRADE_LOCK_WHEN_MODIFIED: int
                    public static GRADE_LOCK_WHEN_LOADED: int
                    public static DATASOURCE_NO_LOCK: int
                    public static DATASOURCE_ROW_LOCK: int
                    public static DATASOURCE_TABLE_LOCK: int
                    public static DATASOURCE_DB_LOCK: int
                    public static UPDATABLE_VIEW_SYNC: int
                    public static NONUPDATABLE_VIEW_SYNC: int
                    public constructor()
                    public getProviderID(): string
                    public getRowSetReader(): javax.sql.RowSetReader
                    public getRowSetWriter(): javax.sql.RowSetWriter
                    public getProviderGrade(): int
                    public setDataSourceLock(arg0: int): void
                    public getDataSourceLock(): int
                    public supportsUpdatableView(): int
                    public getVersion(): string
                    public getVendor(): string
                    public static class: java.lang.Class<any>
                }
                class SyncProviderException extends java.sql.SQLException {
                    public constructor()
                    public constructor(arg0: java.lang.String | string)
                    public constructor(arg0: javax.sql.rowset.spi.SyncResolver)
                    public getSyncResolver(): javax.sql.rowset.spi.SyncResolver
                    public setSyncResolver(arg0: javax.sql.rowset.spi.SyncResolver): void
                    public static class: java.lang.Class<any>
                }
                interface SyncResolver extends javax.sql.RowSet {
                    UPDATE_ROW_CONFLICT: int
                    DELETE_ROW_CONFLICT: int
                    INSERT_ROW_CONFLICT: int
                    NO_ROW_CONFLICT: int
                    getStatus(): int
                    getConflictValue(arg0: int): java.lang.Object
                    getConflictValue(arg0: java.lang.String | string): java.lang.Object
                    setResolvedValue(arg0: int, arg1: java.lang.Object): void
                    setResolvedValue(arg0: java.lang.String | string, arg1: java.lang.Object): void
                    nextConflict(): boolean
                    previousConflict(): boolean
                }
                interface TransactionalWriter extends javax.sql.RowSetWriter {
                    commit(): void
                    rollback(): void
                    rollback(arg0: java.sql.Savepoint): void
                }
                interface XmlReader extends javax.sql.RowSetReader {
                    readXML(arg0: javax.sql.rowset.WebRowSet, arg1: java.io.Reader): void
                }
                interface XmlWriter extends javax.sql.RowSetWriter {
                    writeXML(arg0: javax.sql.rowset.WebRowSet, arg1: java.io.Writer | java.io.Writer$$Lambda): void
                }
            }
        }
    }
}
