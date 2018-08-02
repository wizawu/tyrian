declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
class RealTimeSequencer extends com.sun.media.sound.AbstractMidiDevice implements javax.sound.midi.Sequencer , com.sun.media.sound.AutoConnectSequencer {
    public setSequence(arg0: javax.sound.midi.Sequence): void
    public setSequence(arg0: java.io.InputStream): void
    public getSequence(): javax.sound.midi.Sequence
    public start(): void
    public stop(): void
    public isRunning(): boolean
    public startRecording(): void
    public stopRecording(): void
    public isRecording(): boolean
    public recordEnable(arg0: javax.sound.midi.Track, arg1: int): void
    public recordDisable(arg0: javax.sound.midi.Track): void
    public getTempoInBPM(): float
    public setTempoInBPM(arg0: float): void
    public getTempoInMPQ(): float
    public setTempoInMPQ(arg0: float): void
    public setTempoFactor(arg0: float): void
    public getTempoFactor(): float
    public getTickLength(): long
    public getTickPosition(): long
    public setTickPosition(arg0: long): void
    public getMicrosecondLength(): long
    public getMicrosecondPosition(): long
    public setMicrosecondPosition(arg0: long): void
    public setMasterSyncMode(arg0: javax.sound.midi.Sequencer$SyncMode): void
    public getMasterSyncMode(): javax.sound.midi.Sequencer$SyncMode
    public getMasterSyncModes(): javax.sound.midi.Sequencer$SyncMode[]
    public setSlaveSyncMode(arg0: javax.sound.midi.Sequencer$SyncMode): void
    public getSlaveSyncMode(): javax.sound.midi.Sequencer$SyncMode
    public getSlaveSyncModes(): javax.sound.midi.Sequencer$SyncMode[]
    public setTrackMute(arg0: int, arg1: boolean): void
    public getTrackMute(arg0: int): boolean
    public setTrackSolo(arg0: int, arg1: boolean): void
    public getTrackSolo(arg0: int): boolean
    public addMetaEventListener(arg0: javax.sound.midi.MetaEventListener): boolean
    public removeMetaEventListener(arg0: javax.sound.midi.MetaEventListener): void
    public addControllerEventListener(arg0: javax.sound.midi.ControllerEventListener, arg1: int[]): int[]
    public removeControllerEventListener(arg0: javax.sound.midi.ControllerEventListener, arg1: int[]): int[]
    public setLoopStartPoint(arg0: long): void
    public getLoopStartPoint(): long
    public setLoopEndPoint(arg0: long): void
    public getLoopEndPoint(): long
    public setLoopCount(arg0: int): void
    public getLoopCount(): int
    protected implOpen(): void
    protected implClose(): void
    protected hasReceivers(): boolean
    protected createReceiver(): javax.sound.midi.Receiver
    protected hasTransmitters(): boolean
    protected createTransmitter(): javax.sound.midi.Transmitter
    public setAutoConnect(arg0: javax.sound.midi.Receiver): void
    public static class: java.lang.Class<any>
}

class RealTimeSequencer$$Lambda extends com.sun.media.sound.AbstractMidiDevice implements javax.sound.midi.Sequencer , com.sun.media.sound.AutoConnectSequencer {
    public (arg0: javax.sound.midi.Sequence): void
}

            }
        }
    }
}