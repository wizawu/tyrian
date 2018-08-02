declare namespace java {
    namespace nio {
        namespace channels {
class Channels {
    public static newInputStream(arg0: java.nio.channels.ReadableByteChannel): java.io.InputStream
    public static newOutputStream(arg0: java.nio.channels.WritableByteChannel): java.io.OutputStream
    public static newInputStream(arg0: java.nio.channels.AsynchronousByteChannel): java.io.InputStream
    public static newOutputStream(arg0: java.nio.channels.AsynchronousByteChannel): java.io.OutputStream
    public static newChannel(arg0: java.io.InputStream): java.nio.channels.ReadableByteChannel
    public static newChannel(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): java.nio.channels.WritableByteChannel
    public static newReader(arg0: java.nio.channels.ReadableByteChannel, arg1: java.nio.charset.CharsetDecoder, arg2: int): java.io.Reader
    public static newReader(arg0: java.nio.channels.ReadableByteChannel, arg1: java.lang.String | string): java.io.Reader
    public static newWriter(arg0: java.nio.channels.WritableByteChannel, arg1: java.nio.charset.CharsetEncoder, arg2: int): java.io.Writer
    public static newWriter(arg0: java.nio.channels.WritableByteChannel, arg1: java.lang.String | string): java.io.Writer
    public static class: java.lang.Class<any>
}

        }
    }
}