declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                class SoftReceiver implements javax.sound.midi.MidiDeviceReceiver {
                    public constructor(arg0: com.sun.media.sound.SoftSynthesizer)
                    public getMidiDevice(): javax.sound.midi.MidiDevice
                    public send(arg0: javax.sound.midi.MidiMessage | javax.sound.midi.MidiMessage$$Lambda, arg1: long): void
                    public close(): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}