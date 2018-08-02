declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
class SoftReverb implements com.sun.media.sound.SoftAudioProcessor {
    public constructor()
    public init(arg0: float, arg1: float): void
    public setInput(arg0: int, arg1: com.sun.media.sound.SoftAudioBuffer): void
    public setOutput(arg0: int, arg1: com.sun.media.sound.SoftAudioBuffer): void
    public setMixMode(arg0: boolean): void
    public processAudio(): void
    public globalParameterControlChange(arg0: int[], arg1: long, arg2: long): void
    public processControlLogic(): void
    public setRoomSize(arg0: float): void
    public setPreDelay(arg0: float): void
    public setGain(arg0: float): void
    public setDamp(arg0: float): void
    public setLightMode(arg0: boolean): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}