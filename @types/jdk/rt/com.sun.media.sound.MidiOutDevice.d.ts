declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                class MidiOutDevice extends com.sun.media.sound.AbstractMidiDevice {
                    protected implOpen(): void
                    protected implClose(): void
                    public getMicrosecondPosition(): long
                    protected hasReceivers(): boolean
                    protected createReceiver(): javax.sound.midi.Receiver
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}