declare namespace java {
    namespace sql {
        interface SQLInput {
            readString(): string
            readBoolean(): boolean
            readByte(): byte
            readShort(): short
            readInt(): int
            readLong(): long
            readFloat(): float
            readDouble(): double
            readBigDecimal(): java.math.BigDecimal
            readBytes(): byte[]
            readDate(): java.sql.Date
            readTime(): java.sql.Time
            readTimestamp(): java.sql.Timestamp
            readCharacterStream(): java.io.Reader
            readAsciiStream(): java.io.InputStream
            readBinaryStream(): java.io.InputStream
            readObject(): java.lang.Object
            readRef(): java.sql.Ref
            readBlob(): java.sql.Blob
            readClob(): java.sql.Clob
            readArray(): java.sql.Array
            wasNull(): boolean
            readURL(): java.net.URL
            readNClob(): java.sql.NClob
            readNString(): string
            readSQLXML(): java.sql.SQLXML
            readRowId(): java.sql.RowId
            readObject<T>(arg0: java.lang.Class<T>): T
        }
    }
}