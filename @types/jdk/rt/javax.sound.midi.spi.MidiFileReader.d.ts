declare namespace javax {
    namespace sound {
        namespace midi {
            namespace spi {
                abstract class MidiFileReader {
                    public constructor()
                    public abstract getMidiFileFormat(arg0: java.io.InputStream | java.io.InputStream$$Lambda): javax.sound.midi.MidiFileFormat
                    public abstract getMidiFileFormat(arg0: java.net.URL): javax.sound.midi.MidiFileFormat
                    public abstract getMidiFileFormat(arg0: java.io.File): javax.sound.midi.MidiFileFormat
                    public abstract getSequence(arg0: java.io.InputStream | java.io.InputStream$$Lambda): javax.sound.midi.Sequence
                    public abstract getSequence(arg0: java.net.URL): javax.sound.midi.Sequence
                    public abstract getSequence(arg0: java.io.File): javax.sound.midi.Sequence
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}