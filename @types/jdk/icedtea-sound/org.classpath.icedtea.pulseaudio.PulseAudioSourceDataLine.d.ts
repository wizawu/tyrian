declare namespace org {
    namespace classpath {
        namespace icedtea {
            namespace pulseaudio {
                class PulseAudioSourceDataLine extends org.classpath.icedtea.pulseaudio.PulseAudioDataLine implements javax.sound.sampled.SourceDataLine , org.classpath.icedtea.pulseaudio.PulseAudioPlaybackLine {
                    public static readonly DEFAULT_SOURCEDATALINE_NAME: string
                    public open(arg0: javax.sound.sampled.AudioFormat, arg1: int): void
                    public open(arg0: javax.sound.sampled.AudioFormat): void
                    public native_set_volume(arg0: float): byte[]
                    public native_update_volume(): byte[]
                    public getCachedVolume(): float
                    public setCachedVolume(arg0: float): void
                    protected connectLine(arg0: int, arg1: org.classpath.icedtea.pulseaudio.Stream): void
                    public write(arg0: byte[], arg1: int, arg2: int): int
                    public available(): int
                    public getFramePosition(): int
                    public getLongFramePosition(): long
                    public getMicrosecondPosition(): long
                    public drain(): void
                    public flush(): void
                    public close(): void
                    public getLineInfo(): javax.sound.sampled.Line$Info
                    public getBytesInBuffer(): int
                    public getName(): string
                    public setName(arg0: java.lang.String | string): void
                    public getLevel(): float
                    public getFormat(): javax.sound.sampled.AudioFormat
                    public getBufferSize(): int
                    public getStream(): org.classpath.icedtea.pulseaudio.Stream
                    public isRunning(): boolean
                    public isActive(): boolean
                    public stop(): void
                    public start(): void
                    public open(): void
                    public removeLineListener(arg0: javax.sound.sampled.LineListener | javax.sound.sampled.LineListener$$Lambda): void
                    public isOpen(): boolean
                    public isControlSupported(arg0: javax.sound.sampled.Control$Type): boolean
                    public getControls(): javax.sound.sampled.Control[]
                    public getControl(arg0: javax.sound.sampled.Control$Type): javax.sound.sampled.Control
                    public addLineListener(arg0: javax.sound.sampled.LineListener | javax.sound.sampled.LineListener$$Lambda): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}