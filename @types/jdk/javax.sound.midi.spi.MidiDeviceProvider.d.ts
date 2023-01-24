declare namespace javax {
  namespace sound {
    namespace midi {
      namespace spi {
        abstract class MidiDeviceProvider {
          public constructor()
          public isDeviceSupported(arg0: javax.sound.midi.MidiDevice$Info): boolean
          public abstract getDeviceInfo(): javax.sound.midi.MidiDevice$Info[]
          public abstract getDevice(arg0: javax.sound.midi.MidiDevice$Info): javax.sound.midi.MidiDevice
        }
      }
    }
  }
}
