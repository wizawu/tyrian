declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                class MidiInDevice extends com.sun.media.sound.AbstractMidiDevice implements java.lang.Runnable {
                    protected implOpen(): void
                    protected implClose(): void
                    public getMicrosecondPosition(): long
                    protected hasTransmitters(): boolean
                    protected createTransmitter(): javax.sound.midi.Transmitter
                    public run(): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}