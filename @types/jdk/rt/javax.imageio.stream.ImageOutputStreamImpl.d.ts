declare namespace javax {
    namespace imageio {
        namespace stream {
abstract class ImageOutputStreamImpl extends javax.imageio.stream.ImageInputStreamImpl implements javax.imageio.stream.ImageOutputStream {
    public constructor()
    public write(arg0: int): void
    public write(arg0: byte[]): void
    public write(arg0: byte[], arg1: int, arg2: int): void
    public writeBoolean(arg0: boolean): void
    public writeByte(arg0: int): void
    public writeShort(arg0: int): void
    public writeChar(arg0: int): void
    public writeInt(arg0: int): void
    public writeLong(arg0: long): void
    public writeFloat(arg0: float): void
    public writeDouble(arg0: double): void
    public writeBytes(arg0: java.lang.String | string): void
    public writeChars(arg0: java.lang.String | string): void
    public writeUTF(arg0: java.lang.String | string): void
    public writeShorts(arg0: short[], arg1: int, arg2: int): void
    public writeChars(arg0: char[], arg1: int, arg2: int): void
    public writeInts(arg0: int[], arg1: int, arg2: int): void
    public writeLongs(arg0: long[], arg1: int, arg2: int): void
    public writeFloats(arg0: float[], arg1: int, arg2: int): void
    public writeDoubles(arg0: double[], arg1: int, arg2: int): void
    public writeBit(arg0: int): void
    public writeBits(arg0: long, arg1: int): void
    protected flushBits(): void
    public static class: java.lang.Class<any>
}

        }
    }
}