declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                abstract class AbstractDataLine extends com.sun.media.sound.AbstractLine implements javax.sound.sampled.DataLine {
                    protected readonly lock: java.lang.Object
                    protected format: javax.sound.sampled.AudioFormat
                    protected bufferSize: int
                    protected running: boolean
                    protected constructor(arg0: javax.sound.sampled.DataLine$Info, arg1: com.sun.media.sound.AbstractMixer, arg2: javax.sound.sampled.Control[])
                    protected constructor(arg0: javax.sound.sampled.DataLine$Info, arg1: com.sun.media.sound.AbstractMixer, arg2: javax.sound.sampled.Control[], arg3: javax.sound.sampled.AudioFormat, arg4: int)
                    public open(arg0: javax.sound.sampled.AudioFormat, arg1: int): void
                    public open(arg0: javax.sound.sampled.AudioFormat): void
                    public available(): int
                    public drain(): void
                    public flush(): void
                    public start(): void
                    public stop(): void
                    public isRunning(): boolean
                    public isActive(): boolean
                    public getMicrosecondPosition(): long
                    public getFormat(): javax.sound.sampled.AudioFormat
                    public getBufferSize(): int
                    public setBufferSize(arg0: int): int
                    public getLevel(): float
                    public open(): void
                    public close(): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}