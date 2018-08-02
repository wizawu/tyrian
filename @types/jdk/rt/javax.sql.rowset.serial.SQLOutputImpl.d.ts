declare namespace javax {
    namespace sql {
        namespace rowset {
            namespace serial {
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

            }
        }
    }
}