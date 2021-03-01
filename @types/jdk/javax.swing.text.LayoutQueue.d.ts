declare namespace javax {
  namespace swing {
    namespace text {

      class LayoutQueue {

        public constructor()
        public static getDefaultQueue(): javax.swing.text.LayoutQueue
        public static setDefaultQueue(arg0: javax.swing.text.LayoutQueue): void
        public addTask(arg0: java.lang.Runnable): void
        protected waitForWork(): java.lang.Runnable
      }

    }
  }
}
