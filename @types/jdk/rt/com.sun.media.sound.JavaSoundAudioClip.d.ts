declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
class JavaSoundAudioClip implements java.applet.AudioClip , javax.sound.midi.MetaEventListener , javax.sound.sampled.LineListener {
    public constructor(arg0: java.io.InputStream)
    public play(): void
    public loop(): void
    public stop(): void
    public update(arg0: javax.sound.sampled.LineEvent): void
    public meta(arg0: javax.sound.midi.MetaMessage): void
    public toString(): string
    protected finalize(): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}