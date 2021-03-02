declare namespace org {
  namespace ietf {
    namespace jgss {

      class ChannelBinding {
        public constructor(arg0: java.net.InetAddress, arg1: java.net.InetAddress, arg2: byte[])
        public constructor(arg0: byte[])
        public getInitiatorAddress(): java.net.InetAddress
        public getAcceptorAddress(): java.net.InetAddress
        public getApplicationData(): number[]
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
      }

    }
  }
}
