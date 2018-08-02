declare namespace com {
    namespace sun {
        namespace rowset {
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
        }
    }
}