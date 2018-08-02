declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                class DirectAudioDevice extends com.sun.media.sound.AbstractMixer {
                    public getLine(arg0: javax.sound.sampled.Line$Info): javax.sound.sampled.Line
                    public getMaxLines(arg0: javax.sound.sampled.Line$Info): int
                    protected implOpen(): void
                    protected implClose(): void
                    protected implStart(): void
                    protected implStop(): void
                    protected static getSignOrEndianChangedFormat(arg0: javax.sound.sampled.AudioFormat): javax.sound.sampled.AudioFormat
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}