declare namespace sun {
    namespace misc {
class UCDecoder extends sun.misc.CharacterDecoder {
    public constructor()
    protected bytesPerAtom(): int
    protected bytesPerLine(): int
    protected decodeAtom(arg0: java.io.PushbackInputStream, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: int): void
    protected decodeBufferPrefix(arg0: java.io.PushbackInputStream, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): void
    protected decodeLinePrefix(arg0: java.io.PushbackInputStream, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): int
    protected decodeLineSuffix(arg0: java.io.PushbackInputStream, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): void
    public static class: java.lang.Class<any>
}

    }
}