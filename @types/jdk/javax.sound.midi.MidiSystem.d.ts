declare namespace javax {
  namespace sound {
    namespace midi {

      class MidiSystem {

        public static getMidiDeviceInfo(): javax.sound.midi.MidiDevice$Info[]
        public static getMidiDevice(arg0: javax.sound.midi.MidiDevice$Info): javax.sound.midi.MidiDevice
        public static getReceiver(): javax.sound.midi.Receiver
        public static getTransmitter(): javax.sound.midi.Transmitter
        public static getSynthesizer(): javax.sound.midi.Synthesizer
        public static getSequencer(): javax.sound.midi.Sequencer
        public static getSequencer(arg0: boolean): javax.sound.midi.Sequencer
        public static getSoundbank(arg0: java.io.InputStream): javax.sound.midi.Soundbank
        public static getSoundbank(arg0: java.net.URL): javax.sound.midi.Soundbank
        public static getSoundbank(arg0: java.io.File): javax.sound.midi.Soundbank
        public static getMidiFileFormat(arg0: java.io.InputStream): javax.sound.midi.MidiFileFormat
        public static getMidiFileFormat(arg0: java.net.URL): javax.sound.midi.MidiFileFormat
        public static getMidiFileFormat(arg0: java.io.File): javax.sound.midi.MidiFileFormat
        public static getSequence(arg0: java.io.InputStream): javax.sound.midi.Sequence
        public static getSequence(arg0: java.net.URL): javax.sound.midi.Sequence
        public static getSequence(arg0: java.io.File): javax.sound.midi.Sequence
        public static getMidiFileTypes(): int[]
        public static isFileTypeSupported(arg0: int): boolean
        public static getMidiFileTypes(arg0: javax.sound.midi.Sequence): int[]
        public static isFileTypeSupported(arg0: int, arg1: javax.sound.midi.Sequence): boolean
        public static write(arg0: javax.sound.midi.Sequence, arg1: int, arg2: java.io.OutputStream): int
        public static write(arg0: javax.sound.midi.Sequence, arg1: int, arg2: java.io.File): int
      }

    }
  }
}
