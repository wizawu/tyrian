declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                class MidiDeviceReceiverEnvelope implements javax.sound.midi.MidiDeviceReceiver {
                    public constructor(arg0: javax.sound.midi.MidiDevice, arg1: javax.sound.midi.Receiver)
                    public close(): void
                    public send(arg0: javax.sound.midi.MidiMessage | javax.sound.midi.MidiMessage$$Lambda, arg1: long): void
                    public getMidiDevice(): javax.sound.midi.MidiDevice
                    public getReceiver(): javax.sound.midi.Receiver
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}