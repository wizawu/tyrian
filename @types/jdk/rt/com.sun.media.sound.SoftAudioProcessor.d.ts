declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                interface SoftAudioProcessor {
                    globalParameterControlChange(arg0: int[], arg1: long, arg2: long): void
                    init(arg0: float, arg1: float): void
                    setInput(arg0: int, arg1: com.sun.media.sound.SoftAudioBuffer): void
                    setOutput(arg0: int, arg1: com.sun.media.sound.SoftAudioBuffer): void
                    setMixMode(arg0: boolean): void
                    processAudio(): void
                    processControlLogic(): void
                }
            }
        }
    }
}