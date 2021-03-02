declare namespace javax {
  namespace swing {
    namespace event {

      class InternalFrameEvent extends java.awt.AWTEvent {
        public static readonly INTERNAL_FRAME_FIRST: int
        public static readonly INTERNAL_FRAME_LAST: int
        public static readonly INTERNAL_FRAME_OPENED: int
        public static readonly INTERNAL_FRAME_CLOSING: int
        public static readonly INTERNAL_FRAME_CLOSED: int
        public static readonly INTERNAL_FRAME_ICONIFIED: int
        public static readonly INTERNAL_FRAME_DEICONIFIED: int
        public static readonly INTERNAL_FRAME_ACTIVATED: int
        public static readonly INTERNAL_FRAME_DEACTIVATED: int
        public constructor(arg0: javax.swing.JInternalFrame, arg1: number | java.lang.Integer)
        public paramString(): java.lang.String
        public getInternalFrame(): javax.swing.JInternalFrame
      }

    }
  }
}
