declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
class RIFFWriter extends java.io.OutputStream {
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
    public constructor(arg0: java.io.File, arg1: java.lang.String | string)
    public constructor(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: java.lang.String | string)
    public seek(arg0: long): void
    public getFilePointer(): long
    public setWriteOverride(arg0: boolean): void
    public getWriteOverride(): boolean
    public close(): void
    public write(arg0: int): void
    public write(arg0: byte[], arg1: int, arg2: int): void
    public writeList(arg0: java.lang.String | string): com.sun.media.sound.RIFFWriter
    public writeChunk(arg0: java.lang.String | string): com.sun.media.sound.RIFFWriter
    public writeString(arg0: java.lang.String | string): void
    public writeString(arg0: java.lang.String | string, arg1: int): void
    public writeByte(arg0: int): void
    public writeShort(arg0: short): void
    public writeInt(arg0: int): void
    public writeLong(arg0: long): void
    public writeUnsignedByte(arg0: int): void
    public writeUnsignedShort(arg0: int): void
    public writeUnsignedInt(arg0: long): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}