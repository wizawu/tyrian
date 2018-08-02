declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
class SoftMixingClip extends com.sun.media.sound.SoftMixingDataLine implements javax.sound.sampled.Clip {
    protected processControlLogic(): void
    protected processAudioLogic(arg0: com.sun.media.sound.SoftAudioBuffer[]): void
    public getFrameLength(): int
    public getMicrosecondLength(): long
    public loop(arg0: int): void
    public open(arg0: javax.sound.sampled.AudioInputStream): void
    public open(arg0: javax.sound.sampled.AudioFormat, arg1: byte[], arg2: int, arg3: int): void
    public setFramePosition(arg0: int): void
    public setLoopPoints(arg0: int, arg1: int): void
    public setMicrosecondPosition(arg0: long): void
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
    public open(): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}