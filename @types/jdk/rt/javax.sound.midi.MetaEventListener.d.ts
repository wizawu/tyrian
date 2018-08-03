declare namespace javax {
    namespace sound {
        namespace midi {
            interface MetaEventListener extends java.util.EventListener {
                meta(arg0: javax.sound.midi.MetaMessage): void
            }
            interface MetaEventListener$$Lambda extends java.util.EventListener {
                (arg0: javax.sound.midi.MetaMessage): void
            }
        }
    }
}