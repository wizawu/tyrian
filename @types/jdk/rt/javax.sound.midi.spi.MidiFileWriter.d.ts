declare namespace javax {
    namespace sound {
        namespace midi {
            namespace spi {
                abstract class MidiFileWriter {
                    public constructor()
                    public getMidiFileTypes(): int[]
                    public getMidiFileTypes(arg0: javax.sound.midi.Sequence): int[]
                    public isFileTypeSupported(arg0: int): boolean
                    public isFileTypeSupported(arg0: int, arg1: javax.sound.midi.Sequence): boolean
                    public write(arg0: javax.sound.midi.Sequence, arg1: int, arg2: java.io.OutputStream | java.io.OutputStream$$Lambda): int
                    public write(arg0: javax.sound.midi.Sequence, arg1: int, arg2: java.io.File): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}