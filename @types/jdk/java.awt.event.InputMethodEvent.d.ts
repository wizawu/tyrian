declare namespace java {
  namespace awt {
    namespace event {

      class InputMethodEvent extends java.awt.AWTEvent {
        public static readonly INPUT_METHOD_FIRST: int
        public static readonly INPUT_METHOD_TEXT_CHANGED: int
        public static readonly CARET_POSITION_CHANGED: int
        public static readonly INPUT_METHOD_LAST: int
        when: long
        public constructor(arg0: java.awt.Component, arg1: number | java.lang.Integer, arg2: number | java.lang.Long, arg3: java.text.AttributedCharacterIterator, arg4: number | java.lang.Integer, arg5: java.awt.font.TextHitInfo, arg6: java.awt.font.TextHitInfo)
        public constructor(arg0: java.awt.Component, arg1: number | java.lang.Integer, arg2: java.text.AttributedCharacterIterator, arg3: number | java.lang.Integer, arg4: java.awt.font.TextHitInfo, arg5: java.awt.font.TextHitInfo)
        public constructor(arg0: java.awt.Component, arg1: number | java.lang.Integer, arg2: java.awt.font.TextHitInfo, arg3: java.awt.font.TextHitInfo)
        public getText(): java.text.AttributedCharacterIterator
        public getCommittedCharacterCount(): number
        public getCaret(): java.awt.font.TextHitInfo
        public getVisiblePosition(): java.awt.font.TextHitInfo
        public consume(): void
        public isConsumed(): boolean
        public getWhen(): number
        public paramString(): java.lang.String
      }

    }
  }
}
