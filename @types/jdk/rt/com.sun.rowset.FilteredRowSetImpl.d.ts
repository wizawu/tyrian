declare namespace com {
    namespace sun {
        namespace rowset {
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

        }
    }
}