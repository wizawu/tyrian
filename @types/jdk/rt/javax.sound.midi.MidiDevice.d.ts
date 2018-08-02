declare namespace javax {
    namespace sound {
        namespace midi {
interface MidiDevice extends java.lang.AutoCloseable {
    getDeviceInfo(): javax.sound.midi.MidiDevice$Info
    open(): void
    close(): void
    isOpen(): boolean
    getMicrosecondPosition(): long
    getMaxReceivers(): int
    getMaxTransmitters(): int
    getReceiver(): javax.sound.midi.Receiver
    getReceivers(): java.util.List<javax.sound.midi.Receiver>
    getTransmitter(): javax.sound.midi.Transmitter
    getTransmitters(): java.util.List<javax.sound.midi.Transmitter>
}

        }
    }
}