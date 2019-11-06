declare namespace org {
    namespace classpath {
        namespace icedtea {
            namespace pulseaudio {
                class PulseAudioMixer implements javax.sound.sampled.Mixer {
                    public static getInstance(): org.classpath.icedtea.pulseaudio.PulseAudioMixer
                    public getLine(arg0: javax.sound.sampled.Line$Info): javax.sound.sampled.Line
                    public getMaxLines(arg0: javax.sound.sampled.Line$Info): int
                    public getMixerInfo(): javax.sound.sampled.Mixer$Info
                    public getSourceLineInfo(): javax.sound.sampled.Line$Info[]
                    public getSourceLineInfo(arg0: javax.sound.sampled.Line$Info): javax.sound.sampled.Line$Info[]
                    public getSourceLines(): javax.sound.sampled.Line[]
                    public getTargetLineInfo(): javax.sound.sampled.Line$Info[]
                    public getTargetLineInfo(arg0: javax.sound.sampled.Line$Info): javax.sound.sampled.Line$Info[]
                    public getTargetLines(): javax.sound.sampled.Line[]
                    public isLineSupported(arg0: javax.sound.sampled.Line$Info): boolean
                    public isSynchronizationSupported(arg0: javax.sound.sampled.Line[], arg1: boolean): boolean
                    public synchronize(arg0: javax.sound.sampled.Line[], arg1: boolean): void
                    public unsynchronize(arg0: javax.sound.sampled.Line[]): void
                    public addLineListener(arg0: javax.sound.sampled.LineListener): void
                    public close(): void
                    public getControl(arg0: javax.sound.sampled.Control$Type): javax.sound.sampled.Control
                    public getControls(): javax.sound.sampled.Control[]
                    public getLineInfo(): javax.sound.sampled.Line$Info
                    public isControlSupported(arg0: javax.sound.sampled.Control$Type): boolean
                    public isOpen(): boolean
                    public open(): void
                    public openLocal(): void
                    public openLocal(arg0: java.lang.String | string): void
                    public openRemote(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                    public openRemote(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int): void
                    public removeLineListener(arg0: javax.sound.sampled.LineListener): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}