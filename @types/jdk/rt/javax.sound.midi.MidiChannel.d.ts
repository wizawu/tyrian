declare namespace javax {
    namespace sound {
        namespace midi {
            interface MidiChannel {
                noteOn(arg0: int, arg1: int): void
                noteOff(arg0: int, arg1: int): void
                noteOff(arg0: int): void
                setPolyPressure(arg0: int, arg1: int): void
                getPolyPressure(arg0: int): int
                setChannelPressure(arg0: int): void
                getChannelPressure(): int
                controlChange(arg0: int, arg1: int): void
                getController(arg0: int): int
                programChange(arg0: int): void
                programChange(arg0: int, arg1: int): void
                getProgram(): int
                setPitchBend(arg0: int): void
                getPitchBend(): int
                resetAllControllers(): void
                allNotesOff(): void
                allSoundOff(): void
                localControl(arg0: boolean): boolean
                setMono(arg0: boolean): void
                getMono(): boolean
                setOmni(arg0: boolean): void
                getOmni(): boolean
                setMute(arg0: boolean): void
                getMute(): boolean
                setSolo(arg0: boolean): void
                getSolo(): boolean
            }
        }
    }
}