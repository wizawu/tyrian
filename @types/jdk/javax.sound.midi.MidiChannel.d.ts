declare namespace javax {
  namespace sound {
    namespace midi {
      interface MidiChannel {
        noteOn(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
        noteOff(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
        noteOff(arg0: number | java.lang.Integer): void
        setPolyPressure(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
        getPolyPressure(arg0: number | java.lang.Integer): number
        setChannelPressure(arg0: number | java.lang.Integer): void
        getChannelPressure(): number
        controlChange(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
        getController(arg0: number | java.lang.Integer): number
        programChange(arg0: number | java.lang.Integer): void
        programChange(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
        getProgram(): number
        setPitchBend(arg0: number | java.lang.Integer): void
        getPitchBend(): number
        resetAllControllers(): void
        allNotesOff(): void
        allSoundOff(): void
        localControl(arg0: boolean | java.lang.Boolean): boolean
        setMono(arg0: boolean | java.lang.Boolean): void
        getMono(): boolean
        setOmni(arg0: boolean | java.lang.Boolean): void
        getOmni(): boolean
        setMute(arg0: boolean | java.lang.Boolean): void
        getMute(): boolean
        setSolo(arg0: boolean | java.lang.Boolean): void
        getSolo(): boolean
      }
    }
  }
}
