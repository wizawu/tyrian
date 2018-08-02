declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                class SoftMixingSourceDataLine extends com.sun.media.sound.SoftMixingDataLine implements javax.sound.sampled.SourceDataLine {
                    public write(arg0: byte[], arg1: int, arg2: int): int
                    protected processControlLogic(): void
                    protected processAudioLogic(arg0: com.sun.media.sound.SoftAudioBuffer[]): void
                    public open(): void
                    public open(arg0: javax.sound.sampled.AudioFormat): void
                    public open(arg0: javax.sound.sampled.AudioFormat, arg1: int): void
                    public available(): int
                    public drain(): void
                    public flush(): void
                    public getBufferSize(): int
                    public getFormat(): javax.sound.sampled.AudioFormat
                    public getFramePosition(): int
                    public getLevel(): float
                    public getLongFramePosition(): long
                    public getMicrosecondPosition(): long
                    public isActive(): boolean
                    public isRunning(): boolean
                    public start(): void
                    public stop(): void
                    public close(): void
                    public isOpen(): boolean
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}