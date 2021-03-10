declare namespace javax {
  namespace sound {
    namespace midi {

      interface Sequencer extends javax.sound.midi.MidiDevice {
        public static readonly LOOP_CONTINUOUSLY: int
        setSequence(arg0: javax.sound.midi.Sequence): void
        setSequence(arg0: java.io.InputStream): void
        getSequence(): javax.sound.midi.Sequence
        start(): void
        stop(): void
        isRunning(): boolean
        startRecording(): void
        stopRecording(): void
        isRecording(): boolean
        recordEnable(arg0: javax.sound.midi.Track, arg1: number | java.lang.Integer): void
        recordDisable(arg0: javax.sound.midi.Track): void
        getTempoInBPM(): number
        setTempoInBPM(arg0: number | java.lang.Float): void
        getTempoInMPQ(): number
        setTempoInMPQ(arg0: number | java.lang.Float): void
        setTempoFactor(arg0: number | java.lang.Float): void
        getTempoFactor(): number
        getTickLength(): number
        getTickPosition(): number
        setTickPosition(arg0: number | java.lang.Long): void
        getMicrosecondLength(): number
        getMicrosecondPosition(): number
        setMicrosecondPosition(arg0: number | java.lang.Long): void
        setMasterSyncMode(arg0: javax.sound.midi.Sequencer$SyncMode): void
        getMasterSyncMode(): javax.sound.midi.Sequencer$SyncMode
        getMasterSyncModes(): javax.sound.midi.Sequencer$SyncMode[]
        setSlaveSyncMode(arg0: javax.sound.midi.Sequencer$SyncMode): void
        getSlaveSyncMode(): javax.sound.midi.Sequencer$SyncMode
        getSlaveSyncModes(): javax.sound.midi.Sequencer$SyncMode[]
        setTrackMute(arg0: number | java.lang.Integer, arg1: boolean | java.lang.Boolean): void
        getTrackMute(arg0: number | java.lang.Integer): boolean
        setTrackSolo(arg0: number | java.lang.Integer, arg1: boolean | java.lang.Boolean): void
        getTrackSolo(arg0: number | java.lang.Integer): boolean
        addMetaEventListener(arg0: javax.sound.midi.MetaEventListener | javax.sound.midi.MetaEventListener$$lambda): boolean
        removeMetaEventListener(arg0: javax.sound.midi.MetaEventListener | javax.sound.midi.MetaEventListener$$lambda): void
        addControllerEventListener(arg0: javax.sound.midi.ControllerEventListener | javax.sound.midi.ControllerEventListener$$lambda, arg1: number[] | java.lang.Integer[]): number[]
        removeControllerEventListener(arg0: javax.sound.midi.ControllerEventListener | javax.sound.midi.ControllerEventListener$$lambda, arg1: number[] | java.lang.Integer[]): number[]
        setLoopStartPoint(arg0: number | java.lang.Long): void
        getLoopStartPoint(): number
        setLoopEndPoint(arg0: number | java.lang.Long): void
        getLoopEndPoint(): number
        setLoopCount(arg0: number | java.lang.Integer): void
        getLoopCount(): number
      }

    }
  }
}
