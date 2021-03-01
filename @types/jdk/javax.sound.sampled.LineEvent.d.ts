declare namespace javax {
  namespace sound {
    namespace sampled {

      class LineEvent extends java.util.EventObject {

        public constructor(arg0: javax.sound.sampled.Line, arg1: javax.sound.sampled.LineEvent$Type, arg2: long)
        public readonly getLine(): javax.sound.sampled.Line
        public readonly getType(): javax.sound.sampled.LineEvent$Type
        public readonly getFramePosition(): long
        public toString(): java.lang.String
      }

    }
  }
}
