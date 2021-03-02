declare namespace javax {
  namespace sound {
    namespace sampled {

      class LineEvent extends java.util.EventObject {
        public constructor(arg0: javax.sound.sampled.Line, arg1: javax.sound.sampled.LineEvent$Type, arg2: long)
        public getLine(): javax.sound.sampled.Line
        public getType(): javax.sound.sampled.LineEvent$Type
        public getFramePosition(): long
        public toString(): java.lang.String
      }

    }
  }
}
