declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                class SoftLimiter implements com.sun.media.sound.SoftAudioProcessor {
                    public constructor()
                    public init(arg0: float, arg1: float): void
                    public setInput(arg0: int, arg1: com.sun.media.sound.SoftAudioBuffer): void
                    public setOutput(arg0: int, arg1: com.sun.media.sound.SoftAudioBuffer): void
                    public setMixMode(arg0: boolean): void
                    public globalParameterControlChange(arg0: int[], arg1: long, arg2: long): void
                    public processAudio(): void
                    public processControlLogic(): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}