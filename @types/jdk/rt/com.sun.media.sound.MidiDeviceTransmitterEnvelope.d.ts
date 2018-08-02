declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                class MidiDeviceTransmitterEnvelope implements javax.sound.midi.MidiDeviceTransmitter {
                    public constructor(arg0: javax.sound.midi.MidiDevice, arg1: javax.sound.midi.Transmitter)
                    public setReceiver(arg0: javax.sound.midi.Receiver): void
                    public getReceiver(): javax.sound.midi.Receiver
                    public close(): void
                    public getMidiDevice(): javax.sound.midi.MidiDevice
                    public getTransmitter(): javax.sound.midi.Transmitter
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}