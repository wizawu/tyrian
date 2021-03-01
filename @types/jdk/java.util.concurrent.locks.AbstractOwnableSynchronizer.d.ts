declare namespace java {
  namespace util {
    namespace concurrent {
      namespace locks {

        abstract class AbstractOwnableSynchronizer implements java.io.Serializable {

          protected constructor()
          protected readonly setExclusiveOwnerThread(arg0: java.lang.Thread): void
          protected readonly getExclusiveOwnerThread(): java.lang.Thread
        }

      }
    }
  }
}
