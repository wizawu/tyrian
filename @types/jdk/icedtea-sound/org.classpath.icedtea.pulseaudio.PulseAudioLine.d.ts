declare namespace org {
    namespace classpath {
        namespace icedtea {
            namespace pulseaudio {
                abstract class PulseAudioLine implements javax.sound.sampled.Line {
                    protected lineListeners: java.util.List<javax.sound.sampled.LineListener>
                    protected controls: java.util.List<javax.sound.sampled.Control>
                    protected isOpen: boolean
                    public addLineListener(arg0: javax.sound.sampled.LineListener): void
                    public close(): void
                    protected fireLineEvent(arg0: javax.sound.sampled.LineEvent): void
                    public getControl(arg0: javax.sound.sampled.Control$Type): javax.sound.sampled.Control
                    public getControls(): javax.sound.sampled.Control[]
                    public isControlSupported(arg0: javax.sound.sampled.Control$Type): boolean
                    public isOpen(): boolean
                    public removeLineListener(arg0: javax.sound.sampled.LineListener): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}