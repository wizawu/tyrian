declare namespace org {
    namespace classpath {
        namespace icedtea {
            namespace pulseaudio {
                abstract class PulseAudioDataLine extends org.classpath.icedtea.pulseaudio.PulseAudioLine implements javax.sound.sampled.DataLine {
                    protected static readonly DEFAULT_BUFFER_SIZE: int
                    protected streamName: string
                    protected isStarted: boolean
                    protected dataWritten: boolean
                    protected supportedFormats: javax.sound.sampled.AudioFormat[]
                    protected currentFormat: javax.sound.sampled.AudioFormat
                    protected defaultFormat: javax.sound.sampled.AudioFormat
                    protected sendEvents: boolean
                    protected framesSinceOpen: long
                    protected eventLoop: org.classpath.icedtea.pulseaudio.EventLoop
                    protected semaphore: java.util.concurrent.Semaphore
                    protected stream: org.classpath.icedtea.pulseaudio.Stream
                    protected open(arg0: javax.sound.sampled.AudioFormat, arg1: int): void
                    protected open(arg0: javax.sound.sampled.AudioFormat): void
                    public open(): void
                    public close(): void
                    public start(): void
                    public stop(): void
                    public isActive(): boolean
                    public isRunning(): boolean
                    protected abstract connectLine(arg0: int, arg1: org.classpath.icedtea.pulseaudio.Stream): void
                    public getStream(): org.classpath.icedtea.pulseaudio.Stream
                    public getBufferSize(): int
                    public getFormat(): javax.sound.sampled.AudioFormat
                    public getLevel(): float
                    public setName(arg0: java.lang.String | string): void
                    public getName(): string
                    public getBytesInBuffer(): int
                    public static class: java.lang.Class<any>
                }
                interface PulseAudioDataLine$$Lambda extends org.classpath.icedtea.pulseaudio.PulseAudioLine implements javax.sound.sampled.DataLine {
                    (arg0: int, arg1: org.classpath.icedtea.pulseaudio.Stream): void
                }
            }
        }
    }
}