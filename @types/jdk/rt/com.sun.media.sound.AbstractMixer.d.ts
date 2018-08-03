declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                abstract class AbstractMixer extends com.sun.media.sound.AbstractLine implements javax.sound.sampled.Mixer {
                    protected static readonly PCM: int
                    protected static readonly ULAW: int
                    protected static readonly ALAW: int
                    protected sourceLineInfo: javax.sound.sampled.Line$Info[]
                    protected targetLineInfo: javax.sound.sampled.Line$Info[]
                    protected constructor(arg0: javax.sound.sampled.Mixer$Info, arg1: javax.sound.sampled.Control[], arg2: javax.sound.sampled.Line$Info[], arg3: javax.sound.sampled.Line$Info[])
                    public getMixerInfo(): javax.sound.sampled.Mixer$Info
                    public getSourceLineInfo(): javax.sound.sampled.Line$Info[]
                    public getTargetLineInfo(): javax.sound.sampled.Line$Info[]
                    public getSourceLineInfo(arg0: javax.sound.sampled.Line$Info): javax.sound.sampled.Line$Info[]
                    public getTargetLineInfo(arg0: javax.sound.sampled.Line$Info): javax.sound.sampled.Line$Info[]
                    public isLineSupported(arg0: javax.sound.sampled.Line$Info): boolean
                    public abstract getLine(arg0: javax.sound.sampled.Line$Info): javax.sound.sampled.Line
                    public abstract getMaxLines(arg0: javax.sound.sampled.Line$Info): int
                    protected abstract implOpen(): void
                    protected abstract implStart(): void
                    protected abstract implStop(): void
                    protected abstract implClose(): void
                    public getSourceLines(): javax.sound.sampled.Line[]
                    public getTargetLines(): javax.sound.sampled.Line[]
                    public synchronize(arg0: javax.sound.sampled.Line[], arg1: boolean): void
                    public unsynchronize(arg0: javax.sound.sampled.Line[]): void
                    public isSynchronizationSupported(arg0: javax.sound.sampled.Line[], arg1: boolean): boolean
                    public open(): void
                    public close(): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}