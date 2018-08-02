declare namespace javax {
    namespace sql {
        namespace rowset {
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
            }
        }
    }
}