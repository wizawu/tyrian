declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
class SoftSynthesizer$WeakAudioStream extends java.io.InputStream {
    public pusher: com.sun.media.sound.SoftAudioPusher
    public jitter_stream: javax.sound.sampled.AudioInputStream
    public sourceDataLine: javax.sound.sampled.SourceDataLine
    public silent_samples: long
    public setInputStream(arg0: javax.sound.sampled.AudioInputStream): void
    public available(): int
    public read(): int
    public read(arg0: byte[], arg1: int, arg2: int): int
    public constructor(arg0: javax.sound.sampled.AudioInputStream)
    public getAudioInputStream(): javax.sound.sampled.AudioInputStream
    public close(): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}