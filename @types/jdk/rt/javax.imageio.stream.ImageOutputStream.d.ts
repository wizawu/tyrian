declare namespace javax {
    namespace imageio {
        namespace stream {
interface ImageOutputStream extends javax.imageio.stream.ImageInputStream , java.io.DataOutput {
    write(arg0: int): void
    write(arg0: byte[]): void
    write(arg0: byte[], arg1: int, arg2: int): void
    writeBoolean(arg0: boolean): void
    writeByte(arg0: int): void
    writeShort(arg0: int): void
    writeChar(arg0: int): void
    writeInt(arg0: int): void
    writeLong(arg0: long): void
    writeFloat(arg0: float): void
    writeDouble(arg0: double): void
    writeBytes(arg0: java.lang.String | string): void
    writeChars(arg0: java.lang.String | string): void
    writeUTF(arg0: java.lang.String | string): void
    writeShorts(arg0: short[], arg1: int, arg2: int): void
    writeChars(arg0: char[], arg1: int, arg2: int): void
    writeInts(arg0: int[], arg1: int, arg2: int): void
    writeLongs(arg0: long[], arg1: int, arg2: int): void
    writeFloats(arg0: float[], arg1: int, arg2: int): void
    writeDoubles(arg0: double[], arg1: int, arg2: int): void
    writeBit(arg0: int): void
    writeBits(arg0: long, arg1: int): void
    flushBefore(arg0: long): void
}

        }
    }
}