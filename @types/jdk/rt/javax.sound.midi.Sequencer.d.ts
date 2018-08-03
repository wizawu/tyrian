declare namespace javax {
    namespace sound {
        namespace midi {
            interface Sequencer extends javax.sound.midi.MidiDevice {
                LOOP_CONTINUOUSLY: int
                setSequence(arg0: javax.sound.midi.Sequence): void
                setSequence(arg0: java.io.InputStream): void
                getSequence(): javax.sound.midi.Sequence
                start(): void
                stop(): void
                isRunning(): boolean
                startRecording(): void
                stopRecording(): void
                isRecording(): boolean
                recordEnable(arg0: javax.sound.midi.Track, arg1: int): void
                recordDisable(arg0: javax.sound.midi.Track): void
                getTempoInBPM(): float
                setTempoInBPM(arg0: float): void
                getTempoInMPQ(): float
                setTempoInMPQ(arg0: float): void
                setTempoFactor(arg0: float): void
                getTempoFactor(): float
                getTickLength(): long
                getTickPosition(): long
                setTickPosition(arg0: long): void
                getMicrosecondLength(): long
                getMicrosecondPosition(): long
                setMicrosecondPosition(arg0: long): void
                setMasterSyncMode(arg0: javax.sound.midi.Sequencer$SyncMode): void
                getMasterSyncMode(): javax.sound.midi.Sequencer$SyncMode
                getMasterSyncModes(): javax.sound.midi.Sequencer$SyncMode[]
                setSlaveSyncMode(arg0: javax.sound.midi.Sequencer$SyncMode): void
                getSlaveSyncMode(): javax.sound.midi.Sequencer$SyncMode
                getSlaveSyncModes(): javax.sound.midi.Sequencer$SyncMode[]
                setTrackMute(arg0: int, arg1: boolean): void
                getTrackMute(arg0: int): boolean
                setTrackSolo(arg0: int, arg1: boolean): void
                getTrackSolo(arg0: int): boolean
                addMetaEventListener(arg0: javax.sound.midi.MetaEventListener | javax.sound.midi.MetaEventListener$$Lambda): boolean
                removeMetaEventListener(arg0: javax.sound.midi.MetaEventListener | javax.sound.midi.MetaEventListener$$Lambda): void
                addControllerEventListener(arg0: javax.sound.midi.ControllerEventListener | javax.sound.midi.ControllerEventListener$$Lambda, arg1: int[]): int[]
                removeControllerEventListener(arg0: javax.sound.midi.ControllerEventListener | javax.sound.midi.ControllerEventListener$$Lambda, arg1: int[]): int[]
                setLoopStartPoint(arg0: long): void
                getLoopStartPoint(): long
                setLoopEndPoint(arg0: long): void
                getLoopEndPoint(): long
                setLoopCount(arg0: int): void
                getLoopCount(): int
            }
        }
    }
}