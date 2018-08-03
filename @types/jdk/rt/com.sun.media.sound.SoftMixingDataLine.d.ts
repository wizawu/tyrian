declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                abstract class SoftMixingDataLine implements javax.sound.sampled.DataLine {
                    public static CHORUS_SEND: javax.sound.sampled.FloatControl$Type
                    protected processControlLogic(): void
                    protected processAudioLogic(arg0: com.sun.media.sound.SoftAudioBuffer[]): void
                    public addLineListener(arg0: javax.sound.sampled.LineListener | javax.sound.sampled.LineListener$$Lambda): void
                    public removeLineListener(arg0: javax.sound.sampled.LineListener | javax.sound.sampled.LineListener$$Lambda): void
                    public getLineInfo(): javax.sound.sampled.Line$Info
                    public getControl(arg0: javax.sound.sampled.Control$Type): javax.sound.sampled.Control
                    public getControls(): javax.sound.sampled.Control[]
                    public isControlSupported(arg0: javax.sound.sampled.Control$Type): boolean
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}