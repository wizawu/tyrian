declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                class StandardMidiFileWriter extends javax.sound.midi.spi.MidiFileWriter {
                    public constructor()
                    public getMidiFileTypes(): int[]
                    public getMidiFileTypes(arg0: javax.sound.midi.Sequence): int[]
                    public isFileTypeSupported(arg0: int): boolean
                    public write(arg0: javax.sound.midi.Sequence, arg1: int, arg2: java.io.OutputStream): int
                    public write(arg0: javax.sound.midi.Sequence, arg1: int, arg2: java.io.File): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}