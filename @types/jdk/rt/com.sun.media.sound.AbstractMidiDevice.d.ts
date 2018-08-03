declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                abstract class AbstractMidiDevice implements javax.sound.midi.MidiDevice , com.sun.media.sound.ReferenceCountingDevice {
                    protected id: long
                    protected constructor(arg0: javax.sound.midi.MidiDevice$Info)
                    public getDeviceInfo(): javax.sound.midi.MidiDevice$Info
                    public open(): void
                    public close(): void
                    public closeInternal(arg0: java.lang.Object): void
                    public doClose(): void
                    public isOpen(): boolean
                    protected implClose(): void
                    public getMicrosecondPosition(): long
                    public getMaxReceivers(): int
                    public getMaxTransmitters(): int
                    public getReceiver(): javax.sound.midi.Receiver
                    public getReceivers(): java.util.List<javax.sound.midi.Receiver>
                    public getTransmitter(): javax.sound.midi.Transmitter
                    public getTransmitters(): java.util.List<javax.sound.midi.Transmitter>
                    public getReceiverReferenceCounting(): javax.sound.midi.Receiver
                    public getTransmitterReferenceCounting(): javax.sound.midi.Transmitter
                    protected hasReceivers(): boolean
                    protected createReceiver(): javax.sound.midi.Receiver
                    protected hasTransmitters(): boolean
                    protected createTransmitter(): javax.sound.midi.Transmitter
                    protected abstract implOpen(): void
                    protected finalize(): void
                    public static class: java.lang.Class<any>
                }
                interface AbstractMidiDevice$$Lambda implements javax.sound.midi.MidiDevice , com.sun.media.sound.ReferenceCountingDevice {
                    (): void
                }
            }
        }
    }
}