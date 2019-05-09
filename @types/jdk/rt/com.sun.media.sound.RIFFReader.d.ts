declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                class RIFFReader extends java.io.InputStream {
                    public constructor(arg0: java.io.InputStream | java.io.InputStream$$Lambda)
                    public getFilePointer(): long
                    public hasNextChunk(): boolean
                    public nextChunk(): com.sun.media.sound.RIFFReader
                    public getFormat(): string
                    public getType(): string
                    public getSize(): long
                    public read(): int
                    public read(arg0: byte[], arg1: int, arg2: int): int
                    public readFully(arg0: byte[]): void
                    public readFully(arg0: byte[], arg1: int, arg2: int): void
                    public skip(arg0: long): long
                    public available(): int
                    public finish(): void
                    public readString(arg0: int): string
                    public readByte(): byte
                    public readShort(): short
                    public readInt(): int
                    public readLong(): long
                    public readUnsignedByte(): int
                    public readUnsignedShort(): int
                    public readUnsignedInt(): long
                    public close(): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}