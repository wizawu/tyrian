declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                abstract class AbstractLine implements javax.sound.sampled.Line {
                    protected info: javax.sound.sampled.Line$Info
                    protected controls: javax.sound.sampled.Control[]
                    protected constructor(arg0: javax.sound.sampled.Line$Info, arg1: com.sun.media.sound.AbstractMixer, arg2: javax.sound.sampled.Control[])
                    public getLineInfo(): javax.sound.sampled.Line$Info
                    public isOpen(): boolean
                    public addLineListener(arg0: javax.sound.sampled.LineListener): void
                    public removeLineListener(arg0: javax.sound.sampled.LineListener): void
                    public getControls(): javax.sound.sampled.Control[]
                    public isControlSupported(arg0: javax.sound.sampled.Control$Type): boolean
                    public getControl(arg0: javax.sound.sampled.Control$Type): javax.sound.sampled.Control
                    public getFramePosition(): int
                    public getLongFramePosition(): long
                    public open(): void
                    public close(): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}