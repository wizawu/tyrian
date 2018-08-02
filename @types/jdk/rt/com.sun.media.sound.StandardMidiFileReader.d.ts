declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                class StandardMidiFileReader extends javax.sound.midi.spi.MidiFileReader {
                    public constructor()
                    public getMidiFileFormat(arg0: java.io.InputStream): javax.sound.midi.MidiFileFormat
                    public getMidiFileFormat(arg0: java.net.URL): javax.sound.midi.MidiFileFormat
                    public getMidiFileFormat(arg0: java.io.File): javax.sound.midi.MidiFileFormat
                    public getSequence(arg0: java.io.InputStream): javax.sound.midi.Sequence
                    public getSequence(arg0: java.net.URL): javax.sound.midi.Sequence
                    public getSequence(arg0: java.io.File): javax.sound.midi.Sequence
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}