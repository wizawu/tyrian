declare namespace java {
  namespace util {
    namespace concurrent {
      namespace locks {
        interface ReadWriteLock {
          readLock(): java.util.concurrent.locks.Lock
          writeLock(): java.util.concurrent.locks.Lock
        }
      }
    }
  }
}
