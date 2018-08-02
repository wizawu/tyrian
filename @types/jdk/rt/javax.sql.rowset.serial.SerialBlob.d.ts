declare namespace javax {
    namespace sql {
        namespace rowset {
            namespace serial {
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
            }
        }
    }
}