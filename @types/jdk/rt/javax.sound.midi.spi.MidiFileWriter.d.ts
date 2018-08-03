declare namespace javax {
    namespace sound {
        namespace midi {
            namespace spi {
                abstract class MidiFileWriter {
                    public constructor()
                    public abstract getMidiFileTypes(): int[]
                    public abstract getMidiFileTypes(arg0: javax.sound.midi.Sequence): int[]
                    public isFileTypeSupported(arg0: int): boolean
                    public isFileTypeSupported(arg0: int, arg1: javax.sound.midi.Sequence): boolean
                    public abstract write(arg0: javax.sound.midi.Sequence, arg1: int, arg2: java.io.OutputStream | java.io.OutputStream$$Lambda): int
                    public abstract write(arg0: javax.sound.midi.Sequence, arg1: int, arg2: java.io.File): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}