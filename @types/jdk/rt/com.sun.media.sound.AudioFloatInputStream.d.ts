declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                abstract class AudioFloatInputStream {
                    public constructor()
                    public static getInputStream(arg0: java.net.URL): com.sun.media.sound.AudioFloatInputStream
                    public static getInputStream(arg0: java.io.File): com.sun.media.sound.AudioFloatInputStream
                    public static getInputStream(arg0: java.io.InputStream | java.io.InputStream$$Lambda): com.sun.media.sound.AudioFloatInputStream
                    public static getInputStream(arg0: javax.sound.sampled.AudioInputStream): com.sun.media.sound.AudioFloatInputStream
                    public static getInputStream(arg0: javax.sound.sampled.AudioFormat, arg1: byte[], arg2: int, arg3: int): com.sun.media.sound.AudioFloatInputStream
                    public abstract getFormat(): javax.sound.sampled.AudioFormat
                    public abstract getFrameLength(): long
                    public abstract read(arg0: float[], arg1: int, arg2: int): int
                    public read(arg0: float[]): int
                    public read(): float
                    public abstract skip(arg0: long): long
                    public abstract available(): int
                    public abstract close(): void
                    public abstract mark(arg0: int): void
                    public abstract markSupported(): boolean
                    public abstract reset(): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}