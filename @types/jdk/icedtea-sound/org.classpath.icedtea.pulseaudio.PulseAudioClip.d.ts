declare namespace org {
    namespace classpath {
        namespace icedtea {
            namespace pulseaudio {
                class PulseAudioClip extends org.classpath.icedtea.pulseaudio.PulseAudioDataLine implements javax.sound.sampled.Clip , org.classpath.icedtea.pulseaudio.PulseAudioPlaybackLine {
                    public static readonly DEFAULT_CLIP_NAME: string
                    protected connectLine(arg0: int, arg1: org.classpath.icedtea.pulseaudio.Stream): void
                    public available(): int
                    public close(): void
                    public drain(): void
                    public flush(): void
                    public getFrameLength(): int
                    public getFramePosition(): int
                    public getLongFramePosition(): long
                    public getMicrosecondLength(): long
                    public getMicrosecondPosition(): long
                    public loop(arg0: int): void
                    public open(): void
                    public open(arg0: javax.sound.sampled.AudioFormat, arg1: byte[], arg2: int, arg3: int): void
                    public native_set_volume(arg0: float): byte[]
                    public native_update_volume(): byte[]
                    public getCachedVolume(): float
                    public setCachedVolume(arg0: float): void
                    public open(arg0: javax.sound.sampled.AudioInputStream): void
                    public setFramePosition(arg0: int): void
                    public setLoopPoints(arg0: int, arg1: int): void
                    public setMicrosecondPosition(arg0: long): void
                    public start(): void
                    public stop(): void
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
                    public removeLineListener(arg0: javax.sound.sampled.LineListener): void
                    public isOpen(): boolean
                    public isControlSupported(arg0: javax.sound.sampled.Control$Type): boolean
                    public getControls(): javax.sound.sampled.Control[]
                    public getControl(arg0: javax.sound.sampled.Control$Type): javax.sound.sampled.Control
                    public addLineListener(arg0: javax.sound.sampled.LineListener): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}