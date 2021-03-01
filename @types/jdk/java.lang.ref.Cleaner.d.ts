declare namespace java {
  namespace lang {
    namespace ref {

      class Cleaner {

        readonly impl: jdk.internal.ref.CleanerImpl
        public static create(): java.lang.ref.Cleaner
        public static create(arg0: java.util.concurrent.ThreadFactory): java.lang.ref.Cleaner
        public register(arg0: java.lang.Object, arg1: java.lang.Runnable): java.lang.ref.Cleaner$Cleanable
      }

    }
  }
}
