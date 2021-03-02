declare namespace javax {
  namespace net {
    namespace ssl {

      abstract class SNIMatcher {
        protected constructor(arg0: number | java.lang.Integer)
        public getType(): number
        public abstract matches(arg0: javax.net.ssl.SNIServerName): boolean
      }

    }
  }
}
