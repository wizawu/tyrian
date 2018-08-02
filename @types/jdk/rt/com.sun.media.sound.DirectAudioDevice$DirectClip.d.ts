declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
class DirectAudioDevice$DirectClip extends com.sun.media.sound.DirectAudioDevice$DirectDL implements javax.sound.sampled.Clip , java.lang.Runnable , com.sun.media.sound.AutoClosingClip {
    public open(arg0: javax.sound.sampled.AudioFormat, arg1: byte[], arg2: int, arg3: int): void
    public open(arg0: javax.sound.sampled.AudioInputStream): void
    public getFrameLength(): int
    public getMicrosecondLength(): long
    public setFramePosition(arg0: int): void
    public getLongFramePosition(): long
    public setMicrosecondPosition(arg0: long): void
    public setLoopPoints(arg0: int, arg1: int): void
    public loop(arg0: int): void
    public run(): void
    public isAutoClosing(): boolean
    public setAutoClosing(arg0: boolean): void
    protected requiresServicing(): boolean
    public static class: java.lang.Class<any>
}

            }
        }
    }
}