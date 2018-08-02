declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                abstract class AudioFloatInputStream {
                    public constructor()
                    public static getInputStream(arg0: java.net.URL): com.sun.media.sound.AudioFloatInputStream
                    public static getInputStream(arg0: java.io.File): com.sun.media.sound.AudioFloatInputStream
                    public static getInputStream(arg0: java.io.InputStream): com.sun.media.sound.AudioFloatInputStream
                    public static getInputStream(arg0: javax.sound.sampled.AudioInputStream): com.sun.media.sound.AudioFloatInputStream
                    public static getInputStream(arg0: javax.sound.sampled.AudioFormat, arg1: byte[], arg2: int, arg3: int): com.sun.media.sound.AudioFloatInputStream
                    public getFormat(): javax.sound.sampled.AudioFormat
                    public getFrameLength(): long
                    public read(arg0: float[], arg1: int, arg2: int): int
                    public read(arg0: float[]): int
                    public read(): float
                    public skip(arg0: long): long
                    public available(): int
                    public close(): void
                    public mark(arg0: int): void
                    public markSupported(): boolean
                    public reset(): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}