declare namespace com {
  namespace sun {
    namespace nio {
      namespace sctp {

        class Association {

          protected constructor(arg0: int, arg1: int, arg2: int)
          public readonly associationID(): int
          public readonly maxInboundStreams(): int
          public readonly maxOutboundStreams(): int
        }

      }
    }
  }
}
