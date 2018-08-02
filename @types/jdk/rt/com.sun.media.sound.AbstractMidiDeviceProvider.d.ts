declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                abstract class AbstractMidiDeviceProvider extends javax.sound.midi.spi.MidiDeviceProvider {
                    public constructor()
                    public getDeviceInfo(): javax.sound.midi.MidiDevice$Info[]
                    public getDevice(arg0: javax.sound.midi.MidiDevice$Info): javax.sound.midi.MidiDevice
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}