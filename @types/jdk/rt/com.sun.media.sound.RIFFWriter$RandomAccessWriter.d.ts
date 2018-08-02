declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                interface RIFFWriter$RandomAccessWriter {
                    seek(arg0: long): void
                    getPointer(): long
                    close(): void
                    write(arg0: int): void
                    write(arg0: byte[], arg1: int, arg2: int): void
                    write(arg0: byte[]): void
                    length(): long
                    setLength(arg0: long): void
                }
            }
        }
    }
}